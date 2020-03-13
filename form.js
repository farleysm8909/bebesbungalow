const submitButton = document.getElementById('submit-button');
const fnameInput = document.getElementById('first-name-input');
const lnameInput = document.getElementById('last-name-input');
const emailInput = document.getElementById('email-input');
const phoneInput = document.getElementById('phone-input');
const messageInput = document.getElementById('message-input');

submitButton.disabled = true;

fnameInput.addEventListener('input', () => {
  if (fnameInput.value.match(/^\w+$/)) {
      submitButton.disabled = false;
  } else {
      submitButton.disabled = true;
  }
});

lnameInput.addEventListener('input', () => {
  if (lnameInput.value.match(/^\w+$/)) {
      submitButton.disabled = false;
  } else {
      submitButton.disabled = true;
  }  
});

emailInput.addEventListener('input', () => {
    if ((emailInput.value.match(/^\w+$/)) && (emailInput.value.includes("@"))) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }  
  });

messageInput.addEventListener('input', () => {
    if (messageInput.value.match(/^\w+$/)) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }  
  });




