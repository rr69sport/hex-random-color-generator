const rootStyles = document.documentElement
const mainColorElement = document.getElementById('main-color')
const complementaryColorElement = document.getElementById('complementary-color')
const createColorElement = document.getElementById('create-color')
const hexValues = ['0', '1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

const getRandomValue = (array) => {
  const randomValue = Math.floor(Math.random() * array.length);
  return array[randomValue];
}
const getIndex = (array, value) => {
  return array.findIndex(item => item === value)
}
const getOppositePosition = (array, position) => {
  const oppositePosition = array.length - position - 1;
  return array[oppositePosition];
}

const createHexColor = (hexValues) => {
  const colorValues = {
    red: getRandomValue(hexValues),
    green: getRandomValue(hexValues),
    blue: getRandomValue(hexValues),
  }
  const colorIndex =  {
    red: getIndex(hexValues, colorValues.red),
    green: getIndex(hexValues, colorValues.green),
    blue: getIndex(hexValues, colorValues.blue)
  }
  const complementaryValues = {
    red: getOppositePosition(hexValues, colorIndex.red),
    green: getOppositePosition(hexValues, colorIndex.green),
    blue: getOppositePosition(hexValues, colorIndex.blue)
  }
  const hexColor = `#${colorValues.red}${colorValues.green}${colorValues.blue}`;
  const complementaryColor = `#${complementaryValues.red}${complementaryValues.green}${complementaryValues.blue}`;
  return { hexColor, complementaryColor };
}

const applyHexColor = (hexValues) => {

  const { hexColor, complementaryColor } = createHexColor(hexValues);

  rootStyles.style.setProperty('--main-color', hexColor);
  rootStyles.style.setProperty('--complementary-color', complementaryColor);
  
  mainColorElement.textContent = hexColor;
  complementaryColorElement.textContent = complementaryColor;
}

createColorElement.addEventListener('click', () => {
  applyHexColor(hexValues);
})
window.addEventListener('DOMContentLoaded', () => {
  applyHexColor(hexValues);
})