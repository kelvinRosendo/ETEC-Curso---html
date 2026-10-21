# O Pacto — Quiz de Contratualismo

Quiz responsivo com 9 questões sobre Hobbes, Locke, Rousseau e contrato social brasileiro. Fácil: 3×60s (100 pontos); médio: 3×75s (200 pontos); difícil: 3×90s (300 pontos). Cadastro por nome, sala com apresentador, sincronização em tempo real e classificação final completa.

## Para ativar multiplayer (OBRIGATÓRIO)

1. Criar projeto no https://console.firebase.google.com/ .
2. Ativar Authentication > Sign-in method > Anonymous.
3. Criar Realtime Database e configurar regras adequadas ao uso escolar. **Nunca deixar regras abertas em produção.**
4. Obter credenciais públicas do aplicativo Web e colocá-las em `config.js`.
5. Publicar site estático por GitHub Pages (Settings > Pages; configurar fonte/branch; manter pasta `quiz-contratualismo`).
6. Abrir site em todos dispositivos; apresentador escolhe **Sou apresentador** antes de alunos entrarem e divulga código da sala.

GitHub Pages sozinho não é multiplayer. A capacidade de 40 celulares depende de Firebase, Wi-Fi e teste de carga. O funcionamento não foi testado com 40 pessoas. O controle e a pontuação nesta versão são orientados a sala confiável: código de resposta visível no navegador, e participantes tecnicamente capazes podem alterar pontuações; para competição com antifraude, migrar correção ao servidor (Cloud Functions + regras rigorosas). O relógio usa horário do dispositivo, portanto sincronize os aparelhos para uma competição mais justa.

## Conteúdo de base
Constituição Federal de 1988, arts. 3º, 5º e 144; Hobbes (*Leviatã*), Locke (*Segundo tratado*), Rousseau (*Do contrato social*).
