// onclick event using function 
function changedColor(){
    document.body.style.background = 'Cyan';
}
// onclick event using id with function name 
const findId = document.getElementById('background-Dark');
findId.onclick = bgDark;
function bgDark(){
    document.body.style.background = 'black';
}
// onclick event using anonimous function 
const yellowColor = document.getElementById('background-yellow');
yellowColor.onclick= function(){
    document.body.style.background = 'yellow';
}
// onclick event using addEvenLisener
const greenColor = document.getElementById('background-green');
greenColor.addEventListener('click', greencolor);
function greencolor(){
    document.body.style.background = 'green';
}
// onclick event using addEvenLisener anonimous function
const DarkGray = document.getElementById('background-DarkGray');
DarkGray.addEventListener('click', function(){
    document.body.style.background = 'DarkGray';
});
// onclick event using direct addEvenLisener 
document.getElementById('background-Aqua').addEventListener('click',function(){
    document.body.style.background = 'Aqua';
})


// style for fun practice


