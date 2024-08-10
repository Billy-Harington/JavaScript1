let name = 'Alex';
let lowName = (name[0].toLowerCase() !== 'a') 
let money = 10000;
let account = 7777;

let userName = prompt("Как вас зовут?");
if (userName == name) {
  let userAccount = prompt("Номер счета?");
  if (parseInt(userAccount) === account) {
    let withdrawAmount = prompt("Сколько обналичить?");
    if (parseInt(withdrawAmount) <= money) {
      money -= parseInt(withdrawAmount);
      alert("Все отлично");
      alert(` Oтобрано: ${withdrawAmount}. Оставлено: ${money}`);
    } else {
      alert("Недостаточно средств");
    }
  } else {
    alert("Пользователь не найден, досвидули");
  }
} else {
  alert("Пользователь не найден, досвидули");
}
