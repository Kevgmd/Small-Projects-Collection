const quotes = [
    '"show bobs and vagenes pls" <br> - Mahatma Ghandi',
    '"Cada cachorro que lamba a sua própria caceta" <br> - Albert Einstein',
    '"As coisa cai" <br> - Isaque Nilton',
    '"Casa vazia é oficina da punheta" <br> - Mario Ayala',
    '"Underidoderidudoridoderidoo" <br> - Winston Churchill',
    '"Se o Tadala tá caro, empurra mole mesmo" <br> - Martin Burguer King Jr.',
    '"puta que pariu" <br> - Senhor Cinema',
    '"Eu sabo" <br> - Nikola Tesla',
    '"tá caro as coisa" <br> - Karl Marx',
    '"Com Estilingue até merda voa porra" <br> - Santos Dumont',
    '"I Cant breathe" <br> - George Floyd',
    '"Oda Gênio" <br> - Senhor Cinema',
    '"O Brasileiro tem que ser estrupado pela nasa" <br> - Bart Simpsom',
    '"Pra ser meu braço direito tem que bater pra mim" <br> - Poderoso Chefão',
    '"Tem que ver com os cara lá..." <br> - Nelson Mandela',
];

const backgrounds = {
    [quotes[0]]: 'url("https://observatorio3setor.org.br/wp-content/uploads/2021/12/gandhi-portal.jpg")',
    [quotes[1]]: 'url("https://static.todamateria.com.br/upload/al/be/albert-einstein-og.jpg")',
    [quotes[2]]: 'url(https://lftm.com.br/wp-content/uploads/2024/05/Isaac-Newton.jpeg)',
    [quotes[3]]: 'url(https://img.observatoriodatv.com.br/wp-content/uploads/2022/05/Mario-Ayala-Gustavo-Daneluz-em-Carrossel-1024x768.jpg)',
    [quotes[4]]: 'url(https://media.gazetadopovo.com.br/2025/05/31143751/churchill-1941-660x372.jpg.webp)',
    [quotes[5]]: 'url(https://static.todamateria.com.br/upload/ma/rt/martinlutherking-cke.jpg)',
    [quotes[6]]: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9XMvzzVDcGFz4xyDGjOA1F2W0NHWksBTiJLPfiq7bVF7HObyu)',
    [quotes[7]]: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP2BqQGwMwkac26Lky1wkNTUFfnY7JLka5EQ&s)',
    [quotes[8]]: 'url(https://static.todamateria.com.br/upload/ka/rl/karl-marx-og.jpg?class=ogImageWide)',
    [quotes[9]]: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpawaNF88fCOc8EQqLR_RChTnvAVi3l0D_QA&s)',
    [quotes[10]]: 'url(https://e3.365dm.com/20/05/2048x1152/skynews-george-floyd-killed-by-police_5001291.jpg)',
    [quotes[11]]: 'url(https://f.i.uol.com.br/fotografia/2023/10/09/169688153965245b838d9bb_1696881539_3x2_rt.jpg)',
    [quotes[12]]: 'url(https://pbs.twimg.com/media/GtRqpIjX0AAFDrt.jpg)',
    [quotes[13]]: 'url(https://cdn.britannica.com/55/188355-050-D5E49258/Salvatore-Corsitto-The-Godfather-Marlon-Brando-Francis.jpg)',
    [quotes[14]]: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ZnJmUkD2xLcPMLRmkgF6WBhd36KXyLij0Q&s)',
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