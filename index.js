const varName = document.getElementById('selectFontSize');
const selectBgcolor = document.getElementById('selectBgcolor');

const resetButton = document.getElementById('resetButton');

const mainElement = document.querySelector('main');

const initialSetup = () => {
  const bgColor = localStorage.getItem('bgColor');
  const fontSize = localStorage.getItem('fontSize');

  if (selectedBgColor && selectedFontsize) {
    selectFontSize.value = fontSize;
    selectBgcolor.value = bgColor;
    mainElement.style.fontSize = fontSize;
    mainElement.style.backgroundColor = bgColor;
  }

  if (!selectedBgColor && selectedFontsize) {
    selectFontSize.value = fontSize;
    selectBgcolor.value = bgColor;
    mainElement.style.fontSize = fontSize;
    mainElement.style.backgroundColor = bgColor;
  }
};

const changeFontSize = event => {
  const selectedFontsize = event.target.value;

  mainElement.style.fontSize = selectedFontsize;

  localStorage.setItem('fontSize', selectedFontsize);
};

const changeBgcolor = event => {
  const selectedBgColor = event.target.value;

  mainElement.style.backgroundColor = selectedBgColor;
  localStorage.setItem('bgColor', selectedBgColor);
};

const clearLocalStorage = () => {
  localStorage.removeItem('bgColor');
  localStorage.removeItem('fontSize');
};

varName.addEventListener('change', changeFontSize);
selectBgcolor.addEventListener('change', changeBgcolor);
resetButton.addEventListener('click', clearLocalStorage);

initialSetup();
