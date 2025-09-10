const quotes = [
    '"show bobs and vagenes pls" - Mahatma Ghandi',
    '"Cada cachorro que lamba a sua própria caceta" - Albert Einstein',
];

const backgrounds = {
    [quotes[0]]: 'url("https://observatorio3setor.org.br/wp-content/uploads/2021/12/gandhi-portal.jpg")',
    [quotes[1]]: 'url("https://static.todamateria.com.br/upload/al/be/albert-einstein-og.jpg")',
    [quotes[2]]: 'url(https://courier.unesco.org/sites/default/files/styles/best_image/article/courier/photos/nelson_mandela.jpg?itok=ydB_39uH)',
    [quotes[3]]: 'url(https://fabiobarros.com/wp-content/uploads/2020/07/img-dia-internacional-de-nelson-mandela.jpg)',
    [quotes[4]]: 'url(https://s2-galileu.glbimg.com/lL94BrMvGp__xHE_9JaV8rMx1Qk=/0x0:1024x634/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2025/x/6/RmpWFvTkCrjtlu3VQrNQ/51333949572-bf63a71465-b.jpg)',

};

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

document.querySelector('h1').textContent = randomQuote;

document.body.style.backgroundImage = backgrounds[randomQuote];

const button = document.querySelector('button');

button.addEventListener('click', function () {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.querySelector('h1').textContent = randomQuote;

    document.body.style.backgroundImage = backgrounds[randomQuote];
});