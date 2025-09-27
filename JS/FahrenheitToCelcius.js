const insertMessage = document.querySelector('p');
const finalValueDisplay = document.querySelector('h2');

function convert() {
    const inputValue = document.querySelector('input').value;

    if (inputValue == '') {
        insertMessage.style.visibility = 'visible';
        insertMessage.style.opacity = '1';
        finalValueDisplay.style.visibility = 'hidden';
        finalValueDisplay.style.opacity = '0';
    } else {
        let celciusOutput = (inputValue - 32) * 5 / 9;
        finalValueDisplay.textContent = celciusOutput.toFixed(2) + '°C';
        insertMessage.style.visibility = 'hidden';
        insertMessage.style.opacity = '0';
        finalValueDisplay.style.visibility = 'visible';
        finalValueDisplay.style.opacity = '1';
    }
}