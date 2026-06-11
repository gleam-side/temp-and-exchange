function conversion() {
    const rates = { php: 1, usd: 0.016, eur: 0.014 };
    const labels = { php: "PHP", usd: "USD", eur: "EUR" };

    const amount = parseFloat(document.getElementById("amount").value) || 0;
    const from = document.getElementById("from-currency").value;
    const to = document.getElementById("to-currency").value;
    const fr = document.getElementById("finalresult");

    if (from === to) {
        fr.textContent = "Please select two different currencies.";
        return;
    }

    const result = (amount / rates[from]) * rates[to];
    fr.textContent = amount.toFixed(2) + " " + labels[from] + " = " + result.toFixed(2) + " " + labels[to];
}

function convertTemperature() {
    var input = document.getElementById("celsius");
    var fr = document.getElementById("farenheit");
    var direction = document.getElementById("temp-direction").value;
    var val = Number(input.value);

    if (isNaN(val) || input.value.trim() === "") {
        fr.textContent = "Please enter a valid number!";
        return;
    }

    if (direction === "ctof") {
        fr.textContent = val + "°C = " + ((val * 9 / 5) + 32).toFixed(2) + "°F";
    } else {
        fr.textContent = val + "°F = " + ((val - 32) * 5 / 9).toFixed(2) + "°C";
    }
}
