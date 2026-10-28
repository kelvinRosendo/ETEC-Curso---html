# O Pacto — Quiz de Contratualismo

Questionário escolar com **9 perguntas** (3 fáceis, 3 médias, 3 difíceis) e apresentação ao vivo sobre Hobbes, Locke, Rousseau e o contrato social brasileiro. Interface responsiva de estética escura/dourada inspirada na apresentação do Canva.

## Links

- **Administradores:** https://kelvinrosendo.github.io/ETEC-Curso---html/quiz-contratualismo/admin.html
- **Alunos:** o administrador abre seu link, cria a sala e copia o link gerado no painel. Não enviar o link do administrador como link de aluno.
- **Página inicial:** https://kelvinrosendo.github.io/ETEC-Curso---html/quiz-contratualismo/

## Como funciona

1. No notebook que ficará projetando, abra `admin.html`. A sala temporária é criada automaticamente, com código e link para os estudantes.
2. Compartilhe **o link gerado pelo painel** no grupo da turma. Não há formulário, login, nome ou e-mail. Cada navegador recebe um número anônimo, como Participante 01.
3. Acompanhe a contagem dos conectados no lobby e pressione **Iniciar as 9 questões**.
4. As respostas aparecem em tempo real para o administrador: contagem, pendentes, gráfico por alternativa. Ao fim do prazo, a alternativa correta é revelada; avance com o botão.
5. No final, todos veem a classificação por número de participante. O administrador pode iniciar uma nova sala/partida.

## Duração e pontuação

| Nível | Perguntas | Prazo por pergunta | Pontos por acerto |
|---|---:|---:|---:|
| Fácil | 3 | 60 segundos | 100 |
| Médio | 3 | 75 segundos | 200 |
| Difícil | 3 | 90 segundos | 300 |

## Sem banco de dados

O site é composto por HTML, CSS e JavaScript. A troca de mensagens é feita via **PeerJS/WebRTC**, uma conexão temporária entre os celulares e o navegador do apresentador. A rede pública de sinalização PeerJS e os arquivos da biblioteca precisam estar disponíveis na internet; **GitHub Pages sozinho não recebe respostas de outros celulares**. Os dados da rodada vivem na memória do notebook do administrador, não são persistidos em banco e somem quando ele fecha/recarrega a página. O navegador do aluno pode guardar um identificador anônimo na sessão para tolerar recarregamentos.

### Cuidados importantes

- **Não feche, recarregue, suspenda ou deixe o notebook do apresentador dormir durante o jogo.**
- Teste com dois celulares em redes diferentes antes da aula; redes escolares podem bloquear WebRTC.
- O código foi organizado para até **60 entradas anônimas**, mas **não há garantia de 40 conexões simultâneas** até realizar um ensaio com a turma/rede. A versão depende da capacidade do navegador do apresentador e dos serviços PeerJS.
- Este é um jogo educativo, **não uma prova antifraude**: como o gabarito está no HTML distribuído aos alunos, alguém tecnicamente experiente consegue inspecioná-lo.
- Se cada aluno precisa ser identificado por nome para o ranking, seria necessário reintroduzir um formulário; a versão atual é intencionalmente anônima.
- Para alta confiabilidade em 40+ celulares, melhor hospedar um pequeno serviço WebSocket em lugar de depender do PeerJS público.
- Não há Firebase configurado nem exigência de ativá-lo.

**Fonte:** apresentação Canva "Contratualismo e Sociedade" e documento ETEC São Mateus (2026), com Constituição de 1988, Hobbes, Locke e Rousseau.
