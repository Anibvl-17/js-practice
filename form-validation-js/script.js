const form = document.getElementById('form');
const inputs = document.querySelectorAll('input:not([type="submit"])');
const charCounters = document.querySelectorAll('.char-counter');
const validityMessages = document.querySelectorAll('.validity-msg');

inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    charCounters[index].textContent = input.value.length;
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

const emailInput = document.getElementById('email');
const emailRegEx = /^([a-zA-Z0-9._-]{1,64})+@([a-zA-Z0-9.-]{1,255})+\.[a-zA-Z]{2,6}$/;

const countryInput = document.getElementById('country');
const countryRegEx = /^[a-zA-Z ]{1,60}$/;

const zipCodeInput = document.getElementById('zip-code');
const zipCodeRegEx = /^\d{5}(?:[-\s]\d{4})?$/;

const passwordInput = document.getElementById('password');
const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,50}$/;

const confirmPasswordInput = document.getElementById('confirm-password');

emailInput.addEventListener('input', () => {
  if (emailInput.value.length === 0) {
    validityMessages[0].textContent = 'This field is required, example: john@doe.com';
  } else if (emailRegEx.test(emailInput.value)) {
    validityMessages[0].textContent = 'Valid email';
  } else {
    validityMessages[0].textContent = 'The email doesn\'t match the pattern';
  }
});

countryInput.addEventListener('input', () => {
  if (countryInput.value.length === 0) {
    validityMessages[1].textContent = 'This field is required, example: United States';
    countryInput.setCustomValidity('This field is required');
  } else if (countryRegEx.test(countryInput.value)) {
    validityMessages[1].textContent = 'Valid country';
  } else {
    validityMessages[1].textContent = 'Invalid country';
  }
});

zipCodeInput.addEventListener('input', () => {
  if (zipCodeRegEx.test(zipCodeInput.value)) {
    validityMessages[2].textContent = 'Valid zip code';
  } else {
    validityMessages[2].textContent = 'Invalid zip code';
  }
});

passwordInput.addEventListener('input', () => {
  if (passwordRegEx.test(passwordInput.value)) {
    validityMessages[3].textContent = 'Valid password';
  } else {
    validityMessages[3].textContent = 'Invalid password';
  }
});

confirmPasswordInput.addEventListener('input', () => {
  if (confirmPasswordInput.value === passwordInput.value) {
    validityMessages[4].textContent = 'Passwords match';
  } else {
    validityMessages[4].textContent = 'Passwords do not match';
  }
});