const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.style.top = '0';
    } else {
      header.style.top = '8rem';
    }
  });