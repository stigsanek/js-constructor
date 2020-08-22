import './css/main.css';

import { model } from './model';
import { templates } from './templates'

const site = document.getElementById('site');

model.forEach((block) => {
  const generate = templates[block.type];

  if (generate) {
    const html = generate(block);
    site.insertAdjacentHTML('beforeend', html);
  }
});
