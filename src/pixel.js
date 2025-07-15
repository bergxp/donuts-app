import ReactPixel from 'react-facebook-pixel';

const options = {
  autoConfig: true, 
  debug: true,
};

ReactPixel.init('2163525254126163', {}, options);
ReactPixel.pageView();