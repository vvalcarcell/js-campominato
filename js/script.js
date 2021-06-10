computerNum = [];
userNum = [];
maxNum = 16;
userMaxNum = 100 - maxNum;

function randomNum() {
    return Math.floor(Math.random() * 100) + 1;
}

while (computerNum.length < maxNum) {
    var element = randomNum();
    if (!computerNum.includes(element)) {
        computerNum.push(element);
    }
}

console.log(computerNum);

while (userNum.length < userMaxNum) {
    var element = prompt('Inserisci un numero!');
    if (userNum.includes(element)) {
        alert('Ops! Hai inserito un numero già usato!');
        break;
    } else if (computerNum.includes(element)) {
        alert('Ops! Hai trovato una mina!');
        break;
    } else {
        userNum.push(element);
    }

}

document.getElementById('score').innerHTML = 'Hai totalizzato un punteggio di ' + userNum.length;


