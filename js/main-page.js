
/////////////////////empty the main page//////////
function clear_main_page() {
  $(".hamburger").removeClass('hamburger_black');
  $('main').empty();
  $(".intro_header").css("background", "#222222");
  $(".intro_header #logo > a").html('<img src =' + "./images/tesla-icon.png" + '>');
  $(".intro_header").css({
    "color": "white"
  });
  $(".body_wrapper").css('position', 'static');
  $(".main_mobile_page_wrapper").css('display', 'none');
  $(".hidden_menu_con").removeClass('open');
};
/////////////////////////hide-show nav on scroll//////////////
    var previousScroll = 0;

  $(window).scroll(function(){
      var currentScroll = $(this).scrollTop();
        if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()){
          if (currentScroll > previousScroll && $(window).width() < 710){
          $(".intro_header").hide();
          $("footer").css({'top':'0px', "transition":"0.3s"});
        } else if(currentScroll  <  previousScroll && $(window).width() < 710){
          $(".intro_header").show()
        $('.intro_header').addClass('intro_header_visible')
          $("footer").css({'top':'60px', "transition":"0.3s"});
      }else if (currentScroll < previousScroll && $(window).width() > 710) {
        $(".intro_header").show();
        $('.intro_header').addClass('intro_header_visible');
      }else if (currentScroll > previousScroll && $(window).width() > 710) {
          $(".intro_header").hide();
          $('.intro_header').removeClass('intro_header_visible')
          }
        previousScroll = currentScroll;
    }
});
///////////////////////Toggle hidden menu////////////////////////////////
function toggle_menu() {
  $(".hidden_menu_con").toggleClass('open')

};
  $(".hamburger").click(function() {
    toggle_menu();
    $(".hamburger").toggleClass('hamburger_black');
  })

  $(document).mouseup(function(e) {
    var container = $(".hidden_menu_con");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.removeClass('open');
      $(".hamburger").removeClass('hamburger_black');
    }
  });


//////////////////loading pages into main page////////////////////
  $("#model_s").click(function() {
  ;
    clear_main_page();
    $('main').load('pages/model-s.html');
    loadScript('js/model-s.js');
    $("footer").show();
    $("footer").show();
    $('#changing_text').html('Model S');
  })
  $("#model_x").click(function() {
    clear_main_page();
      loadScript('js/model-x.js');
    $('main').load('pages/model-x.html');
    $("footer").show();
    $('#changing_text').html('Model X');
  })
  $("#model_3").click(function() {
    clear_main_page();
    $('main').load('pages/model-3.html');
    $("footer").hide();
      $('#changing_text').html('Model 3');
  })
  $("#roadster").click(function() {
    clear_main_page();

    loadScript('js/aos.js')
      $('main').load('pages/roadster.html');
          loadScript('js/roadster.js')
      $("footer").hide();
  })
  $("#energy").click(function() {
    clear_main_page();
    $('main').load('pages/energy.html');
    $("footer").hide();
  })
    $(document).on("click", '#hidden_menu_mobile_s', function(event) {
    clear_main_page();
    loadScript('js/model-s.js');
    $('main').load('pages/model-s.html');
    $("footer").show();;
    removeClass();
    $('#model_s').addClass('active_header_link');
    $('#changing_text').html('Model S');
  });
  $(document).on("click", '#hidden_menu_mobile_x', function(event) {
    clear_main_page();
    loadScript('js/model-x.js');
    $('main').load('pages/model-x.html');
    $("footer").show();
    removeClass();
    $('#model_x').addClass('active_header_link');
    $('#changing_text').html('Model X');
  });
  $(document).on("click", '#hidden_menu_mobile_3', function(event) {
    clear_main_page();
    $('main').load('pages/model-3.html');
    $("footer").hide();
    removeClass();
    $('#model_3').addClass('active_header_link');
    $('#changing_text').html('Model 3');
  });
  $(document).on("click", '#hidden_menu_mobile_r', function(event) {
    clear_main_page();
    loadScript('js/roadster.js')
    loadScript('js/aos.js')
    $('main').load('pages/roadster.html');
    $("footer").hide();

    removeClass();
    $('#roadster').addClass('active_header_link');
  });
  $(document).on("click", '#hidden_menu_mobile_e', function(event) {
    clear_main_page();
    $('main').load('pages/energy.html');
    $("footer").show();
    removeClass();
    $('#energy').addClass('active_header_link');
  });
  $('.intro_header ul> li').on('click', function() {
    $(this).addClass('active_header_link').siblings().removeClass('active_header_link');
  });
///////////////changing clicked header link color//////////
  function removeClass() {
    $('.intro_header ul> li').siblings().removeClass('active_header_link');
  }
