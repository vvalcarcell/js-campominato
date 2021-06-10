computerNum = [];
userNum = [];
min = 1;
max = 0;
maxNum = 16;

var difficulty = prompt('Che livello di difficoltà scegli? 0, 1 o 2?');
while (difficulty !== "0" && difficulty !== "1" && difficulty !== "2") {
    alert('Devi inserire un livello di difficiltà tra 0, 1 e 2!');
    var difficulty = prompt('Che livello di difficoltà scegli? 0, 1 o 2?');
}

switch (difficulty) {
    case "0":
        max += 100;
        break;
    case "1":
        max += 80;
        break;
    case "2":
        max += 50;
        break;
}

userMaxNum = max - maxNum;

while (computerNum.length < maxNum) {
    var element = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!computerNum.includes(element)) {
        computerNum.push(element);
    }
}

console.log(computerNum);

while (userNum.length < userMaxNum && !computerNum.includes(element2)) {
    var element2 = parseInt(prompt('Inserisci un numero compreso tra ' + min + ' e ' + max + '!'));
    if (element2 < min || element2 > max) {
        alert('Il numero deve essere compreso tra ' + min + ' e ' + max + '!');
    } else if (computerNum.includes(element2)) {
        alert('Ops! Hai trovato una mina!');
    } else if (userNum.includes(element2)) {
        alert('Ops! Hai inserito un numero già usato!');
    } else {
        userNum.push(element2);
    }

}

document.getElementById('score').innerHTML = 'Hai totalizzato un punteggio di ' + userNum.length;

if (userNum.length === userMaxNum) {
    document.getElementById('score').innerHTML += 'Complimenti, hai vinto!';
}

// -------------------------------------------------


