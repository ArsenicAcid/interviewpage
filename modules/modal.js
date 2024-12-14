// Modal
let modal = document.querySelector('.modal-wrapper');
let modalBtn = document.querySelector('.modal-button');
let modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});
modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});