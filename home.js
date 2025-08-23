const addMoney = document.getElementById('addMoney')
let validpin = 1234;

addMoney.addEventListener('click', (e) => {
  e.preventDefault();
const bank = document.getElementById('bank').value ;
const addAccount = document.getElementById('add-account').value;
const addAmount = parseInt(document.getElementById('add-amount').value)
const addPin = parseInt(document.getElementById('add-pin').value)

const AvailableBlance =parseInt(document.getElementById('Available-blance').innerText)

if(addAccount.length < 11){
 alert('please provide valid account number')
 return;
}
if(addPin  !== validpin){
  alert('please provide a valid pin number')
  return;
}

// console.log(bank, addAccount,addAmount, addPin)
const totalNewAvailableBlance = addAmount + AvailableBlance;

console.log(AvailableBlance)
document.getElementById('Available-blance').innerText = totalNewAvailableBlance;

})