const addMoney = document.getElementById('addMoney');
let validpin = 1234;

addMoney.addEventListener('click', (e) => {
  e.preventDefault();
  const bank = document.getElementById('bank').value;
  const addAccount = document.getElementById('add-account').value;
  const addAmount = parseInt(document.getElementById('add-amount').value);
  const addPin = parseInt(document.getElementById('add-pin').value);

  const AvailableBlance = parseInt(document.getElementById('Available-blance').innerText);

  if (addAccount.length < 11) {
    alert('please provide valid account number');
    return;
  }
  if (addPin !== validpin) {
    alert('please provide a valid pin number');
    return;
  }

  // console.log(bank, addAccount,addAmount, addPin)
  const totalNewAvailableBlance = addAmount + AvailableBlance;

  console.log(AvailableBlance);
  document.getElementById('Available-blance').innerText = totalNewAvailableBlance;
});

// cashout money feature
const withDrawMoney = document.getElementById('withdrawmoney');

withDrawMoney.addEventListener('click', (e) => {
  e.preventDefault();
   const withdrawAmount = parseInt(document.getElementById('withdraw-amount').value);
  const AvailableBlance = parseInt(document.getElementById('Available-blance').innerText);
  const AgentNumber = document.getElementById('Agentnumber').value;
  const addPinCashout = parseInt(document.getElementById('add-pin-cashout').value);

    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
    alert('Please enter a valid withdraw amount');
    return;
  }
    if (AvailableBlance <= 0) {
    alert('You have no money');
    return;
  }
    if (AgentNumber.length < 11) {
    alert('Please provide a valid agent number');
    return;
  }
    if (addPinCashout !== validpin) {
    alert('Please provide a valid pin number');
    return;
  }
    if (withdrawAmount > AvailableBlance) {
    alert(`Not enough balance! You only have ${AvailableBlance} TK`);
    return;
  }

     const totalNewAvailableBlance = AvailableBlance - withdrawAmount;
  document.getElementById('Available-blance').innerText = totalNewAvailableBlance;

  alert('Withdrawal Successful!');


});

// toggling feature

const addButton = document.getElementById('addButton');

addButton.addEventListener('click', () => {
  document.getElementById('cash-out-parent').style.display = 'none';
  document.getElementById('add-money-parent').style.display = 'flex';
});
const cashoutButton = document.getElementById('cashoutButton');

cashoutButton.addEventListener('click', () => {
  document.getElementById('add-money-parent').style.display = 'none';
  document.getElementById('cash-out-parent').style.display = 'block';
});

const logOutBtn = document.getElementById('logoutbtn');
logOutBtn.addEventListener('click', () => {
  window.location.href = './index.html';
});
