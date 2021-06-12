function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var hundredList = [];
var i = 0;
var button = document.getElementById('button');
var classCell = document.getElementsByClassName('cell');
var computerList = [2, 3, 4]


button.addEventListener("click", function () {
    while (hundredList.length < 10) {

        var num = getRandomNum(1, 10);
        if (!hundredList.includes(num)) {
            hundredList.push(num);

            classCell[i].innerHTML = num;
            // document.getElementsByClassName("cell")[i].setAttribute("value", num);
            i += 1;
        }

    }

    for (var x = 0; x < 10; x++) {
        classCell[x].onclick = function () {
            if (!computerList.includes(parseInt(this.innerHTML))) {
                this.style.backgroundImage = "url('whiteFlag.png')";
            } else {
                this.style.backgroundImage = "url('bomb.jpg')";

            }
        }
    }

});












