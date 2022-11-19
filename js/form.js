import {isEscapeKey} from './util.js';
import {resetScale} from './scale.js';
import {resetEffects} from './effect.js';
import {sendPhotos} from './api.js';
import {showStatusModal, ModalType} from './modals.js';

const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const commentField = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text-error',
});

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeyDown);
};

const hideModal = () => {
  form.reset();
  resetScale();
  pristine.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
  resetEffects();
};

const isTextFieldFocused = () =>
  document.activeElement === commentField;

const isErrorPopupOpened = () =>
  document.querySelector('.error');

function onEscKeyDown(evt) {
  if (isEscapeKey(evt) && !isTextFieldFocused() && !isErrorPopupOpened()) {
    evt.preventDefault();
    hideModal();
  }
}

const onCancelButtonClick = () => {
  hideModal();
};

const onFileInputChange = () => {
  showModal();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (!isValid) {
    return;
  }

  const formData = new FormData(evt.target);
  sendPhotos(
    () => {
      hideModal();
      showStatusModal(ModalType.success);
    },
    () => showStatusModal(ModalType.error),
    formData
  );
};


fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);
form.addEventListener('submit', onFormSubmit);

export {pristine, fileField};
