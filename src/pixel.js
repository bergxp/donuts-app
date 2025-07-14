import ReactPixel from 'react-facebook-pixel';

const options = {
  autoConfig: true,
  debug: true, // ative para ver logs no console
};

export const initFacebookPixel = () => {
  ReactPixel.init('1103551258322995', null, options);
  ReactPixel.pageView();
};

export const trackEvent = (eventName, data = {}) => {
  ReactPixel.track(eventName, data);
};
