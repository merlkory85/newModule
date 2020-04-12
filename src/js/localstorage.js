const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

document
  .querySelector('input.js-switch-input')
  .addEventListener('change', clickOnCheckbox);

const checkBoxElement = document.querySelector('.switch__input[type=checkbox]');
const saveDarkTheme = localStorage.getItem('DARK');

function clickOnCheckbox(event) {
  event.preventDefault();

  lightThemeInGallery();

  if (checkBoxElement.checked) {
    darkThemeInGallery();
  }
}

function darkThemeInGallery() {
  localStorage.setItem('DARK', 'dark-theme');
  localStorage.getItem('DARK');

  document.querySelector('body').classList.add('dark-theme');
  document.querySelector('input.js-switch-input').setAttribute('checked', true);
}

if (saveDarkTheme) {
  darkThemeInGallery();
}

function lightThemeInGallery() {
  localStorage.removeItem('DARK', 'dark-theme');
  document.querySelector('body').classList.remove('dark-theme');
}
