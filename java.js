let click = document.getElementById('text');
let coin = document.getElementById('button');
let counter = 0;
coin.addEventListener('click', function(){
    counter++;
    click.textContent='Гречки продано: '+counter;
});