let currentIndex = 0;
const slides = document.querySelectorAll('#home .slide');
const thumbs = document.querySelectorAll('#home .thumbnail');

function showSlide(index) {
  slides.forEach((slide, i) => slide.style.display = (i === index) ? 'block' : 'none');
  thumbs.forEach((thumb, i) => thumb.classList.toggle('active', i === index));
  currentIndex = index;
}

function nextSlide() {
  let nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
}

setInterval(nextSlide, 5000); // 5초마다 슬라이드 변경

thumbs.forEach((thumb, i) => {
  thumb.addEventListener('click', () => showSlide(i));
});
