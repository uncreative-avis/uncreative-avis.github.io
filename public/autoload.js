fetch('nav.html')
  .then(response => response.text())
  .then(html => {
    const navContainer = document.getElementById('nav-container');
    navContainer.innerHTML = html;
  }
);

// https://natclark.com/tutorials/javascript-reduced-motion/
const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
  
window.addEventListener('scroll', () => {
  if (!isReduced) {
    document.body.style.backgroundPositionY = `${window.scrollY * -0.25}px`;
  }
});

function getDateShit() {
  const modifiedDate = new Date(document.lastModified);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  document.getElementById('lastUpdateDate').textContent = modifiedDate.toLocaleDateString('en-GB', options);
};

getDateShit();
