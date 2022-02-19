const resultBefore = document.querySelector('.before');
const resultAfter = document.querySelector('.after');
const resultArea = document.querySelector('.area');
const areaSemiPer = document.querySelector('.semi-perimeter');
const btn = document.querySelector('button');
let s = 0;
resultAfter.style.position = 'absolute';

const calculateArea = function () {
  let a = parseInt(document.getElementById('a').value);
  let b = parseInt(document.getElementById('b').value);
  let c = parseInt(document.getElementById('c').value);
  s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
};

const printResult = function () {
  resultBefore.style.display = 'none';
  resultAfter.style.position = 'static';

  resultAfter.classList.add('transition');

  resultArea.innerHTML = `Area = ${calculateArea()}`;
  areaSemiPer.innerHTML = `Semi Perimeter = ${s}`;
};

btn.addEventListener('click', calculateArea);
btn.addEventListener('click', printResult);
