const quotes = [
    '"show bobs and vagenes pls" <br> - Mahatma Ghandi',
    '"Cada cachorro que lamba a sua própria caceta" <br> - Albert Einstein',
    '"As coisa cai" <br> - Isaque Nilton',
    '"Casa vazia é oficina da punheta" <br> - Mario Ayala',
    '"Underidoderidudoridoderidoo" <br> - Winston Churchill',
    '"Se o Tadala tá caro, empurra mole mesmo" <br> - Martin Luther King Jr.'
];

const backgrounds = {
    [quotes[0]]: 'url("https://observatorio3setor.org.br/wp-content/uploads/2021/12/gandhi-portal.jpg")',
    [quotes[1]]: 'url("https://static.todamateria.com.br/upload/al/be/albert-einstein-og.jpg")',
    [quotes[2]]: 'url(https://lftm.com.br/wp-content/uploads/2024/05/Isaac-Newton.jpeg)',
    [quotes[3]]: 'url(https://img.observatoriodatv.com.br/wp-content/uploads/2022/05/Mario-Ayala-Gustavo-Daneluz-em-Carrossel-1024x768.jpg)',
    [quotes[4]]: 'url(https://media.gazetadopovo.com.br/2025/05/31143751/churchill-1941-660x372.jpg.webp)',
    [quotes[5]]: 'url(https://static.todamateria.com.br/upload/ma/rt/martinlutherking-cke.jpg)',
};

let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

document.querySelector('h1').innerHTML = randomQuote;

document.body.style.backgroundImage = backgrounds[randomQuote];

const button = document.querySelector('button');
button.addEventListener('click', function () {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.querySelector('h1').innerHTML = randomQuote;

    document.body.style.backgroundImage = backgrounds[randomQuote];
});