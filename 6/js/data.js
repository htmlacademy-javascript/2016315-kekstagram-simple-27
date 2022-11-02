import {getRandomNumber, getRandomArrayElement, createRandomIdFromRangeGenerator} from './util.js';

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
  //'Выразительный JS видем в фотографии.',
];
const COMMENTS_COUNT = {
  MIN: 0,
  MAX: 200,
};

const createRandomId = createRandomIdFromRangeGenerator (ID_COUNT.MIN, ID_COUNT.MAX);
const createRandomUrl = createRandomIdFromRangeGenerator (1, PICTURES_COUNT);

function createInfo () {
  return {
    id: createRandomId(),
    url: `photos/${createRandomUrl()}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS_COUNT),
    likes: getRandomNumber(LIKES_COUNT.MIN, LIKES_COUNT.MAX),
    comments: getRandomNumber(COMMENTS_COUNT.MIN, COMMENTS_COUNT.MAX),
  };
};

const infoPictures = () => Array.from({length: PICTURES_COUNT}, createInfo);

export {infoPictures};
