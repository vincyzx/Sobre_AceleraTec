const slides = document.querySelectorAll('.slide');
let slideAtual = 0;

document.querySelector('.next').addEventListener('click', () => {
  slides[slideAtual].classList.remove('ativo');
  slideAtual = (slideAtual + 1) % slides.length;
  slides[slideAtual].classList.add('ativo');
});

document.querySelector('.last').addEventListener('click', () => {
  slides[slideAtual].classList.remove('ativo');
  slideAtual = (slideAtual - 1 + slides.length) % slides.length;
  slides[slideAtual].classList.add('ativo');
});

  