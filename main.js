$(document).ready(function() {
  mouseEnter();
  mouseLeave();
});

function mouseEnter() {
  var enter = $('.enter');
  var myCard = $('.row');

    enter.mouseenter(function() {
      $(this).find('.row').addClass('active');
    });


}


function mouseLeave() {
  var myCard = $('.row');
  var enter = $('.enter');
  enter.mouseleave(function() {
    enter.removeClass('active');
    myCard.removeClass('active');


  });
};
