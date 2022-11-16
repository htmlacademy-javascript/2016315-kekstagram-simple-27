////https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//function getRandomNumber (min, max) {
//  min = Math.ceil (min); //минимальное значение округленное до целого
//  max = Math.floor (max); //максимальное значение округленное до целого
//  return (max < min || max < 0 || min < 0) ? NaN : Math.floor (Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
//}

////function getString (testString, minStringLength, maxStringLength) {
////  return (testString.length >= minStringLength && testString.length <= maxStringLength);
////}Функция длины строки

//const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)]; //Функция элемента в переданном массиве по поиску случайного элемента.

//function createRandomIdFromRangeGenerator (min, max) {
//  const previousValues = [];

//  return function () {
//    let currentValue = getRandomNumber(min, max);
//    if (previousValues.length >= (max - min + 1)) {
//      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
//      return null;
//    }
//    while (previousValues.includes(currentValue)) {
//      currentValue = getRandomNumber(min, max);
//    }
//    previousValues.push(currentValue);
//    return currentValue;
//  };
//}

const isEscapeKey = (evt) => evt.key === 'Escape';

const showErrorModal = () => {
  const windowErrorElemet = document.createElement('div');
  const textErrorElement = document.createElement('p');
  textErrorElement.textContent = 'Что-то пошло совсем не по плану :С Возможно, гремлины украли сервер';
  textErrorElement.style.color = 'black';
  windowErrorElemet.appendChild(textErrorElement);
  windowErrorElemet.style.position = 'absolute';
  windowErrorElemet.style.top = '50%';
  windowErrorElemet.style.left = '50%';
  windowErrorElemet.style.marginTop = '-100px';
  windowErrorElemet.style.marginLeft = '-200px';
  windowErrorElemet.style.width = '400px';
  windowErrorElemet.style.backgroundColor = 'red';
  windowErrorElemet.style.borderRadius = '8px';
  windowErrorElemet.style.border = '5px solid #ffaaff';
  windowErrorElemet.style.padding = ' 5px 10px';
  document.body.append(windowErrorElemet);

  setTimeout(() => {
    windowErrorElemet.remove();
  }, 5000);
};

export {isEscapeKey, showErrorModal};
