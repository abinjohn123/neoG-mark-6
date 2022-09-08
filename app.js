'use strict';

const btnClick = document.getElementById('btn-translate');
const inputText = document.getElementById('input-text');

const btnClickHandler = function () {
  const input = inputText.value;
  console.log(input);
  input.value = '';
};

btnClick.addEventListener('click', btnClickHandler);
