let display = document.getElementById('display');
let calculation = document.getElementById('calculation');
let clock = document.getElementById('clock');
let memes = [
    'Por que o livro foi ao médico? Porque ele tinha páginas em branco!',
    'Por que o computador foi ao médico? Porque ele tinha um vírus!',
    'Por que a bicicleta não consegue ficar em pé sozinha? Porque ela é duas rodas!'
];
let unlocked = false;

function clearDisplay() {
    display.value = '';
    calculation.value = '';
}

function appendNumber(number) {
    display.value += number;
    calculation.value += number;
}

function appendOperator(operator) {
    display.value += operator;
    calculation.value += operator;
}

function backspace() {
    display.value = display.value.slice(0, -1);
    calculation.value = calculation.value.slice(0, -1);
}

function calculate() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let userInput = display.value;

    if (userInput == currentHour.toString() + currentMinute.toString()) {
        unlocked = true;
        alert('Você acabou com a graça!');
    }

    if (unlocked) {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'Erro';
        }
    } else {
        let randomIndex = Math.floor(Math.random() * memes.length);
        display.value = memes[randomIndex];
    }
}

function updateClock() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    clock.innerText = currentHour + ':' + currentMinute;
}

setInterval(updateClock, 1000);
