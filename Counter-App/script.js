let count = 0;


let countValue = document.getElementById("count");

let increaseButton = document.getElementById("increase");

let decreaseButton = document.getElementById("decrease");

let resetButton = document.getElementById("reset");


function updateCounter() {

    countValue.textContent = count;


    if (count > 0) {
        countValue.style.color = "green";
    }

    else if (count < 0) {
        countValue.style.color = "red";
    }

    else {
        countValue.style.color = "black";
    }

}


increaseButton.addEventListener("click", function () {

    count++;

    updateCounter();

});


decreaseButton.addEventListener("click", function () {

    count--;

    updateCounter();

});


resetButton.addEventListener("click", function () {

    count = 0;

    updateCounter();

});