const pergunta = document.getElementById('question');
const botao = document.getElementById('next');
const lista = document.getElementById('list');
const resposta = document.getElementById('answer');
//Questionário do jogo
const questionario = [{
    pergunta: "1°) What is the smallest planet in our Solar System?", 
    lista: ["Venus", "Mars", "Mercury", "Earth", "Saturn"],
    respostaCerta: "Mercury"
}, 
{
    pergunta: "2°) What is the longest river in the world?",
    lista: ["Amazon", "Nile", "Yangtze", "Mississippi", "Níger"],
    respostaCerta: "Nile"
},
{
    pergunta: "3°) Which year did the first man land on the moon?",
    lista: ["1965", "1969", "1972", "1975", "1980"],
    respostaCerta: "1969"
},
{
    pergunta: "4°) What is the capital of Japan?",
    lista: ["Kyoto", "Tokyo", "Osaka", "Nagoya", "Hiroshima"],
    respostaCerta: "Tokyo"
},
{
    pergunta: "5°) Which superhero is known for saying, 'I am Groot'?",
    lista: ["Rocket", "Hulk", "Groot", "Star-Lord", "Thor"],
    respostaCerta: "Groot"
}]
let clicado = false;

let perguntaAtual = 0;
//Momento em que aparecerá as perguntas
const telaInicial = () => {
    let quest = questionario[perguntaAtual];
    pergunta.innerHTML = `<h2>${quest.pergunta}</h2>`
    lista.innerHTML = "";
    //bloco que insere as opções da pergunta atual
    quest.lista.forEach((opcao) => {
        const item = document.createElement('li');
        item.classList.add('lista')
        item.innerHTML = `<a href="#">${opcao}</a>`;
        item.addEventListener('click', (event) => {
            if (clicado) return;
            const clickItem = event.target;
            const respostaClick = opcao;
            desabilitarLinks();
            wrongOrRight(respostaClick, clickItem, quest)
        })
        lista.appendChild(item);
    });
};
//desabilita a ação de clicar nos links até que a tentativa seja reiniciada
const desabilitarLinks = () => {
    const allLinks = document.querySelectorAll('.lista a')
    allLinks.forEach(link => {
        if (link.classList.contains('disabled-link')) {
            link.classList.remove('disabled-link');
        } else {
            link.classList.add('disabled-link');
            clicado = true;
            botao.textContent = "Next Question";
        }
    });
};

const wrongOrRight = (respostaClick, clickItem, quest) => {
    if (respostaClick === quest.respostaCerta) {
        clickItem.style.backgroundColor = "green";
        clickItem.style.color = "white";
        resposta.innerHTML = `
            <p style="color:green">You're right!</p>
        `;
    } else {
        clickItem.style.backgroundColor = "red";
        clickItem.style.color = "white";
        resposta.innerHTML = `
            <p style="color:red">You're wrong! Try again!</p>
        `;
        botao.textContent = "Try Again!";
    }
}

botao.addEventListener('click', () => {
    if (botao.textContent === "Next Question") {
        if (perguntaAtual < questionario.length - 1) {
            perguntaAtual++;
            resposta.innerHTML = "";
            telaInicial()
        } else {
            alert('Você completou o jogo');
            botao.disabled = true;
        };
    } else if (botao.textContent === "Try Again!"){
        desabilitarLinks();
        //adicionar duas funções (desabilitar e habilitar)
    }
})

telaInicial()