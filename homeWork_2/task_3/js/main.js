var arrFields = [10][10];
var field = document.createElement("div");
field.classList = "field";
document.body.appendChild(field);
var count = 0;

for(let i = 0; i < 10; i++) {
    let point = Math.round(Math.random() * 20 + 0);
    for(let j = 0; j < 10; j++) {
        if (j == point) {
            count++;
            let bomb = document.createElement("div");
            bomb.id = count;
            bomb.classList = "bomb";
            bomb.onmousedown = down;
            bomb.onmouseup = up;
            field.appendChild(bomb);
        } else {
            count++;
            let empty = document.createElement("div");
            empty.id = count;
            empty.classList = "empty";
            empty.onmousedown = down;
            empty.onmouseup = up;
            var num = document.createElement("span");
            empty.appendChild(num);
            field.appendChild(empty);
        }
    }
};

var arrBomb = document.getElementsByClassName("bomb");
var arrEmpty = document.getElementsByClassName("empty");
var emptySize = arrEmpty.length;

for (let i = 0; i < arrBomb.length; i++) {
    let bombId = arrBomb[i].id;
    for (let j = 0; j < arrEmpty.length; j++) {
        let emptyId = arrEmpty[j].id;
        if ((+emptyId + 11 == bombId || +emptyId + 10 == bombId 
            || +emptyId + 9 == bombId || +emptyId + 1 == bombId
            || +emptyId - 1 == bombId || +emptyId - 11 == bombId 
            || +emptyId - 10 == bombId || +emptyId - 9 == bombId)
            && ((+bombId / 10) % 1 !== 0 && +bombId % 10 !== 1)) {
            let empty = document.getElementById(emptyId);
            let arr = empty.getElementsByTagName('span');
            let text = arr[0].innerHTML;
            text = +text + 1;
            arr[0].innerHTML = text;
        } else if ((+bombId / 10) % 1 === 0 && (+emptyId + 11 == bombId 
            || +emptyId + 10 == bombId || +emptyId + 1 == bombId
            || +emptyId - 10 == bombId || +emptyId - 9 == bombId)) {
            let empty = document.getElementById(emptyId);
            let arr = empty.getElementsByTagName('span');
            let text = arr[0].innerHTML;
            text = +text + 1;
            arr[0].innerHTML = text;
        } else if (+bombId % 10 === 1 && (+emptyId + 10 == bombId
            || +emptyId + 9 == bombId || +emptyId - 1 == bombId
            || +emptyId - 11 == bombId || +emptyId - 10 == bombId)) {
            let empty = document.getElementById(emptyId);
            let arr = empty.getElementsByTagName('span');
            let text = arr[0].innerHTML;
            text = +text + 1;
            arr[0].innerHTML = text;
        }
    }
};

function down(event) {
    event.target.style.backgroundColor = "grey";
}

function up(event) {
    switch(event.target.className) {
        case "empty": {
            event.target.style.backgroundColor = "white";
            let ident = event.target.id;
            let bl = document.getElementById(ident);
            let arr = bl.getElementsByTagName('span');
            arr[0].style.display = "block";
            if (check("empty") == emptySize) {
                alert("Congratulations. You won.");
                location.reload();
            };
            break;
        };
        case "bomb": {
            for (var i = 0; i < arrBomb.length; i++) {
                arrBomb[i].style.backgroundColor = "red";
            };
            setTimeout(gameOver, 500);
            break;
        };
    };
}

function gameOver() {
    alert("game over");
    setTimeout(location.reload(), 1000);
}

function check(nameClass) {
    var arr = document.getElementsByClassName(nameClass);
    var test = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].style.backgroundColor == "white") {
            test++;
        };
    };
    return test;
}
