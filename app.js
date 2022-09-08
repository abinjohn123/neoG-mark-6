'use strict';

const btnClick = document.getElementById('btn-translate');
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('text-output');

const btnClickHandler = function () {
  const input = inputText.value;
  outputText.value = input;
  input.value = '';
};

btnClick.addEventListener('click', btnClickHandler);
