//import {infoPictures} from './data.js';

//const formPictures = document.querySelector('.pictures');//Находим html элемент (div или что там), куда мы будем вставлять созданные узлы
//const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');//Находим шаблон узла.Обращается к свойству .content шаблона.Внутри свойства content дополнительно ищем тот узел, который будем копировать

////const similarPictures = infoPictures();

//const similarListFragment = document.createDocumentFragment();//Делаем фрагмент (если нужно), который будет служить эдаким буфером, куда мы будем собирать узел.

//similarPictures.forEach(({url, likes, comments}) => {
//  const pictureElement = pictureTemplate.cloneNode(true);//Делаем клон узла из шаблона
//  //Набиваем клон содержимым
//  pictureElement.querySelector('.picture__img').src = url;
//  pictureElement.querySelector('.picture__likes').textContent = likes;
//  pictureElement.querySelector('.picture__comments').textContent = comments;
//  similarListFragment.append(pictureElement);//Запихиваем клон в фрагмент
//});

//formPictures.append(similarListFragment);//Запихиваем фрагмент в родитель

//Расписываю по шагам просто на русском:
//1. Находим html элемент (div или что там), куда мы будем вставлять созданные узлы
//2. Находим шаблон узла.
//2.1 Обращается к свойству .content шаблона
//2.2 Внутри свойства content дополнительно ищем тот узел, который будем копировать
//3. Делаем фрагмент (если нужно), который будет служить эдаким буфером, куда мы будем собирать узел.
//4. Делаем клон узла из пункта 2.2
//5. Набиваем клон содержимым
//6. Запихиваем клон в фрагмент (пункт 3)
//7. Запихиваем фрагмент в родитель (пункт 1).
//Как только мы запихнули фрагмент, он тут же стал пустым и ждёт следующих поступлений.

const createPhotoElement = (photoData, templatePicture) => {

  const randomElement = templatePicture.cloneNode(true);
  randomElement.querySelector('.picture__img').src = photoData.url;
  randomElement.querySelector('.picture__likes').textContent = photoData.likes;
  randomElement.querySelector('.picture__comments').textContent = photoData.comments;

  return randomElement;
};

const renderPhoto = (photoDataServer) => {
  const templateElement = document.querySelector('#picture')
    .content
    .querySelector('.picture');
  const parentElement = document.querySelector('.pictures');
  photoDataServer.forEach((photosData) => {
    parentElement.appendChild(createPhotoElement(photosData, templateElement));
  });};

export {renderPhoto};
