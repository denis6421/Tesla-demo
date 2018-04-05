
  $(document).ready(function() {

  var roadsterstickyTop = $('#roadster_hidden_nav').offset().top;
      $(window).on('scroll', function() {
        if ($(window).scrollTop() >= roadsterstickyTop) {
          $('#roadster_hidden_nav').addClass('roadster_sticky')
        } else {
          $('#roadster_hidden_nav').removeClass('roadster_sticky')
        }
  });


      function scrollToAnchor(aid){
      var aTag = $(".roadster_dynamic_big_div");
      $('html,body').animate({scrollTop: aTag.offset().top},'medium');
  }

  $(".bounce").click(function() {
     scrollToAnchor();
  });

  AOS.init({
    duration: 1000,
  })

  });
