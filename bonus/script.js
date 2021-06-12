function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var hundredList = [];
var i = 0;
var button = document.getElementById('button');
var classCell = document.getElementsByClassName('cell');
var computerList = [];
var free = 100 - 16;
var gameOver = false;
var field = document.getElementById('field');
var score = 0;


for (var c = 0; c < 16; c++) {
    var computerNum = getRandomNum(1, 100);
    if (!computerList.includes(computerNum)) {
        computerList.push(computerNum);
    }
}


button.addEventListener("click", function () {
    while (hundredList.length < 100) {

        var num = getRandomNum(1, 100);
        if (!hundredList.includes(num)) {
            hundredList.push(num);

            classCell[i].innerHTML = num;
            // document.getElementsByClassName("cell")[i].setAttribute("value", num);
            i += 1;
        }

    }


    for (x = 0; x < free; x++) {
        classCell[x].addEventListener("click", function () {
            if (!computerList.includes(parseInt(this.innerHTML))) {
                this.style.backgroundImage = "url('img/whiteFlag.png')";
                score += 1;
                document.getElementById('score').innerHTML = score;
            } else {
                this.style.backgroundImage = "url('img/bomb.jpg')";
                gameOver = true;
                // field.style.display = "none";
            }
        })
    }



});
















