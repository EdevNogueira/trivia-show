const pergunta = document.getElementById('question');
const botao = document.getElementById('next');
const lista = document.getElementById('list');
const resposta = document.getElementById('answer');

const questionario = [{
    pergunta: "1°) What is the smallest planet in our Solar System?", 
    lista: ["Venus", "Mars", "Mercury", "Earth", "Saturn"],
    respostaCerta: "Mercury"
}, 
{
    pergunta: "2°) What is the longest river in the world?",
    lista: ["Amazon", "Nile", "Yangtze", "Mississippi", "Níger"],
    respostaCerta: "Nile"
}]

let perguntaAtual = 0;

const telaInicial = () => {
    let quest = questionario[perguntaAtual];
    pergunta.innerHTML = `<h2>${quest.pergunta}</h2>`
    lista.innerHTML = "";

    quest.lista.forEach((opcao) => {
        const item = document.createElement('li');
        item.classList.add('lista')
        item.innerHTML = `<a href="#">${opcao}</a>`;

        item.addEventListener('click', (event) => {
            const clickItem = event.target;
            const respostaClick = opcao;
            desabilitarLinks();
            wrongOrRight(respostaClick, clickItem, quest)
        })
        lista.appendChild(item);
    });
};

const desabilitarLinks = () => {
    const allLinks = document.querySelectorAll('.lista a')
    allLinks.forEach(link => {
        if (link.classList.contains('disabled-link')) {
            link.classList.remove('disabled-link');
        } else {
            link.classList.add('disabled-link');
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
            resposta.innerHTML = ""
            telaInicial()
        } else {
            alert('Você completou o jogo')
            botao.disabled = true;
        };
    } else if (botao.textContent === "Try Again!"){
        desabilitarLinks();
        //adicionar duas funcções (desabilitar e habilitar)
    }
});

telaInicial()