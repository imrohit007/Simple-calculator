let screen = document.querySelector('.result');

function addToScreen(value) {
  screen.value += value;
}

function clearScreen() {
  screen.value = '';
}

function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch(error) {
    screen.value = 'Error';
  }
}
