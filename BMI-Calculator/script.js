let heightInput = document.getElementById("height");

let weightInput = document.getElementById("weight");

let calculateBtn = document.getElementById("calculateBtn");

let result = document.getElementById("result");


calculateBtn.addEventListener("click", function () {

    let height = parseFloat(heightInput.value);

    let weight = parseFloat(weightInput.value);


    if (!height || !weight || height <= 0 || weight <= 0) {

        result.textContent = "Please enter valid values";

        result.style.color = "red";

        return;
    }


    let bmi = weight / (height * height);

    bmi = bmi.toFixed(2);


    if (bmi < 18.5) {

        result.textContent =
            `BMI: ${bmi} (Underweight)`;

        result.style.color = "orange";
    }

    else if (bmi >= 18.5 && bmi < 25) {

        result.textContent =
            `BMI: ${bmi} (Normal Weight)`;

        result.style.color = "green";
    }

    else if (bmi >= 25 && bmi < 30) {

        result.textContent =
            `BMI: ${bmi} (Overweight)`;

        result.style.color = "darkorange";
    }

    else {

        result.textContent =
            `BMI: ${bmi} (Obese)`;

        result.style.color = "red";
    }

});