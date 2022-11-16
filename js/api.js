const Url = {
  POST: 'https://27.javascript.pages.academy/kekstagram-simple',
  GET: 'https://27.javascript.pages.academy/kekstagram-simple/data',
};

async function getPhotos() {
  const response = await fetch(Url.GET,
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  );

  if (response.ok) {
    return await response.json();
  }

  throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
}

const sendPhotos = (onSuccess, onFail, body) => {
  fetch(Url.POST,
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
