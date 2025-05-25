//JSDoc

function getDice1(){
    var dice1=Math.floor(Math.random()*6);
    document.getElementById('condice1').innerHTML = (dice1 + 1);
}
function getDice2(){
    var dice2=Math.floor(Math.random()*6);
    var dice3=Math.floor(Math.random()*6);
    document.getElementById('condice2').innerHTML = (dice2 + 1) + (dice3 + 1);
}