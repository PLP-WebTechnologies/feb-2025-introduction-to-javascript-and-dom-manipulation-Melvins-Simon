const title = document.getElementById('main-title');
const text = document.getElementById('info-text');
const changeBtn = document.getElementById('change-btn');
const toggleBtn = document.getElementById('toggle-btn');
const container = document.getElementById('dynamic-container');

changeBtn.addEventListener('click', () => {
  text.textContent = 'Text has been changed!';
  text.style.color = 'blue';
  title.style.fontSize = '2.5rem';
});

toggleBtn.addEventListener('click', () => {
  const existing = document.getElementById('new-element');
  if (existing) {
    existing.remove();
  } else {
    const newEl = document.createElement('p');
    newEl.id = 'new-element';
    newEl.textContent = 'I am a new element!';
    container.appendChild(newEl);
  }
});
