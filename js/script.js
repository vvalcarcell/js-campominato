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
    var element2 = prompt('Inserisci un numero!');
    if (check(computerNum, element2)) {
        alert('Ops! Hai trovato una mina!');
        break;
    } else if (userNum.includes(element2)) {
        alert('Ops! Hai inserito un numero già usato!');
        break;
    } else {
        userNum.push(element2);
    }

}

document.getElementById('score').innerHTML = 'Hai totalizzato un punteggio di ' + userNum.length;

function check(array, element) {

    for (i = 0; i < array.length; i++) {
        if (element === array[i]) {
            return true;
        }
    }

    return false;

}
