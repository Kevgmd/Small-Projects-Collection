const insertMessage = document.querySelector('p');
const finalValueDisplay = document.querySelector('h2');

function convert() {
    const inputValue = document.querySelector('input').value;

    if (inputValue == '') {
        insertMessage.textContent = 'Please insert a value';
        finalValueDisplay.textContent = '';
    } else {
        let celciusOutput = (inputValue - 32) * 5 / 9;
        finalValueDisplay.textContent = celciusOutput.toFixed(2) + '°C';
        insertMessage.textContent = '';
    }
}