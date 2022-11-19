import { isEscapeKey } from './util.js';

const ModalType = {
  success: 'success',
  error: 'error',
};
let openedModal = '';

const closeModal = () => {
  document.querySelector(`.${openedModal}`).remove();
};

const onBackdropClick = (evt) => {
  if (
    evt.target.closest(`.${openedModal}__inner`) &&
    !evt.target.classList.contains(`${openedModal}__button`)
  ) {
    return;
  }
  document.querySelector(`.${openedModal}`).remove();
};

const showStatusModal = (type) => {
  openedModal = type;
  const template = document
    .querySelector(`#${openedModal}`)
    .content.querySelector(`.${openedModal}`);
  const modalElement = template.cloneNode(true);
  document.body.append(modalElement);
  modalElement.addEventListener('click', onBackdropClick);
  document.addEventListener('keydown', onEscKeydown);
};

function onEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

export { showStatusModal, ModalType };
