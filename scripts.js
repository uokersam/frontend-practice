let tag = document.querySelector('pre');

let text = '';

let foo = {
  message: 'hello, i\'m a foo!',
};

let bar = { ...foo };

bar.message = 'hello, i\'m a bar!';

text = `bar.message: ${bar.message}<br>
foo.message: ${foo.message}
`;
tag.textContent = text;