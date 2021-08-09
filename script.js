function generateSelectOptions(noOfYears) {
    let options = "";

    for (let i = 1; i <= noOfYears; i++) {
        options += `<option value="${i}">${i}</option>`
    }

    document.getElementById('years').innerHTML = options;
}

function updateRate() 
{
    const rate = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rate + '%';
}

function validateAmount(amount) {
    if (amount.length === 0) {
        document.getElementById('error').innerHTML = 'The amount is missing';
        document.getElementById('amount').style = 'border: solid red';
        return false;
    }
    else {
        document.getElementById('error').innerHTML = '';
        document.getElementById('amount').style = 'border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))';
        return true;
    }
}

function compute()
{
    const amount = document.getElementById("amount").value;

    if (!validateAmount(amount)) return;

    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    const year = new Date().getFullYear()+parseInt(years);

    const interest = amount * rate * years / 100;
    const newAmount = parseInt(amount) + interest;

    let resultText = 'If you deposit <span class="value">' + amount + '</span>, <br>\
    at an interest rate of <span class="value">' + rate + '%</span>.<br>\
    You will receive an amount of <span class="value">' + newAmount + '</span>,<br>\
    in the year <span class="value">' + year + '</span>.'

    document.getElementById('result').innerHTML = resultText;

}
        