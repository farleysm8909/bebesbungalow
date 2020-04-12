const formElement = document.getElementById('form');
const fnameInput = document.getElementById('first-name-input');
const lnameInput = document.getElementById('last-name-input');
const emailInput = document.getElementById('email-input');
const phoneInput = document.getElementById('phone-input');
const messageInput = document.getElementById('message-input');
const submitButton = document.getElementById('submit-button');

const animatedElement = document.querySelector('#form');
const pageHeading = document.getElementById('page-heading');
const middleFooter = document.getElementById('mfooter');
const leftFooter = document.getElementById('lfooter');
const rightFooter = document.getElementById('rfooter');

/* Remove form and footers after form submission */
animatedElement.addEventListener('animationend', () => {
    formElement.style.display = "none";
    leftFooter.style.display = "none";
    middleFooter.style.display = "none";
    rightFooter.style.display = "none";
});

/* 
** Form validation code adapted from Stack Overflow: 
** https://stackoverflow.com/questions/12457710/validation-of-input-text-field-in-html-using-javascript 

** CSS keyframes animation code adapted from code by Chris Johnson as well as 
** https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationend_event 
*/

function validateForm() {
    if (isString(fnameInput)) {
        if (isString(lnameInput)) {
            if (isEmail(emailInput)) {
                if (isPhoneNum(phoneInput)) {
                    if (isMessage(messageInput)) {
                        formElement.classList.add("fading-out");
                        leftFooter.classList.add("fading-out");
                        middleFooter.classList.add("fading-out");
                        rightFooter.classList.add("fading-out");
                        pageHeading.classList.add("fading-in");
                        pageHeading.innerHTML = "Success! The form has been submitted";
                    }
                }
            }
        }
    }
}

/* ---- Form Input Validation Tests ---- */

function isString(field) {
    let fieldData = field.value;

    if (fieldData.match(/^\w+$/) || fieldData.match(/^\s?/)) { /* account for names with spaces like van Heerden */
        return true;
    } else {
        alert("Please fill out any blank required fields.")
        return false;
    }
}

/* Email validation code adapted from w3resource.com: 
https://www.w3resource.com/javascript/form/email-validation.php */

function isEmail(field) {
    let fieldInput = field.value;

    if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fieldInput))) {
        return true;
    } else {
        alert("Please enter a valid email address.")
        return false;
    }
}

function isPhoneNum(field) {
    let fieldEntry = field.value;

    if (fieldEntry.length == 0 || fieldEntry.match(/^\d{10}$/)) {
        return true;
    } else {
        alert("Please enter a 10 digit phone number (digits only).")
        return false;
    }
}

function isMessage(field) {
    let fieldData = field.value;

    if (fieldData.length != 0) {
        return true;
    } else {
        alert("Please fill out any blank required fields.")
        return false;
    }
}










