const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");
const swapBtn = document.getElementById("swapBtn");

const currencies = [
  "USD",
  "INR",
  "EUR",
  "GBP",
  "JPY",
  "AUD",
  "CAD",
  "CHF",
  "CNY"
];

currencies.forEach((currency) => {
  const option1 = document.createElement("option");
  option1.value = currency;
  option1.textContent = currency;
  fromCurrency.appendChild(option1);

  const option2 = document.createElement("option");
  option2.value = currency;
  option2.textContent = currency;
  toCurrency.appendChild(option2);
});

fromCurrency.value = "USD";
toCurrency.value = "INR";

async function convertCurrency() {

  const amount = amountInput.value;
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (amount <= 0) {
    result.textContent = "Please enter a valid amount";
    return;
  }

  const url = `https://open.er-api.com/v6/latest/${from}`;

  try {

    result.textContent = "Converting...";

    const response = await fetch(url);

    const data = await response.json();

    const rate = data.rates[to];

    const convertedAmount = (amount * rate).toFixed(2);

    result.textContent =
      `${amount} ${from} = ${convertedAmount} ${to}`;

  } catch (error) {

    result.textContent = "Something went wrong";

    console.log(error);

  }
}

convertBtn.addEventListener("click", convertCurrency);

swapBtn.addEventListener("click", () => {

  const temp = fromCurrency.value;

  fromCurrency.value = toCurrency.value;

  toCurrency.value = temp;

});