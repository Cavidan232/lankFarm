let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  // Dövr üzrə gedən slaydlar üçün indeks tənzimlənməsi
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  // Slayderi tənzimləmək
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function changeSlide(direction) {
  showSlide(currentIndex + direction);
}

// Hər 3 saniyədən bir slayd dəyişir
setInterval(() => {
  changeSlide(1);
}, 3000);

// İlk slaydı göstər
showSlide(0);
