const billTotalInput = document.getElementById('billTotal');
const noOfPeopleInput = document.getElementById('noOfPeople');
const calculateBtn = document.getElementById('calculate');
const totalTipOutput = document.getElementById('totalTip');
const totalBillOutput = document.getElementById('totalBill');
const tipPerPersonOutput = document.getElementById('tipPerPerson');

calculateBtn.addEventListener('click', function() {
    const billTotal = parseFloat(billTotalInput.value);
    const noOfPeople = parseFloat(noOfPeopleInput.value);
    let tipPercentage;
    if (btn15.classList.contains('active')) {
      tipPercentage = 0.15;
    } else if (btn18.classList.contains('active')) {
      tipPercentage = 0.18;
    } else {
      tipPercentage = 0.2;
    } })