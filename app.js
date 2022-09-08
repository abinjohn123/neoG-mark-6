'use strict';

const btnClick = document.getElementById('btn-translate');
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('text-output');

const URLGenerator = (text) =>
  'https://api.funtranslations.com/translate/minion.json?text=' + text;

const makeFetch = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((json) => (outputText.value = json.contents.translated))
    .catch(errorHandler);
};

const errorHandler = (error) => {
  console.log('Error: \n', error);
};

const btnClickHandler = () => {
  const input = inputText.value;
  makeFetch(URLGenerator(input));
};

btnClick.addEventListener('click', btnClickHandler);
