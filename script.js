// Modals
const warnModal = document.querySelector('.warning-modal-wrapper');
const warnModalClose = document.querySelector('.warning-modal-close');

warnModalClose.addEventListener('click', () => {
  warnModal.style.display = 'none';
  document.body.style.overflowY = 'auto';
  typewriter();
});


const infoModal = document.querySelector('.info-modal-wrapper');
const infoModalBtn = document.querySelector('.info-modal-button');
const infoModalClose = document.querySelector('.info-modal-close');

infoModalBtn.addEventListener('click', () => {
  infoModal.style.display = 'block';
});
infoModalClose.addEventListener('click', () => {
  infoModal.style.display = 'none';
});



// Typewriter
let typewriterText = "Discover what I have to offer.";
function typewriter() {
  const typewriterElement = document.querySelector('.typewriter');
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
const accordion = document.getElementsByClassName("faq-question");
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
const galleryWrapper = document.querySelector('.gallery-wrapper');
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryPrev = document.querySelector('.gallery-prev');
const galleryNext = document.querySelector('.gallery-next');
let currentIndex = 0;
let itemWidth = galleryItems[0].offsetWidth;
let  itemCount = galleryItems.length;
let visibleItems = Math.floor(window.innerWidth / itemWidth);

const updateGalleryPosition = function() {
    galleryWrapper.style.transform = 'translateX(' + (-currentIndex * itemWidth) + 'px)';
};

galleryPrev.addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
        updateGalleryPosition();
    }
});

galleryNext.addEventListener('click', function() {
    if (currentIndex < itemCount - visibleItems) {
        currentIndex++;
        updateGalleryPosition();
    }
});
window.addEventListener('resize', function() {
    const newVisibleItems = Math.floor(window.innerWidth / itemWidth);
    if (newVisibleItems !== visibleItems) {
        currentIndex = Math.min(currentIndex, itemCount - newVisibleItems);
        updateGalleryPosition();
    }
});



/*\
///     Emanuele Russo
\\\
///     Do not distribute
\*/
