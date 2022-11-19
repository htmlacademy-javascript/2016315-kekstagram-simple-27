import './util.js';
import {getPhotos} from './api.js';
import {renderPhoto} from './popup.js';
import './form.js';
import './effect.js';
import './scale.js';

getPhotos().then((photos) => {
  if (photos) {
    renderPhoto(photos);
  }
});
