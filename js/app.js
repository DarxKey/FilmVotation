var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.menu-icon').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

   /*$('body').animate({
      left: "285px"
   }, 200);*/
    $('.container').animate({
      opacity: "0.5"
   }, 200);
});

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

   /* $('body').animate({
      left: "0px"
   }, 200);*/
    $('.container').animate({
      opacity: "1.0"
   }, 200);

});
};


$(document).ready(main);
