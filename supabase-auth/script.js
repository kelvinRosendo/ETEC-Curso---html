import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./config.js";
const $ = id => document.getElementById(id);
const configured = /^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/i.test(SUPABASE_URL) && SUPABASE_ANON_KEY.length > 25;
const supabase = configured ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;
const titles = {login:["Entre na sua conta","Utilize seu e-mail e senha para continuar.","Entrar na plataforma"],signup:["Crie sua conta","Cadastre-se para acessar a área restrita.","Criar conta"],reset:["Recupere sua senha","Receba por e-mail um link de recuperação.","Enviar link"]};
let mode = "login";
const message = (text, type="") => { $("message").textContent = text; $("message").className = type; };
function setMode(next){mode=next;const [title,subtitle,submit]=titles[mode];$("heading").textContent=title;$("subtitle").textContent=subtitle;$("submit").textContent=submit;$("password-group").hidden=mode==="reset";$("password").required=mode!=="reset";$("password").autocomplete=mode==="signup"?"new-password":"current-password";document.querySelectorAll("[data-mode]").forEach(b=>b.classList.toggle("active",b.dataset.mode===mode));message("");}
function showUser(user){$("auth-screen").hidden=!!user;$("private-screen").hidden=!user;if(user){$("user-email").textContent=user.email||"Sem e-mail";$("user-id").textContent="ID: "+user.id;}else{$("password").value="";}}
document.querySelectorAll("[data-mode]").forEach(b=>b.addEventListener("click",()=>setMode(b.dataset.mode)));
$("setup").hidden=configured;
$("submit").disabled=!configured;
if(supabase){
  supabase.auth.getUser().then(({data,error})=>{if(!error)showUser(data.user);else showUser(null);}).catch(()=>message("Não foi possível verificar a sessão. Confira a conexão.","error"));
  supabase.auth.onAuthStateChange((_event,session)=>{showUser(session?.user||null);});
}
$("auth-form").addEventListener("submit",async event=>{
 event.preventDefault();if(!supabase)return;const email=$("email").value.trim(),password=$("password").value,button=$("submit");
 button.disabled=true;message("Processando...");
 try {
   let result;
   if(mode==="login") result=await supabase.auth.signInWithPassword({email,password});
   else if(mode==="signup") result=await supabase.auth.signUp({email,password,options:{emailRedirectTo:location.origin+location.pathname}});
   else result=await supabase.auth.resetPasswordForEmail(email,{redirectTo:location.origin+location.pathname});
   if(result.error)throw result.error;
   if(mode==="signup"&&!result.data.session)message("Cadastro recebido. Confira seu e-mail para confirmar a conta.","success");
   else if(mode==="reset")message("Se o e-mail estiver cadastrado, você receberá instruções de recuperação.","success");
   else message("Operação concluída!","success");
 }catch(error){message(error.message||"Erro inesperado na autenticação.","error");}
 finally{button.disabled=false;}
});
$("logout").addEventListener("click",async()=>{if(!supabase)return;const {error}=await supabase.auth.signOut();if(error)message(error.message,"error");else{showUser(null);setMode("login");message("Sessão encerrada.","success");}});
supabase?.auth.onAuthStateChange(async(event)=>{
 if(event==="PASSWORD_RECOVERY"){
  const newPassword=prompt("Digite uma nova senha (mínimo de 6 caracteres):");
  if(newPassword){if(newPassword.length<6){message("Use no mínimo 6 caracteres.","error");return;}const {error}=await supabase.auth.updateUser({password:newPassword});message(error?error.message:"Senha atualizada.",error?"error":"success");}
 }
});
