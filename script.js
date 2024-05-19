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
    } 

    const tipAmount = billTotal * tipPercentage / noOfPeople;
  const totalBill = billTotal/noOfPeople + tipAmount;
  const tipPerPerson = tipAmount / noOfPeople;

  totalTipOutput.textContent = `Ksh ${tipAmount.toFixed(2)}`;
  totalBillOutput.textContent = `Ksh ${totalBill.toFixed(2)}`;
  tipPerPersonOutput.textContent = `Ksh ${tipPerPerson.toFixed(2)}`;

  const buttons = [btn15, btn18, btn20];
  for (const button of buttons) {
    if (button.classList.contains('active')) {
      button.style.backgroundColor = 'yellow';
      button.textContent = 'Selected: ' + button.textContent.slice(4);
    } else {
      button.innerHTML.style.backgroundColor = 'blue';
      button.textContent = button.textContent.slice(0, 3);
    }
  }
  if (noOfPeople === 1) {
    tipPerPersonOutput.parentElement.style.display = 'none';
  } else {
    tipPerPersonOutput.parentElement.style.display = 'block';
  }
});