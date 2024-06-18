let click = document.getElementById('text');
let coin = document.getElementById('button');
let counter = loadCounter();

click.textContent = 'Гречки продано: ' + counter;

coin.addEventListener('click', function() {
    counter++;
    click.textContent = 'Гречки продано: ' + counter;
    saveCounter(counter);
});

function saveCounter(count) {
    localStorage.setItem('Clicks', count);
}

function loadCounter() {
    return parseInt(localStorage.getItem('Clicks')) || 0;
}
