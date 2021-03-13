$(document).ready(function() {
  mouseEnter();
  mouseLeave();
});



function mouseEnter() {

  var btnDropdown = $('form.d-flex ul li.dropdown a.nav-link');
  var dropdownMenu = $('form .dropdown-menu');
  var myDropdown = $('form.d-flex .my-dropdown');
  var myFeatures  = $('form.d-flex li.my-features');
  var bothMy = $('.both-leave-enter');

 bothMy.mouseenter(function() {
    if(!($(this).hasClass('active'))){
      $(this).children('.my-dropdown').addClass('active')
    }
 });

  btnDropdown.mouseenter(function() {
    if (!($(this).hasClass('show'))) {
      $(this).addClass('show');
      $(this).attr('aria-expanded', 'false');
      $(this).next().addClass('show');
      $(this).next().attr('data-bs-propper', 'none');
    };
  });

  dropdownMenu.mouseenter(function() {
    if (!($(this).hasClass('show'))) {
      $(this).attr('aria-expanded', 'false');
      $(this).prev().addClass('show');
      $(this).prev().attr('data-bs-propper', 'none');
    };
  });

  myFeatures.mouseenter(function() {
     if(!($(this).hasClass('active'))){
       $(this).children('.my-dropdown').addClass('active')
     }
  });


  myDropdown.mouseenter(function(){
    if(!($(this).hasClass('active'))){
      myDropdown.addClass('active');
    }
  });

};




function mouseLeave() {
  var btnDropdown = $('form.d-flex ul li.dropdown a.nav-link');
  var dropdownMenu = $('form .dropdown-menu');
  var myDropdown = $('form.d-flex .my-dropdown');
  var myFeatures  = $('form.d-flex li.my-features');
  var bothMy = $('.both-leave-enter');



  btnDropdown.mouseleave(function() {
    if ($(this).hasClass('show')) {
      $(this).removeClass('show');
      $(this).attr('aria-expanded', 'false');
      $(this).next().removeClass('show');
      $(this).next().removeAttr('data-bs-propper');
    };
  });

  dropdownMenu.mouseleave(function() {
    if ($(this).hasClass('show')) {
      $(this).removeClass('show');
      $(this).attr('aria-expanded', 'false');
      $(this).prev().removeClass('show');
      $(this).prev().removeAttr('data-bs-propper');
    };
  });

  bothMy.mouseleave(function() {
     if($(this).children('.my-dropdown').hasClass('active')){
       $(this).children('.my-dropdown').removeClass('active')
     }
  });

  myFeatures.mouseleave(function() {
     if($(this).children('.my-dropdown').hasClass('active')){
       $(this).children('.my-dropdown').removeClass('active')
     }
  });

myDropdown.mouseleave(function(){
  if($(this).hasClass('active')){
    myDropdown.removeClass('active');
  }
});

};





// btnDropdown  show  aria-expanded:"true" / show scompare,  "false"
// dropdownMenu   show data-bs-propper:"none"; / tutti due scompaiano;
