function calculateTip() {

    let billAmount = document.getElementById("bill").value;
    let tipPercent = document.getElementById("tip"). value;
    let people = document.getElementById("people").value;

if(billAmount === ""|| tipPercent === "" || people === "" || people <=0){
    alert ("Please enter valid values");
    return;
}

let tipAmount = (billAmount * tipPercent) / 100;
let totalAmount = Number (billAmount) + tipAmount;

let tipPerPerson = tipAmount / people;
let totalPerPerson = totalAmount / people;

document.getElementById("tipPerPerson").innerText = tipPerPerson.toFixed (2);
document.getElementById("totalPerPerson").innerText = totalPerPerson.toFixed (2);
}