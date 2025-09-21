const insertMessage = document.querySelector('h2');
const finalValueDisplay = document.querySelector('h1');

function convert() {
    const inputValue = document.querySelector('input').value;

    if (inputValue == '') {
        insertMessage.textContent = 'Please insert a value';
    } else {
        let celciusOutput = (inputValue - 32) * 5 / 9;
        finalValueDisplay.textContent = celciusOutput.toFixed(2);
        insertMessage.textContent = '';
    }
}