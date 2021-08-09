function generateSelectOptions(noOfYears) {
    let options = "";

    for (let i = 1; i <= noOfYears; i++) {
        options += `<option value="${i}">${i}</option>`
    }

    document.getElementById('years').innerHTML = options;
}

function compute()
{
    p = document.getElementById("principal").value;
    
}
        