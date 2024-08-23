const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativa = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
{
enunciado: "Qual é uma prática benéfica para promover o bem-estar fisíco e mental tanto em humanos quanto em animais de estimação?",
alternativas: [
{
texto:"Passeios diários ao ar livre",
afirmação:"O exercício regular é crucial para manter a saúde cardiovascular e a agilidade fisíca em humanos e animais"
}, 
{
texto:"Assitir televisão juntos"
afirmação:"Interagir e brincar com animais de estimação pode reduzir os níveis de estresse e promover uma sensação de calma e felicidade tanto para as pessoas quanto para os animais"
} 
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
    