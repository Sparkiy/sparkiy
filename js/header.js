var select = document.querySelector('.subheader');
var initialPosition = $(select).offset().top
addEventListener('scroll', function (event) {
  if (window.scrollY > initialPosition) {
    select.classList.add('docked');
  } else if (select.classList.contains('docked')) {
    select.classList.remove('docked');
  }
});
