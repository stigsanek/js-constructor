import { TitleBlock, TextBlock } from './blocks';

export class Sidebar {
  constructor(selector, updateCb) {
    this.element = document.getElementById(selector);
    this.update = updateCb;
  }

  init() {
    this.element.addEventListener('submit', this.addBlock.bind(this));
    this.element.innerHTML = this.template;
  }

  addBlock(evt) {
    evt.preventDefault();

    const type = event.target.name;
    const value = event.target.value.value;
    const styles = event.target.styles.value;

    const Constructor = type === 'text' ? TextBlock : TitleBlock;
    const newBlock = new Constructor(value, { styles });
    this.update(newBlock);

    event.target.value.value = '';
    event.target.styles.value = '';

  }

  get template() {
    return [
      getBlock('title'),
      getBlock('text')
    ].join('');
  }
};

function getBlock(type) {
  return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" type="text" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" type="text" name="styles" placeholder="styles">
      </div>
      <button class="btn btn-sm btn-primary" type="submit">Create</button>
    </form>
    <hr>
  `;
};
