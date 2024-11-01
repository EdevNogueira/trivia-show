const pergunta = document.getElementById('question');
const botao = document.getElementById('next');
const lista = document.getElementById('list');
const resposta = document.getElementById('answer');
const tentativa = document.getElementById('try');

pergunta.innerHTML = `
    <h2>1°) What is the smallest planet in our Solar System?</h2>
`
lista.innerHTML = `
    <li class="wrong"><a href="#">Venus</a></li>
    <li class="wrong"><a href="#">Mars</a></li>
    <li class="right"><a href="#">Mercury</a></li>
    <li class="wrong"><a href="#">Earth</a></li>
    <li class="wrong"><a href="#">Saturn</a></li>
`;

const listaItem = document.querySelectorAll('#list li');

const arrayItem = Array.from(listaItem);

const wrongOrRight = (item, clickItem) => {
    if (item.classList.contains('wrong')) {
        clickItem.style.backgroundColor = "red";
        clickItem.style.color = "white";
        resposta.innerHTML = `
            <p style="color:red">You're wrong! Try again!</p>
        `;
        tentativa.innerHTML = `
            <button class="botao">Try again</button>
        `;
    } else if (item.classList.contains('right')) {
        clickItem.style.backgroundColor = "green";
        clickItem.style.color = "white";
        resposta.innerHTML = `
            <p style="color:green">You're right!</p>
        `;
        tentativa.innerHTML = `
            <button class="botao">Next question</button>
        `;
    }
}
//colocar index no forEach para procurar pelos items sem indexOf
arrayItem.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        const clickItem = event.target;
        if (index === 0) {
            wrongOrRight(item, clickItem)
        } else if (index >= 1 && index <= 4){
            wrongOrRight(item, clickItem)
        }
    })
})

botao.addEventListener('click', () => {
    if(num = 0) {
        //pergunta.innetHtml... 2
    } else if(num = 1) {
        //pergunta.innerHtml... 3
    }
})