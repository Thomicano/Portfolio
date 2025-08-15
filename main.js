const toggle = document.getElementById('toggle');

toggle.addEventListener('change', () => {
  document.body.style.overflow = toggle.checked ? 'hidden' : '';
});

document.querySelectorAll('.menu').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    toggle.checked = false;
    document.body.style.overflow = '';
  });
});
