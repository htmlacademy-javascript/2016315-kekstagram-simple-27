import {showErrorModal} from './util.js';

const URLS = {
  POST: 'https://27.javascript.pages.academy/kekstagram-simple',
  GET: 'https://27.javascript.pages.academy/kekstagram-simple/data',
};

const getPhotos = async () => {
  try {
    const response = await fetch(URLS.GET,
      {
        method: 'GET',
        credentials: 'same-origin',
      },
    );

    if (response.ok) {
      return await response.json();
    }

    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  } catch (e) {
    showErrorModal();
  }
};

const sendPhotos = (onSuccess, onFail, body) => {
  fetch(URLS.POST,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    });
};

export {getPhotos, sendPhotos};
