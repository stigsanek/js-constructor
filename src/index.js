import './css/main.css';

import { model } from './model';

const site = document.getElementById('site');

model.forEach((block) => {
  const html = block.toHtml();
  site.insertAdjacentHTML('beforeend', html);
});
