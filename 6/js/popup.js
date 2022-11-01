import {InfoPictures} from './data.js';

//const imgPopup = document.querySelector('.img-upload__overlay');
//imgPopup.classList.remove('hidden');

const pictureTemplate = document.querySelector('#picture').content;

const FormPictures = document.querySelector('.pictures').content;

const similarPictures = InfoPictures();

const similarListFragment = document.createDocumentFragment();

similarPictures.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  similarListFragment.appendChild(pictureTemplate);
});

FormPictures.appendChild(similarListFragment);
