const amountInput = document.querySelector('#amount');
const name = document.querySelector('#name');
const form = document.querySelector('form');
const mobile = document.getElementById('mobile');
const payment_submit_btn = document.querySelector('.payment_submit_btn');
const formData = {};

// Toast colors
const green = '#4caf50';
const red = '#EA3C53';

function update_amount() {
  let cost = amountInput.value;
  payment_submit_btn.innerText = 'Pay ₹ ' + cost;
}

function getFormData() {
  const inputs = document.querySelectorAll('input');
  inputs.forEach((input) => {
    formData[input.id] = input.value;
  });

  const selects = document.querySelectorAll('select');
  selects.forEach((select) => {
    formData[select.id] = select.value;
  });

  console.log(formData);
}

function showToast(message, color) {
  const toastContainer = document.getElementById('toastContainer');
  const toastElement = document.createElement('div');
  toastElement.classList.add('toast');
  toastElement.innerText = message;
  toastElement.style.backgroundColor = color;
  toastContainer.appendChild(toastElement);

  setTimeout(() => {
    toastElement.remove();
  }, 3000);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const alphabeticRegex = /^[A-Za-z ]+$/;

  if (amountInput.value < 0) {
    showToast('You have entered Invalid amount', red);
    return;
  } else if (!alphabeticRegex.test(name.value)) {
    showToast('You have entered Invalid Name', red);
    return;
  } else if (!(mobile.value.length === 10)) {
    showToast('You have entered Invalid Mobile Number', red);
    return;
  } else {
    showToast('Payment Done Successfully!', green);
    getFormData();
  }
});
