const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const caixaResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quais são os principais impactos da poluição marinha na vida marinha?",
        alternativas:[
            "A poluição marinha pode causar a morte de animais marinhos devido à ingestão de plásticos e outros resíduos, que podem entupir seus sistemas digestivos ou liberar toxinas.",
            " Ela também pode prejudicar a reprodução e o crescimento de organismos marinhos, como corais e peixes, afetando toda a cadeia alimentar e a biodiversidade dos oceanos."

        ]
    },
    {
        enunciado: "Como os produtos químicos e os metais pesados afetam os oceanos?"
        alternativas: [
            "Produtos químicos, como pesticidas e fertilizantes, podem causar a eutrofização, levando ao crescimento excessivo de algas e à diminuição do oxigênio na água, o que prejudica a vida marinha.",
            "Metais pesados, como mercúrio e chumbo, podem se acumular nos organismos marinhos e entrar na cadeia alimentar, afetando a saúde dos animais e, eventualmente, dos seres humanos que consomem esses produtos."

        ]
    },
    {
        enunciado:"Qual é o papel dos resíduos plásticos na poluição marinha?"
        alternativas: [
            "OOs plásticos também se fragmentam em microplásticos, que são ingeridos por uma ampla gama de organismos marinhos e podem causar danos internos, além de introduzir toxinas na cadeia alimentar.s resíduos plásticos, como sacolas e garrafas, frequentemente acabam no oceano, onde podem ser ingeridos por animais marinhos, causando obstruções intestinais e morte.",
            "Os plásticos também se fragmentam em microplásticos, que são ingeridos por uma ampla gama de organismos marinhos e podem causar danos internos, além de introduzir toxinas na cadeia alimentar."

        ]
    
        
    },
];

mostraAlternativas ();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.testContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}
mostraPergunta()