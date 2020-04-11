/* Code adapted from Stack Overflow
https://stackoverflow.com/questions/6121203/how-to-do-fade-in-and-fade-out-with-javascript-and-css/6121270#6121270 */

const form = document.getElementById('form');


/* Display animation once form is submitted*/
form.addEventListener('submit', startAnimation(form));



