var number = document.getElementById('number');
console.log(number.textContent);

function increment(){
    number.textContent = Number(number.textContent)+1
}

function reset(){
    console.log(number.textContent);
    number.textContent = 0
}

function decrement(){
    console.log(number.textContent);
    number.textContent = Number(number.textContent)-1
}