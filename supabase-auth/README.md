# Sistema de Login com Supabase — PW3

Atividade conforme slides **Sistema de Login com Supabase**: HTML, CSS e JavaScript com Supabase Auth, login e área restrita.

## Site
https://kelvinrosendo.github.io/ETEC-Curso---html/supabase-auth/

## Configuração necessária (uma única vez)
1. Acesse https://supabase.com/dashboard e crie uma organização e um projeto no plano gratuito. Guarde a **database password** em local privado.
2. Em **Authentication > Sign In / Providers**, habilite Email. Em **Authentication > URL Configuration**, use como Site URL e Redirect URL: `https://kelvinrosendo.github.io/ETEC-Curso---html/supabase-auth/`.
3. Em **Project Settings > API Keys**, copie a URL do projeto e a chave **publishable** (ou a legacy `anon`), **não** a secret / service_role. Substitua `SUPABASE_URL` e `SUPABASE_ANON_KEY` em `config.js`.
4. Publique as mudanças em `main`, confirme que GitHub Pages está habilitado em **Settings > Pages** com source `Deploy from a branch`, branch `main`, pasta `/(root)`.
5. Para testar, crie um usuário em **Authentication > Users**, ou use a aba **Cadastrar** e confirme o e-mail se necessário. Entre e confira a área restrita; clique em Sair e teste novamente.
6. Se o professor disponibilizou uma conta de teste, crie-a/convide-a **no seu próprio projeto** em Authentication > Users. Não coloque a senha no repositório.

**Atenção:** o painel é uma interface restrita no navegador. Para dados sensíveis de verdade, ative **Row Level Security (RLS)** em toda tabela e use policies ligadas ao usuário autenticado. Não copie as políticas públicas de SELECT/INSERT/DELETE do exemplo do slide: elas deixariam os dados acessíveis a terceiros.

Não há necessidade de servidor próprio; o Supabase é o backend. Não publique credenciais administrativas, senhas de banco ou service_role. 
