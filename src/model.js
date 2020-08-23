import image from './assets/baner.jpg';
import { TitleBlock, ImageBlock, TextBlock, TextColumnsBlock } from './classes/blocks';
import { css } from './utils';

const loremText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorum quas tenetur. Deleniti omnis velit officia fugit ex nulla unde!`;

export const model = [
  new TitleBlock('Конструктор сайтов на чистом JavaScript!', {
    tag: 'h2',
    styles: css({
      'background': 'linear-gradient(to right, #ff0099, #493240)',
      'padding': '1.5rem',
      'color': '#fff',
      'text-align': 'center'
    })
  }),
  new ImageBlock(image, {
    alt: 'my image',
    imageStyles: css({
      'width': '100%'
    })
  }),
  new TextColumnsBlock([loremText, loremText, loremText], {
    styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold;'
  }),
  new TextBlock(`${loremText} ${loremText}`, {
    styles: css({
      'background': 'linear-gradient(to left, #f2994a, #f2c94c)',
      'font-weight': 'bold',
      'padding': '1rem'
    })
  })
];
