// show a message with a type of the input
function showMessage(input, message, type) {
  // get the small element and set the message
  const msg = input.parentNode.querySelector('small');
  msg.innerText = message;
  // update the class for the input
  input.className = type ? 'email-success' : 'email-error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, '', true);
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
  // check if the value is not empty
  if (!hasValue(input, requiredMsg)) {
    return false;
  }
  // eslint-disable-next-line
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
    // check if email is in small letter;
  }
  if (email.toLowerCase() === email) {
    return true;
  }

  return showError(input, invalidMsg);
}

const form = document.querySelector('#contact-form');
const emailField = document.getElementById('email');
const nameField = document.getElementById('name');
const messageField = document.getElementById('message');
const EMAIL_REQUIRED = 'Please enter your email';
const EMAIL_INVALID = 'Please enter a correct email address format !';

nameField.oninput = () => {
  const formData = new FormData();
  const myObject = {};
  formData.append('name', nameField.value);
  formData.append('email', emailField.value);
  formData.append('message', messageField.value);
  formData.forEach((value, key) => {
    myObject[key] = value;
  });
  localStorage.setItem('form-data', JSON.stringify(myObject));
};

emailField.oninput = () => {
  const formData = new FormData();
  const myObject = {};
  formData.append('name', nameField.value);
  formData.append('email', emailField.value);
  formData.append('message', messageField.value);
  formData.forEach((value, key) => {
    myObject[key] = value;
  });
  localStorage.setItem('form-data', JSON.stringify(myObject));
};

messageField.oninput = () => {
  const formData = new FormData();
  const myObject = {};
  formData.append('name', nameField.value);
  formData.append('email', emailField.value);
  formData.append('message', messageField.value);
  formData.forEach((value, key) => {
    myObject[key] = value;
  });
  localStorage.setItem('form-data', JSON.stringify(myObject));
};

form.addEventListener('submit', (event) => {
  const formData = new FormData();
  const myObject = {};
  // validate the form
  const emailValid = validateEmail(form.elements.email, EMAIL_REQUIRED, EMAIL_INVALID);
  if (!emailValid) {
    event.preventDefault();
  } else {
    formData.append('name', form.elements.name.value);
    formData.append('email', form.elements.email.value);
    formData.append('message', form.elements.message.value);
    formData.forEach((value, key) => {
      myObject[key] = value;
    });
    localStorage.setItem('form-data', JSON.stringify(myObject));
  }
});

window.onload = () => {
  const myObject = Storage.getItem('form-data');
  form.elements.name.value = JSON.parse(myObject).name;
  form.elements.email.value = JSON.parse(myObject).email;
  form.elements.message.value = JSON.parse(myObject).message;
};