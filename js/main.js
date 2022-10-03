//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomNumber (min, max) {
  min = Math.ceil (min); //минимальное значение округленное до целого
  max = Math.floor (max); //максимальное значение округленное до целого
  return (max <= min || max < 0 || min < 0) ? NaN : Math.floor (Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
getRandomNumber(0, 100);

function getString (testString, minStringLength, maxStringLength) {
  return (testString.length >= minStringLength && testString.length <= maxStringLength);
}
getString('Как у тебя дела? \n Пришла идея погулять \n Буду ждать тебя в парке', 20, 120);
