const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativa = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector("caixa-resultado");
const textoResultado = document.querySelector("texto-resultado");
const perguntas = [
{
enunciado: ""
alternativa: [
""
""
]
}, 
{
enunciado:
alternativa: [ 
""
""
]
}, 
{
enunciado:
alternativa: [ 
""
""
]
} 
];
let atual = 0;
let perguntaAtual;
function mostraPergunta(){ 
perguntaAtual = perguntas[atual];
caixaPergutas.textContent = perguntaAtual.enunciado;
caixaAlternativa.textContent = "";
mostraAlternativas();
}
function mostraAlternativas(){
for (const alternativa of perguntaAtual.alternativa){
const botaoAltenativas = document.createElement("button");
botaoAltenativa.textContent = alternativa;
caixaAltenativa.appendChild(botaoAltenativa);
}
}
mostraPergunta();
    