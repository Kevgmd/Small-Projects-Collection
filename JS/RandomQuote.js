const images = [
    'https://images.unsplash.com/photo-1756758006047-efc2f2b7d493?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1755429518361-1d6060edcf3c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1731818754814-53dce99838d1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1756747646179-d5652667914e?q=80&w=899&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1756049060197-37b4b52c3183?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1756632013216-1b79d2294cf3?q=80&w=908&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const randomImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(${randomImage})`;

const button = document.querySelector('button');

button.addEventListener('click', function () {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = `url(${randomImage})`;
});

const quotes = [
    '"He who has a why to live can bear almost any how." - Friedrich Nietzsche',
    '"A self that goes on changing is a self that goes on living." - Virginia Woolf',
    '"In the midst of winter, I found there was, within me, an invincible summer." - Albert Camus',
    '"In a time of deceit telling the truth is a revolutionary act." - George Orwell',
    '"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment." - Ralph Waldo Emerson',
    '"I am a cage, in search of a bird." - Franz Kafka',
    '"Be yourself; everyone else is already taken." - Oscar Wilde',
    '"Everyone thinks of changing the world, but no one thinks of changing himself." - Leo Tolstoy',
    '"Forever is composed of nows." - Emily Dickinson',
    '"Some of us think holding on makes us strong, but sometimes it is letting go." - Herman Hesse',
    '"Not everything that is faced can be changed, but nothing can be changed until it is faced." - James Baldwin',
    '"Life can only be understood backwards; but it must be lived forwards." - Søren Kierkegaard',
    '"The mystery of human existence lies not in just staying alive, but in finding something to live for." - Fyodor Dostoevsky',
    '"Let everything happen to you beauty and terror. Just keep going. No feeling is final." - Rainer Maria Rilke',
    '"The secret of getting ahead is getting started." - Mark Twain',
    '"Change your life today. Don’t gamble on the future, act now, without delay." - Simone de Beauvoir',
    '"You will face many defeats in life, but never let yourself be defeated." - Maya Angelou',
    '"Freedom is what you do with what’s been done to you." - Jean-Paul Sartre',
    '"Pain is inevitable. Suffering is optional." - Haruki Murakami',
    '"If you want to fly, you have to give up the things that weigh you down." - Toni Morrison'
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

document.querySelector('h1').textContent = randomQuote;

button.addEventListener('click', function () {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.querySelector('h1').textContent = randomQuote;
});