

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