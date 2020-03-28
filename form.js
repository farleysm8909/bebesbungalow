const submitButton = document.getElementById('submit-button');
const fnameInput = document.getElementById('first-name-input');
const lnameInput = document.getElementById('last-name-input');
const emailInput = document.getElementById('email-input');
const messageInput = document.getElementById('message-input');
const form = document.getElementById('form');

/*submitButton.disabled = true;*/

/* Form validation code adapted from Stack Overflow: 
https://stackoverflow.com/questions/12457710/validation-of-input-text-field-in-html-using-javascript */

function validateForm(form) {
    if (isString(fnameInput)) {
        if (isString(lnameInput)) {
            if (isEmail(emailInput)) {
                if (isString(messageInput)) {
                    /* Display animation to assure user their submission was successful 
                    https://codepen.io/valentingalmand/pen/MYMZZK */

                    return true;
                }
            }
        }
    }
    return false;
}

function isString(field) {

    let fieldData = field.value;

    if (fieldData.match(/^\w+$/)) {
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




