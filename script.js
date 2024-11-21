// Carousel Logic
const images = [
    { src: 'images/1.jpg', caption: '"Throwback to this hilarious moment!"' },
    { src: 'images/2.jpg', caption: '"Who let this happen?"' },
    // { src: 'images/3.jpg', caption: '"Content not available"' },
  ];
  let currentImageIndex = 0;
  
  const carouselImage = document.getElementById('carousel-image');
  const carouselCaption = document.getElementById('carousel-caption');
  
  function updateCarousel() {
    carouselImage.src = images[currentImageIndex].src;
    carouselCaption.textContent = images[currentImageIndex].caption;
  }
  
  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateCarousel();
  }
  
  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateCarousel();
  }
  
  // Wish Submission
  const wishesDisplay = document.getElementById('wishes-display');
  function submitWish() {
    const wishInput = document.getElementById('wish-input');
    if (wishInput.value.trim()) {
      const newWish = document.createElement('p');
      newWish.textContent = wishInput.value;
      wishesDisplay.appendChild(newWish);
      wishInput.value = '';
    }
  }

  const music = document.getElementById('background-music');
const toggleMusicBtn = document.getElementById('toggle-music');

toggleMusicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    toggleMusicBtn.textContent = 'Pause Music';
  } else {
    music.pause();
    toggleMusicBtn.textContent = 'Play Music';
  }
});
const container = document.createElement('div');
container.style.position = 'fixed';
container.style.top = '0';
container.style.left = '0';
container.style.width = '100%';
container.style.height = '100%';
container.style.pointerEvents = 'none';
document.body.appendChild(container);

const fireworks = new Fireworks(container, {
  rocketsPoint: 50, // Percentage point where rockets launch from
  hue: {
    min: 0,
    max: 360,
  },
  delay: {
    min: 30,
    max: 60,
  },
  lineWidth: {
    explosion: {
      min: 1,
      max: 3,
    },
    trace: {
      min: 1,
      max: 2,
    },
  },
});

fireworks.start();

// Optional: Stop fireworks after a certain time
setTimeout(() => fireworks.stop(), 10000); // Stops after 10 seconds
