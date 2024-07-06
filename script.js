// alert("This website is responsive under all width < 440px");
document.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const totalHeight = document.body.scrollHeight - window.innerHeight;

  const scrollPercent = scrollPosition / totalHeight;

  const path = document.querySelector('#Opaque_Ring');
  const pathLength = path.getTotalLength();


  const dashArrayValue = pathLength * scrollPercent;


  path.style.strokeDasharray = `${dashArrayValue}, ${pathLength}`;
});

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.panel',);
  const colors = ['#17263c', '#4e27ce', '#0f113b', '#6211a7', '#05298d', '#01824d', '#1363e8'];

  const changeColorOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = Array.from(sections).indexOf(entry.target);
        entry.target.style.backgroundColor = colors[index];
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(section => {
    changeColorOnScroll.observe(section);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.images',);
  const colors = ['#0e131c', '#1d0363', '#151649', 'rgba(149,147,154,255)', '#000000', '#01b76a', '#21cde9'];

  const changeColorOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = Array.from(sections).indexOf(entry.target);
        entry.target.style.backgroundColor = colors[index];
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(section => {
    changeColorOnScroll.observe(section);
  });
});
document.addEventListener('scroll', () => {
  const colors = ['#17263c', '#4e27ce', '#0f113b', '#6211a7', '#05298d', '#01824d', '#1363e8'];
  const scrollPosition = window.scrollY;
  const totalHeight = document.body.scrollHeight - window.innerHeight;

  const scrollPercent = scrollPosition / totalHeight;
  const colorIndex = Math.min(Math.floor(scrollPercent * colors.length), colors.length - 1);

  const div = document.querySelector('.png');
  div.style.backgroundColor = colors[colorIndex];
});


document.addEventListener('DOMContentLoaded', () => {
  const controller = new ScrollMagic.Controller();
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach(reveal => {
    const scene = new ScrollMagic.Scene({
      triggerElement: reveal,
      triggerHook: 0.9,
      reverse: true

    })
      .setClassToggle(reveal, 'visible')
      .addTo(controller);
  });
});


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

const animateOnScrollElements = document.querySelectorAll('.animate');
animateOnScrollElements.forEach(element => {
  observer.observe(element);
});

const indicators = document.querySelectorAll('.indicator');
const carouselInner = document.querySelector('.carousel-inner');
const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');
let currentSlide = 0;

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        changeSlide(index);
    });
});

navLeft.addEventListener('click', () => {
    changeSlide(currentSlide - 1);
});

navRight.addEventListener('click', () => {
    changeSlide(currentSlide + 1);
});

function changeSlide(index) {
    if (index < 0) {
        index = indicators.length - 1;
    } else if (index >= indicators.length) {
        index = 0;
    }
    indicators[currentSlide].classList.remove('active');
    currentSlide = index;
    indicators[currentSlide].classList.add('active');
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}
