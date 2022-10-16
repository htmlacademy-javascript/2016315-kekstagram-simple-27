const PICTURES_COUNT = 25;
const LIKES_COUNT = {
  MIN: 15,
  MAX: 200,
};
const ID_COUNT = {
  MIN: 1,
  MAX: 25,
};
const DESCRIPTIONS_COUNT = [
  'Передо мной интересная фотография.',
];
const COMMENTS_COUNT = {
  MIN: 0,
  MAX: 200,
};

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomNumber (min, max) {
  min = Math.ceil (min); //минимальное значение округленное до целого
  max = Math.floor (max); //максимальное значение округленное до целого
  return (max <= min || max < 0 || min < 0) ? NaN : Math.floor (Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
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

function createInfo () {
  const createRandomId = createRandomIdFromRangeGenerator ();
  return {
    id: createRandomId(ID_COUNT.MIN, ID_COUNT.MAX),
    url: `photos/${createRandomId(1, PICTURES_COUNT)}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS_COUNT),
    likes: getRandomNumber(LIKES_COUNT.MIN, LIKES_COUNT.MAX),
    comments: getRandomNumber(COMMENTS_COUNT.MIN, COMMENTS_COUNT.MAX),
  };
};

const createArray = Array.from({length: PICTURES_COUNT}, createInfo);
