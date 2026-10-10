# Qual avestruz é você?

Um quiz visual e interativo, em português brasileiro, que ajuda cada pessoa a descobrir se combina mais com Tito, Rico ou Nino. São seis perguntas sobre rotina, passeios, desafios, motivação, ambientes e amizade. Não existe resposta certa: o resultado mostra uma combinação de personalidade baseada nas escolhas da pessoa.

## Telas do quiz

1. **Capa** — apresenta o quiz, os três avestruzes e o botão para começar. A arte de céu e nuvens cria o cenário da abertura.
2. **Pergunta 1: tempo livre** — explora como a pessoa prefere passar o tempo: em aventuras, com amigos ou em atividades tranquilas e criativas.
3. **Pergunta 2: estilo de passeio** — compara trilhas e natureza, festas e shows, ou cafés e livrarias.
4. **Pergunta 3: desafios** — identifica se a pessoa age com espírito de aventura, confiança ou planejamento.
5. **Pergunta 4: motivação** — pergunta se o que mais inspira é descobrir, conquistar objetivos ou aprender e criar.
6. **Pergunta 5: ambiente** — apresenta opções ao ar livre, na cidade ou em um lugar confortável.
7. **Pergunta 6: amizade** — pergunta se a pessoa valoriza parceria, diversão ou conversas e apoio.
8. **Suspense** — “Chocando seu resultado...” prepara a revelação com silhuetas, casca de ovo, animação e efeitos sonoros.
9. **Resultado** — revela Tito, Rico ou Nino, mostra traços de personalidade e a porcentagem de cada personagem. A pessoa pode compartilhar o resultado, copiar o link, baixar um cartão ou refazer o quiz.

As opções mudam de posição a cada partida e suas cores são embaralhadas. Assim, uma cor não indica sempre o mesmo personagem. O resultado soma as seis escolhas; em caso de empate, vence o personagem escolhido mais recentemente. As porcentagens são ajustadas para somar 100%.

## Tecnologias

- **React 19** organiza a interface em componentes e controla tela, respostas, progresso, resultado e compartilhamento.
- **JavaScript com módulos ES** contém perguntas, embaralhamento, cálculo de pontuação, áudio, navegação e exportação do cartão.
- **Vite** fornece o servidor de desenvolvimento e gera a versão otimizada para publicação.
- **GSAP** anima entrada e saída de telas, personagens, suspense, revelação e barras de porcentagem. A experiência respeita a preferência do sistema por movimento reduzido.
- **CSS** define identidade visual, layouts de computador e celular, cenários, cores, tipografia, controles e estados de interação.
- **Lucide React** fornece ícones vetoriais para perguntas, navegação e ações.
- **QRCode** gera o código presente no cartão compartilhável.
- **Web Audio API, Web Share API, Clipboard API e Canvas API** permitem música e efeitos sonoros, compartilhamento nativo, cópia de link e imagem, e geração do cartão PNG em 1080 × 1920.

## Executar localmente

```bash
npm install
npm run dev
```

## Testar e compilar

```bash
npm test
npm run build
npm run preview
```
