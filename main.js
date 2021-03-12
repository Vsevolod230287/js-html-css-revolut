$(document).ready(function() {
  var btnDropdown = $('form.d-flex ul li.dropdown a.nav-link');
  var dropdownMenu = $('form ul li ul.dropdown-menu');


  btnDropdown.mouseenter(function() {

    if (!($(this).hasClass('show'))) {
      $(this).addClass('show');
      $(this).attr('aria-expanded', 'false');
      $(this).next().addClass('show');
      $(this).next().attr('data-bs-propper', 'none');
    };

  });


  btnDropdown.mouseleave(function() {

    if ($(this).hasClass('show')) {
      $(this).removeClass('show');
      $(this).attr('aria-expanded', 'true');
      $(this).next().removeClass('show');
      $(this).next().removeAttr('data-bs-propper');
    };

  });


  // btnDropdown  show  aria-expanded:"true" / show scompare,  "false"
  // dropdownMenu   show data-bs-propper:"none"; / tutti due scompaiano;




});
