// src/pixel.js
import ReactPixel from 'react-facebook-pixel';

const options = {
  autoConfig: true,
  debug: false,
};

export const initFacebookPixel = () => {
  ReactPixel.init('COLOQUE_SEU_PIXEL_ID_AQUI', null, options);
  ReactPixel.pageView();
};

export const trackEvent = (eventName, data = {}) => {
  ReactPixel.track(eventName, data);
};
