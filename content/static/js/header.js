// Subheader sticks to top of the page (if subheader is present)
var select = document.querySelector('.subheader');
if (select != undefined) {
  var initialPosition = $(select).offset().top
  addEventListener('scroll', function (event) {
    if (window.scrollY > initialPosition) {
      select.classList.add('docked');
    } else if (select.classList.contains('docked')) {
      select.classList.remove('docked');
    }
  });
}
