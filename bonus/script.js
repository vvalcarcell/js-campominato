function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var hundredList = [];
var computerList = [];
var scoreList = [];
var button = document.getElementById('button');
var classCell = document.getElementsByClassName('cell');
var field = document.getElementById('field');
var classLost = document.getElementById('lost');
var i = 0;
var voctory = false;


while (computerList.length < 16) {
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

    for (x = 0; x < 100; x++) {
        classCell[x].addEventListener("click", function () {
            if (!computerList.includes(parseInt(this.innerHTML)) && !scoreList.includes(parseInt(this.innerHTML))) {
                this.style.backgroundImage = "url('img/whiteFlag.png')";
                scoreList.push(parseInt(this.innerHTML));
                if (scoreList.length === 84) {
                    console.log('VITTORIA');
                    document.getElementById("emoj").src = "img/faccina4.png";
                    field.style.display = "none";
                    document.getElementById('win').style.display = "block";
                    document.getElementById('button').style.display = "none";
                }
                document.getElementById('score').innerHTML = scoreList.length;
            } else if (computerList.includes(parseInt(this.innerHTML))) {
                // this.style.backgroundImage = "url('img/bomb.jpg')";
                // gameOver = true;
                document.getElementById("emoj").src = "img/faccina3.png";
                field.style.display = "none";
                document.getElementById('lost').style.display = "block";
                document.getElementById('button').style.display = "none";
            }

        })
    }


});









































