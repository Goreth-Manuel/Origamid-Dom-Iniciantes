// const animais = document.getElementById('animais');
// console.log(animais);

// const gridSection = document.getElementsByClassName('grid-section');
// console.log(gridSection[0]);

// const primeiraLi = document.querySelector('li')
// console.log(primeiraLi);

// const primeiraUl = document.querySelector('ul');
// console.log(primeiraUl);

// const linkInterno = document.querySelector('[href^="#"]');
// console.log(linkInterno);

// const animaisImg = document.querySelectorAll('.animais img');
// console.log(animaisImg)

// Retorna no console todas as imagens do site.
const allImg = document.querySelectorAll('img');
console.log(allImg);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgensAnimais = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imgensAnimais);

// Seleciona todos os links internos onde o href começa com #
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Seleciona o primeiro h2 dentro de .animais-descricao
const h2 = document.querySelector('.animais-descricao h2');
console.log(h2)

// Selecione o último p do site
const paragrafo = document.querySelectorAll('P')
console.log(paragrafo[paragrafo.length - 1])
