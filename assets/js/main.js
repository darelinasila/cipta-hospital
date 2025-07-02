/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header');
  // When the scroll is greater than 50vh
  this.scrollY >= 50
    ? header.classList.add('scroll-header')
    : header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== SERVICES TABS ===============*/
const tabs = document.querySelectorAll('.services__tab');
const tabContents = document.querySelectorAll('.services__content');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    // Remove active class from all tabs and contents
    tabs.forEach((t) => t.classList.remove('active'));
    tabContents.forEach((c) => c.classList.remove('active'));

    // Add active class to clicked tab and corresponding content
    tab.classList.add('active');
    target.classList.add('active');
  });
});

/*=============== DOCTORS FILTER ===============*/
const filterButtons = document.querySelectorAll('.doctors__filter');
const doctorCards = document.querySelectorAll('.doctors__card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove('active'));

    // Add active class to clicked button
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');

    doctorCards.forEach((card) => {
      if (
        filterValue === 'all' ||
        card.getAttribute('data-filter') === filterValue
      ) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

/*=============== TESTIMONIALS SWIPER ===============*/
var swiperTestimonials = new Swiper('.testimonials__container', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

/*=============== DOCTORS SWIPER ===============*/
var swiperDoctors = new Swiper('.doctors__container', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector(
        '.nav__menu a[href*=' + sectionId + ']'
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};
window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

/*=============== ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.about__accordion-item');

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector('.about__accordion-header');

  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open');

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.about__accordion-content');

  if (item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style');
    item.classList.remove('accordion-open');
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px';
    item.classList.add('accordion-open');
  }
};

// Tab functionality
document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.services__tab');

  tabs.forEach((tab) => {
    tab.addEventListener('click', function () {
      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove('active'));

      // Add active class to clicked tab
      this.classList.add('active');

      // Hide all content
      document.querySelectorAll('.services__content').forEach((content) => {
        content.classList.remove('active');
      });

      // Show corresponding content
      const targetId = this.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');
    });
  });
});

document.querySelectorAll('.footer__link[data-target]').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = this.getAttribute('data-target');

    // Scroll to Services section
    const section = document.getElementById('services');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    // Deactivate all tabs and content
    document.querySelectorAll('.services__tab').forEach((tab) => {
      tab.classList.remove('active');
    });
    document.querySelectorAll('.services__content').forEach((content) => {
      content.classList.remove('active');
    });

    // Activate target tab and content
    const targetTab = document.querySelector(
      `.services__tab[data-target="${target}"]`
    );
    const targetContent = document.getElementById(target);
    if (targetTab) targetTab.classList.add('active');
    if (targetContent) targetContent.classList.add('active');
  });
});

/*=============== FEEDBACK POPUP ===============*/
// Enhanced Feedback Popup Functions
function showFeedbackPopup() {
  const popup = document.getElementById('feedbackPopup');
  popup.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open

  // Trigger animations
  setTimeout(() => {
    popup.style.opacity = '1';
    popup.querySelector('.feedback-popup-content').style.transform = 'scale(1)';
  }, 10);
}

function closeFeedbackPopup() {
  const popup = document.getElementById('feedbackPopup');

  // Start closing animation
  popup.style.opacity = '0';
  popup.querySelector('.feedback-popup-content').style.transform =
    'scale(0.95)';

  // Wait for animation to complete before hiding and refreshing
  setTimeout(() => {
    popup.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
    window.location.reload(); // Refresh the page after 300ms
  }, 300);
}

// Handle form submission
document
  .querySelector('.message__form')
  ?.addEventListener('submit', function (e) {
    e.preventDefault();

    // Here you would typically send the form data to the server
    // For demonstration, we'll just show the popup
    showFeedbackPopup();

    // If you want to actually submit the form after showing the popup:
    // setTimeout(() => { this.submit(); }, 2000);
  });

// Close popup when clicking outside content
document
  .getElementById('feedbackPopup')
  ?.addEventListener('click', function (e) {
    if (e.target === this) {
      closeFeedbackPopup();
    }
  });

// Close popup with Escape key
document.addEventListener('keydown', function (e) {
  if (
    e.key === 'Escape' &&
    document.getElementById('feedbackPopup').style.display === 'flex'
  ) {
    closeFeedbackPopup();
  }
});
