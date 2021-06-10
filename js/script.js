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

while (userNum.length < userMaxNum && !computerNum.includes(element2) && !userNum.includes(element2)) {
    var element2 = parseInt(prompt('Inserisci un numero!'));
    if (computerNum.includes(element2)) {
        alert('Ops! Hai trovato una mina!');
    } else if (userNum.includes(element2)) {
        alert('Ops! Hai inserito un numero già usato!');
    } else {
        userNum.push(element2);
    }

}

document.getElementById('score').innerHTML = 'Hai totalizzato un punteggio di ' + userNum.length;


