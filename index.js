//Практическое задание №1
function add() {
    let number1 = Number(document.getElementById('number1').value);
    let number2 = Number(document.getElementById('number2').value);
    let result = number1 + number2;
    document.getElementById('result').innerHTML = result;
}

function subtract(){
    let number1 = Number(document.getElementById('number1').value);
    let number2 = Number(document.getElementById('number2').value);
    let result = number1 - number2;
    document.getElementById('result').innerHTML = result;
}

function divide(){
    let number1 = Number(document.getElementById('number1').value);
    let number2 = Number(document.getElementById('number2').value);
    let result = number1 / number2;
    document.getElementById('result').innerHTML = result;
}

function multiplay(){
    let number1 = Number(document.getElementById('number1').value);
    let number2 = Number(document.getElementById('number2').value);
    let result = number1 * number2;
    document.getElementById('result').innerHTML = result;
}

//Практическое задание №2
function colorWhiteChange(){
    let colorWhite = document.getElementById('colorWhite');
    colorWhite.style.backgroundColor = 'gray';
}

function colorGreyChange(){
    let colorGrey = document.getElementById('colorGrey');
    colorGrey.style.backgroundColor = 'white';
}

