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

// log out button
const logOutBtn = document.getElementById('logoutbtn');
logOutBtn.addEventListener('click', () => {
  window.location.href = './index.html';
});



// function to toggling

function handelToggle(id){
  const froms = document.getElementsByClassName('form');
  for(const form of froms){
    form.style.display = 'none'
  }

  document.getElementById(id).style.display = 'block'

}

// / toggling feature
//!1
const addButton = document.getElementById('addButton');
addButton.addEventListener('click', () => {
  handelToggle('add-money-parent');

  const frombtns = document.getElementsByClassName('frombtn')

  for(const btn of frombtns){
    btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
    btn.classList.add('border-gray-300')
  }

  document.getElementById('addButton').classList.remove('border-gray-300')
document.getElementById('addButton').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')
});


//!2
const cashoutButton = document.getElementById('cashoutButton');
cashoutButton.addEventListener('click', () => {
  handelToggle('cash-out-parent')

  
  const frombtns = document.getElementsByClassName('frombtn')

  for(const btn of frombtns){
    btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]', 'bg-[#0874f20d]')
     btn.classList.add('border-gray-300');
  }
  document.getElementById('cashoutButton').classList.remove('border-gray-300')
document.getElementById('cashoutButton').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')
});


//!3
const TransferButton = document.getElementById('TransferButton')
TransferButton.addEventListener('click', () => {
  handelToggle('Transfer-parent')

  
  const frombtns = document.getElementsByClassName('frombtn')

  for(const btn of frombtns){
    btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]', 'bg-[#0874f20d]')
     btn.classList.add('border-gray-300');
  }
  document.getElementById('TransferButton').classList.remove('border-gray-300')
document.getElementById('TransferButton').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')
})

//!4
const getbonusButton = document.getElementById('getbonusButton')
getbonusButton.addEventListener('click', (e) => {
  e.preventDefault()
  handelToggle('getbonus-parent')

  
  const frombtns = document.getElementsByClassName('frombtn')

  for(const btn of frombtns){
    btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]', 'bg-[#0874f20d]')
     btn.classList.add('border-gray-300');
  }
  document.getElementById('getbonusButton').classList.remove('border-gray-300')
document.getElementById('getbonusButton').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')

})

//!5
const paybillButton  = document.getElementById('paybillButton')
paybillButton.addEventListener('click', () => {
  handelToggle('paybill-parent')
    
  const frombtns = document.getElementsByClassName('frombtn')

  for(const btn of frombtns){
      btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
     btn.classList.add('border-gray-300');
  }
  document.getElementById('paybillButton').classList.remove('border-gray-300')
document.getElementById('paybillButton').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')
})

//!6

const transactionButton = document.getElementById('transactionButton')
transactionButton.addEventListener('click', () => {
  handelToggle('transaction-parent')

    
  const frombtns = document.getElementsByClassName('frombtn')

  for(const btn of frombtns){
    btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
     btn.classList.add('border-gray-300');
  }
  document.getElementById('transactionButton').classList.remove('border-gray-300')
document.getElementById('transactionButton').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')
})

// view all
const viewallbtn = document.querySelector('.viewallbtn')

viewallbtn.addEventListener('click', () => {
  const views = document.querySelectorAll('.view')
  for(const view of views){
view.classList.toggle('hidden');
  }

})



