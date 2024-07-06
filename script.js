
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

