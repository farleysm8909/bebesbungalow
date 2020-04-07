/* Code adapted from https://twodee.org/blog/17470 */

const menuButton = document.getElementById('menu-button');
const navigation = document.getElementById('navigation');

menuButton.addEventListener('click', e => {
  menuButton.classList.toggle('active');
  navigation.classList.toggle('open');
  e.stopPropagation();
});

document.addEventListener('click', () => {
    menuButton.classList.remove('active');
    navigation.classList.remove('open');
});

