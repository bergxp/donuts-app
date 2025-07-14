import ReactPixel from 'react-facebook-pixel';

const options = {
  autoConfig: true, 
  debug: true,
};

ReactPixel.init('1103551258322995', {}, options);
ReactPixel.pageView();