// Modals
let warnModal = document.querySelector('.warning-modal-wrapper');
let warnModalClose = document.querySelector('.warning-modal-close');

warnModalClose.addEventListener('click', () => {
  warnModal.style.display = 'none';
  document.body.style.overflowY = 'auto';
  typewriter();
});


let infoModal = document.querySelector('.info-modal-wrapper');
let infoModalBtn = document.querySelector('.info-modal-button');
let infoModalClose = document.querySelector('.info-modal-close');

infoModalBtn.addEventListener('click', () => {
  infoModal.style.display = 'block';
});
infoModalClose.addEventListener('click', () => {
  infoModal.style.display = 'none';
});


// Typewriter
let typewriterText = "Discover what I have to offer.";
function typewriter() {
  let typewriterElement = document.querySelector('.typewriter');
  let i = 0;

  function type() {
    if (i < typewriterText.length) {
      typewriterElement.textContent += typewriterText[i];
      i++;
      setTimeout(type, 100);
    } 
  }
  type();
}



// FAQ
let accordion = document.getElementsByClassName("faq-question");
let i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}



// Image carousel
let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let galleryWrapper = document.querySelector('.gallery-wrapper');
let galleryItems = document.querySelectorAll('.gallery-item');
let galleryPrev = document.querySelector('.gallery-prev');
let galleryNext = document.querySelector('.gallery-next');
let galleryWidth = galleryWrapper.offsetWidth;
let itemWidth = galleryItems[0].offsetWidth;
let itemCount = galleryItems.length;
let visibleItems = vw/itemWidth;
let currentIndex = 0;

galleryPrev.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex = (currentIndex - 1 + itemCount) % itemCount;
    galleryWrapper.style.transform = `translateX(${currentIndex * -itemWidth}px)`;
  }
});
  
galleryNext.addEventListener('click', () => {
  if (currentIndex < itemCount - visibleItems) {
    currentIndex = (currentIndex + 1) % itemCount;
    galleryWrapper.style.transform = `translateX(${currentIndex * -itemWidth}px)`;
  }
});



/*\
///     Emanuele Russo
\\\
///     Do not distribute
\*/