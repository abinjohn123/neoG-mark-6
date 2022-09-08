'use strict';

const btnClick = document.getElementById('btn-translate');
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('text-output');

const URLGenerator = (text) =>
  'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=' + text;

const makeFetch = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then(
      (json) =>
        (outputText.value =
          json.contents.text + '\n' + json.contents.translated)
    );
};

const btnClickHandler = () => {
  const input = inputText.value;
  makeFetch(URLGenerator(input));
};

btnClick.addEventListener('click', btnClickHandler);
