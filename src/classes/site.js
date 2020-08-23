export class Site {
  constructor(selector) {
    this.element = document.getElementById(selector);
  }

  render(model) {
    this.element.innerHTML = '';

    model.forEach((block) => {
      const html = block.toHtml();
      this.element.insertAdjacentHTML('beforeend', html);
    });
  }
};
