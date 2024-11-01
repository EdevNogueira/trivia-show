const pergunta = document.getElementById('question');
const botao = document.getElementById('next');
const lista = document.getElementById('list');


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
    } else if (item.classList.contains('right')) {
        clickItem.style.backgroundColor = "green";
        clickItem.style.color = "white";
    }
}
//colocar index no forEach para procurar pelos items sem indexOf
arrayItem.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        const clickItem = event.target;
        if (index === 0) {
            wrongOrRight(item, clickItem)
        } else if (index === 1){
            wrongOrRight(item, clickItem)
        } else if (index === 2){
            wrongOrRight(item, clickItem)
        } else if (index === 3){
            wrongOrRight(item, clickItem)
        } else if (index === 4){
            wrongOrRight(item, clickItem)
        }
    })
})

botao.addEventListener('click', () => {
    for (let num = 0 ; num < 5 ; num++) {
        if(num = 0) {
            //pergunta.innetHtml... 2
        } else if(num = 1) {
            //pergunta.innerHtml... 3
        }
    }
})