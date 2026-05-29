fetch('nav.html')
  .then(response => response.text())
  .then(html => {
    const navContainer = document.getElementById('nav-container');
    navContainer.innerHTML = html;
  });

window.addEventListener('scroll', () => {
  document.body.style.backgroundPositionY = `${window.scrollY * -0.25}px`;
});
