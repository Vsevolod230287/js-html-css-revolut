// $(document).ready(function() {
//   mouseEnter();
//   mouseLeave();
// });
//
//
//
// function mouseEnter() {
//
//   var btnDropdown = $('form.d-flex ul li.dropdown a.nav-link');
//   var dropdownMenu = $('form .dropdown-menu');
//
//   btnDropdown.mouseenter(function() {
//     if (!($(this).hasClass('show'))) {
//       $(this).addClass('show');
//       $(this).attr('aria-expanded', 'false');
//       $(this).next().addClass('show');
//       $(this).next().attr('data-bs-propper', 'none');
//     };
//   });
//
//   dropdownMenu.mouseenter(function() {
//     if (!($(this).hasClass('show'))) {
//       $(this).addClass('show');
//       $(this).attr('aria-expanded', 'false');
//       $(this).prev().addClass('show');
//       $(this).prev().attr('data-bs-propper', 'none');
//     };
//   });
//
// };
//
//
//
//
// function mouseLeave() {
//   var btnDropdown = $('form.d-flex ul li.dropdown a.nav-link');
//   var dropdownMenu = $('form .dropdown-menu');
//
//   btnDropdown.mouseleave(function() {
//     if ($(this).hasClass('show')) {
//       $(this).removeClass('show');
//       $(this).attr('aria-expanded', 'false');
//       $(this).next().removeClass('show');
//       $(this).next().removeAttr('data-bs-propper');
//     };
//   });
//
//   dropdownMenu.mouseleave(function() {
//     if ($(this).hasClass('show')) {
//       $(this).removeClass('show');
//       $(this).attr('aria-expanded', 'false');
//       $(this).prev().removeClass('show');
//       $(this).prev().removeAttr('data-bs-propper');
//     };
//   });
// };
//
//
//
// // btnDropdown  show  aria-expanded:"true" / show scompare,  "false"
// // dropdownMenu   show data-bs-propper:"none"; / tutti due scompaiano;
