function conversion() {
    const rates = {
    php: 1,
    usd: 0.016,
    eur: 0.014
};

const labels = {
    php: "PHP",
    usd: "USD",
    eur: "EUR"
};
    const amount = parseFloat(document.getElementById("amount").value) || 0;
    const from = document.getElementById("from-currency").value;
    const to = document.getElementById("to-currency").value;

    if (from === to) {
        document.getElementById("finalresult").innerHTML = `
            <div class="res-row">
                <span>Please select two different currencies.</span>
            </div>`;
        return;
    }

    const amountInPhp = amount / rates[from];
    const result = amountInPhp * rates[to];

    document.getElementById("finalresult").innerHTML = `
        <div class="res-row">
            <span>${amount.toFixed(2)} ${labels[from]} = ${result.toFixed(2)} ${labels[to]}</span>
        </div>`;
}

function convertTemperature() {
    var input = document.getElementById("celsius");
    var r = document.getElementById("farenheit");
    var direction = document.getElementById("temp-direction").value;
    var val = Number(input.value);

    if (isNaN(val) || input.value.trim() === "") {
        r.textContent = "Please enter a valid number!";
        return;
    }

    if (direction === "ctof") {
        var result = (val * 9 / 5) + 32;
        r.textContent = val + "°C = " + result.toFixed(2) + "°F";
    } else {
        var result = (val - 32) * 5 / 9;
        r.textContent = val + "°F = " + result.toFixed(2) + "°C";
    }
}

function convertTemperature() {
    var input = document.getElementById("celsius");
    var r = document.getElementById("farenheit");
    var direction = document.getElementById("temp-direction").value;
    var val = Number(input.value);

    if (isNaN(val) || input.value.trim() === "") {
        r.textContent = "Please enter a valid number!";
        return;
    }

    if (direction === "ctof") {
        var result = (val * 9 / 5) + 32;
        r.textContent = val + "°C = " + result.toFixed(2) + "°F";
    } else {
        var result = (val - 32) * 5 / 9;
        r.textContent = val + "°F = " + result.toFixed(2) + "°C";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("currency-pair").addEventListener("change", updateDirection);
    updateDirection();
});