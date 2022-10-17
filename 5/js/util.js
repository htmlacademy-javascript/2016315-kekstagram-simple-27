export {getRandomNumber, getRandomArrayElement, createRandomIdFromRangeGenerator};

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomNumber (min, max) {
  min = Math.ceil (min); //минимальное значение округленное до целого
  max = Math.floor (max); //максимальное значение округленное до целого
  return (max < min || max < 0 || min < 0) ? NaN : Math.floor (Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

//function getString (testString, minStringLength, maxStringLength) {
//  return (testString.length >= minStringLength && testString.length <= maxStringLength);
//}Функция длины строки

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)]; //Функция элемента в переданном массиве по поиску случайного элемента.


function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomNumber(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomNumber(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}
