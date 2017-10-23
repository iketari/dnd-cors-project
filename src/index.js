import './style.css';

const box = document.querySelector('.box');

box.addEventListener('dragover', (event) => {
    box.classList.add('is-dragover');
});

box.addEventListener('dragleave', (event) => {
    box.classList.remove('is-dragover');
});