let billAmountInput =
    document.getElementById("billAmount");

let tipPercentageInput =
    document.getElementById("tipPercentage");

let calculateBtn =
    document.getElementById("calculateBtn");

let result =
    document.getElementById("result");


function calculateTip() {

    let billAmount =
        parseFloat(billAmountInput.value);

    let tipPercentage =
        parseFloat(tipPercentageInput.value);


    if (!billAmount || !tipPercentage ||
        billAmount <= 0 || tipPercentage <= 0) {

        result.textContent =
            "Please enter valid values";

        result.style.color = "red";

        return;
    }


    let tipAmount =
        (billAmount * tipPercentage) / 100;

    let totalAmount =
        billAmount + tipAmount;


    result.textContent =
        `Total Amount: ₹${totalAmount.toFixed(2)}`;

    result.style.color = "green";

}


calculateBtn.addEventListener(
    "click",
    calculateTip
);