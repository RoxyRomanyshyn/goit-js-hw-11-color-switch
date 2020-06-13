const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const refs = {
    body: document.querySelector('body'),
    buttonStart: document.querySelector('button[data-action="start"]'),
    buttonStop: document.querySelector('button[data-action="stop"]')
}


const onStart = function () {
    int = setInterval(() => {
        const randomIntegerFromInterval = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        refs.body.style.backgroundColor = `${colors[randomIntegerFromInterval(0, colors.length-1)]}`;
    }, 1000);
    refs.buttonStart.setAttribute('disabled', true);
}

const onStop = function () {
    clearInterval(int);
    refs.buttonStart.removeAttribute('disabled');
}

refs.buttonStart.addEventListener('click', onStart);
refs.buttonStop.addEventListener('click', onStop);