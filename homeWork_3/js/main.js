var formJS = document.createElement("form");

var inputCircle = document.createElement("input");
inputCircle.type = "radio";
inputCircle.name = "figure";
inputCircle.value = "circle";
var labelCircle = document.createElement("label");
labelCircle.innerHTML = "circle<br>";

var inputOval = document.createElement("input");
inputOval.type = "radio";
inputOval.name = "figure";
inputOval.value = "oval";
var labelOval = document.createElement("label");
labelOval.innerHTML = "oval<br>";

var inputSquare = document.createElement("input");
inputSquare.type = "radio";
inputSquare.name = "figure";
inputSquare.value = "square";
var labelSquare = document.createElement("label");
labelSquare.innerHTML = "square<br>";

var inputRectangle = document.createElement("input");
inputRectangle.type = "radio";
inputRectangle.name = "figure";
inputRectangle.value = "rectangle";
var labelRectangle = document.createElement("label");
labelRectangle.innerHTML = "rectangle<br>";

formJS.appendChild(inputCircle);
formJS.appendChild(labelCircle);
formJS.appendChild(inputOval);
formJS.appendChild(labelOval);
formJS.appendChild(inputSquare);
formJS.appendChild(labelSquare);
formJS.appendChild(inputRectangle);
formJS.appendChild(labelRectangle);
document.body.appendChild(formJS);

var formCircle = document.createElement("form");
formCircle.className = "num";
formCircle.id = "circle";
var inputDiameter = document.createElement("input");
inputDiameter.type = "number";
inputDiameter.id = "diameter";
inputDiameter.step = "20";
inputDiameter.min = "0";
inputDiameter.value = "0";
var labelDiameter = document.createElement("label");
labelDiameter.innerHTML = "diameter<br><br>";
formCircle.appendChild(inputDiameter);
formCircle.appendChild(labelDiameter);

var formOval = document.createElement("form");
formOval.className = "num";
formOval.id = "oval";
var inputHeightOval = document.createElement("input");
inputHeightOval.type = "number";
inputHeightOval.id = "height_oval";
inputHeightOval.step = "20";
inputHeightOval.min = "0";
inputHeightOval.value = "0";
var labelHeightOval = document.createElement("label");
labelHeightOval.innerHTML = "height<br>";
var inputWidthOval = document.createElement("input");
inputWidthOval.type = "number";
inputWidthOval.id = "width_oval";
inputWidthOval.step = "20";
inputWidthOval.min = "0";
inputWidthOval.value = "0";
var labelWidthOval = document.createElement("label");
labelWidthOval.innerHTML = "width<br><br>";
formOval.appendChild(inputHeightOval);
formOval.appendChild(labelHeightOval);
formOval.appendChild(inputWidthOval);
formOval.appendChild(labelWidthOval);

var formSquare = document.createElement("form");
formSquare.className = "num";
formSquare.id = "square";
var inputSquare = document.createElement("input");
inputSquare.type = "number";
inputSquare.id = "height_square";
inputSquare.step = "20";
inputSquare.min = "0";
inputSquare.value = "0";
var labelSquare = document.createElement("label");
labelSquare.innerHTML = "height<br><br>";
formSquare.appendChild(inputSquare);
formSquare.appendChild(labelSquare);

var formRectangle = document.createElement("form");
formRectangle.className = "num";
formRectangle.id = "rectangle";
var inputHeightRectamgle = document.createElement("input");
inputHeightRectamgle.type = "number";
inputHeightRectamgle.id = "height_rectangle";
inputHeightRectamgle.step = "20";
inputHeightRectamgle.min = "0";
inputHeightRectamgle.value = "0";
var labelHeightRectangle = document.createElement("label");
labelHeightRectangle.innerHTML = "height<br>";
var inputWidthRectangle = document.createElement("input");
inputWidthRectangle.type = "number";
inputWidthRectangle.id = "width_rectangle";
inputWidthRectangle.step = "20";
inputWidthRectangle.min = "0";
inputWidthRectangle.value = "0";
var labelWidthRectangle = document.createElement("label");
labelWidthRectangle.innerHTML = "width<br><br>";
formRectangle.appendChild(inputHeightRectamgle);
formRectangle.appendChild(labelHeightRectangle);
formRectangle.appendChild(inputWidthRectangle);
formRectangle.appendChild(labelWidthRectangle);

document.body.appendChild(formCircle);
document.body.appendChild(formOval);
document.body.appendChild(formSquare);
document.body.appendChild(formRectangle);

displayNone("num");

var arrayInp = document.getElementsByTagName("input");
for(let i = 0; i < arrayInp.length; i++) {
    arrayInp[i].addEventListener("change", draw);
};

formJS.addEventListener("click", function(event) {
    displayNone("num");
    let figure = event.target.value;
    document.getElementById(figure).style.display = "block";
    removePaint();
});

function displayNone(cl) {
    let array = document.getElementsByClassName(cl);
    for(let i = 0; i < array.length; i++) {
        array[i].style.display = "none";
    };
};

function draw() {
    let figure = event.target.id;
    let height;
    let width;
    if (figure == "diameter") {
        height = document.getElementById("diameter").value;
        drawCircle(height);
    } else if (figure == "height_oval" || figure == "width_oval") {
        height = document.getElementById("height_oval").value;
        width = document.getElementById("width_oval").value;
        drawOval(height, width);
    } else if (figure == "height_square") {
        height = document.getElementById("height_square").value;
        drawSquare(height);
    } else if (figure == "height_rectangle" || figure == "width_rectangle") {
        height = document.getElementById("height_rectangle").value;
        width = document.getElementById("width_rectangle").value;
        drawRectangle(height, width);
    };
}

function removePaint() {
    if (document.getElementById("paint")) {
        let paint = document.getElementById("paint");
        document.body.removeChild(paint); 
    };
}

function drawCircle(height) {
    removePaint();
    let circle = document.createElement("div");
    circle.id = "paint";
    circle.style.height = height + "px";
    circle.style.width = height + "px";
    circle.style.border = "1px solid";
    circle.style.borderRadius = "50%";
    document.body.appendChild(circle);
}

function drawOval(height, width) {
    removePaint();
    let oval = document.createElement("div");
    oval.id = "paint";
    oval.style.height = height + "px";
    oval.style.width = width + "px";
    oval.style.border = "1px solid";
    oval.style.borderRadius = "50%";
    document.body.appendChild(oval);
}

function drawSquare(height) {
    removePaint();
    let square = document.createElement("div");
    square.id = "paint";
    square.style.height = height + "px";
    square.style.width = height + "px";
    square.style.border = "1px solid";
    document.body.appendChild(square);
}

function drawRectangle(height, width) {
    removePaint();
    let rectangle = document.createElement("div");
    rectangle.id = "paint";
    rectangle.style.height = height + "px";
    rectangle.style.width = width + "px";
    rectangle.style.border = "1px solid";
    document.body.appendChild(rectangle);
}