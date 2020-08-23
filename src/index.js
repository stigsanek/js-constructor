import './css/main.css';

import { model } from './model';
import { Sidebar } from './classes/sidebar';
import { Site } from './classes/site';

const site = new Site('site');

const updateCallback = (newBlock) => {
  model.push(newBlock);
  site.render(model);
};

const sidebar = new Sidebar('panel', updateCallback);
sidebar.init();

site.render(model);
