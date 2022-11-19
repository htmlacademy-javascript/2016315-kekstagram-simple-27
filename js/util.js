const ESC_KEY = 'Escape';

const isEscapeKey = (evt) => evt.key === ESC_KEY;

const showErrorModal = () => {
  const windowErrorElement = document.createElement('div');
  const textErrorElement = document.createElement('p');
  textErrorElement.textContent = 'Что-то пошло совсем не по плану :С Возможно, гремлины украли сервер';
  textErrorElement.style.color = 'black';
  windowErrorElement.appendChild(textErrorElement);
  windowErrorElement.style.position = 'absolute';
  windowErrorElement.style.top = '50%';
  windowErrorElement.style.left = '50%';
  windowErrorElement.style.marginTop = '-100px';
  windowErrorElement.style.marginLeft = '-200px';
  windowErrorElement.style.width = '400px';
  windowErrorElement.style.backgroundColor = 'red';
  windowErrorElement.style.borderRadius = '8px';
  windowErrorElement.style.border = '5px solid #ffaaff';
  windowErrorElement.style.padding = ' 5px 10px';
  document.body.append(windowErrorElement);

  setTimeout(() => {
    windowErrorElement.remove();
  }, 5000);
};

export {isEscapeKey, showErrorModal};
