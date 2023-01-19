export default function MainFoo(data) {
  const header = document.createElement('h1');
  header.textContent = 'Example of collapsible-widget';

  const button = document.createElement('button');
  button.classList = 'collapsible';
  button.textContent = 'Read more...';

  const content = document.createElement('div');
  content.classList = 'content';

  const parag = document.createElement('p');
  parag.textContent = data;
  content.appendChild(parag);

  [header, button, content].forEach((el) => { document.body.appendChild(el); });

  const coll = document.getElementsByClassName('collapsible');
  let i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function () {
      this.classList.toggle('active');
      const cont = this.nextElementSibling;
      if (cont.style.maxHeight) {
        cont.style.maxHeight = null;
      } else {
        cont.style.maxHeight = `${cont.scrollHeight}px`;
      }
    });
  }
}
