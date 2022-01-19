
const btnQuote = document.querySelector('.get-random-quote');

const setQuote = async () => {
  
  const classQuote =  document.querySelector('.quote');
  const data = await fetchQuote();
  const h3 = createCustomElement('h3', '', data.sentence);
  const p = createCustomElement('p', '', data.character.name);

  classQuote.innerText = '';
  classQuote.appendChild(h3);
  classQuote.appendChild(p);
}

btnQuote.addEventListener('click', setQuote);

function createCharacterImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'char__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ title, fullName, imageUrl }) {
  const section = document.createElement('section');
  section.className = 'char';

  section.appendChild(createCustomElement('span', 'char__name', fullName));
  section.appendChild(createCustomElement('span', 'char__title', title));
  section.appendChild(createCharacterImageElement(imageUrl));

  return section;
}

const setPerson = async () => {
  const characters = document.querySelector('.characters');
  const data = await fetchCharacters();
  data.forEach((person) => {
    characters.appendChild(createProductItemElement(person));
  });
}

window.onload = () => {
  setQuote();
  setPerson();
  };