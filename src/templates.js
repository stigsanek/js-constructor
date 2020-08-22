import { row, col } from './utils';

function title(block) {
  const { value, options: { tag, styles } } = block;

  return row(
    col(`<${tag}>${value}</${tag}>`),
    styles
  );
};

function text(block) {
  return row(
    col(`<p>${block.value}</p>`),
    block.options.styles
  );
};

function textColumns(block) {
  const html = block.value.map((item) => col(item));

  return row(
    html.join(''),
    block.options.styles
  );
}

export const templates = {
  title,
  text,
  textColumns
};
