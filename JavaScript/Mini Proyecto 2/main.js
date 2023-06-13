const container = document.querySelector('.container');
let counter = 4;

window.addEventListener('scroll', () => {
  const { scrollHeight, clientHeight, scrollTop } = document.documentElement;

  console.log(`scrollTop + clientHeight = ${scrollTop + clientHeight} | Altura personalizada = ${scrollHeight - 3}`);
  scrollTop + clientHeight > scrollHeight - 3 && setTimeout(newContainer, 500);
});

const newContainer = () => {
  const box = document.createElement('div');
  box.className = 'box d';

  const text = document.createElement('span');
  text.textContent = `Elemento ${counter++}`;
  text.className = 'overlay-text';
  box.appendChild(text);

  container.appendChild(box);
};