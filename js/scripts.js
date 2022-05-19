const rootStyles = document.documentElement
const mainColorElement = document.getElementById('main-color')
const complementaryColorElement = document.getElementById('complementary-color')
const createColorElement = document.getElementById('create-color')
const hexValues = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

const getRandomHexPairs = () => {
  let A = [];
  let B = [];
  // Generate random index and it's opposite
  for ( let i = 0; i < 3; i++ ) {
    A.push(Math.floor(Math.random() * hexValues.length));
    B.push(hexValues.length - A[i] - 1);
  }
  // Index to hex color
  const hexA = `#${hexValues[A[0]]}${hexValues[A[1]]}${hexValues[A[2]]}`;
  const hexB = `#${hexValues[B[0]]}${hexValues[B[1]]}${hexValues[B[2]]}`;

  return { hexA, hexB };
}

const applyHexColor = () => {

  const { hexA, hexB } = getRandomHexPairs();

  rootStyles.style.setProperty('--main-color', hexA);
  rootStyles.style.setProperty('--complementary-color', hexB);
  
  mainColorElement.textContent = hexA;
  complementaryColorElement.textContent = hexB;
}

createColorElement.addEventListener('click', () => {
  applyHexColor(hexValues);
})
window.addEventListener('DOMContentLoaded', () => {
  applyHexColor(hexValues);
})