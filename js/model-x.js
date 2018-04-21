$(function(){
  var distance_driven = 40;

  var time = 1.5;

  var cost = 1.61;

  var gas = 3.54;
  function show_estimator_x(){
    $("#time_calc").html('0' + time.toFixed(2));
    $("#cost_calc").html('$'+cost.toFixed(2));
    $("#gas_calc").html('$'+gas.toFixed(2));
  }
  show_estimator_x();
  $("#calc_dis_value").html(distance_driven);

  $(".calc_dis_btn #dis_up").click(function(){
    distance_driven +=5;
    cost += 0.1;
    time += 0.13;
    gas += 0.41;
    if (distance_driven >= 300) {
      $(this).css('visibility', 'hidden');
      distance_driven = 300;
    } else if (distance_driven >= 0) {
      $(".calc_dis_btn #dis_down").css('visibility', 'visible');
    }
    show_estimator_x();

    $("#calc_dis_value").html(distance_driven);
  })

  $(".calc_dis_btn #dis_down").click(function(){
    distance_driven -=5;
    cost -= 0.1;
    time -= 0.08;
    gas -= 0.44;


    if (distance_driven <= 0) {
      $('#dis_down').css('visibility', 'hidden');
        distance_driven = 0;

    } else if (distance_driven < 300) {
      $('#dis_up').css('visibility', 'visible');

    }

  show_estimator_x();
    $("#calc_dis_value").html(distance_driven);
  });
    $('.estimator_con_x .model_x_estimator_functional_calc div:not(:first-child) .model_x_calc_box').on('click', function() {
      $(this).addClass('active_estimator').parents('div').siblings('div').children('.model_x_calc_box').removeClass('active_estimator');
    });

    var click = true;
    var click2 = false;

    $('.model_x_estimator_functional_calc div:nth-child(2) .model_x_calc_box').click(function(){
      $(".model_x_estimator_functional span:nth-child(2)").css('visibility','visible');
        $(".model_x_estimator_functional span:nth-child(3)").css('visibility','visible');
          $("#hidden_img ").html('<img src=' + "./images/model-x-page/estimator-x.jpg" + ' />')
    if(click2 == true){
      time += 0.88;
    click2 = false;
    click = true;
    click3 = true;
    }
    show_estimator_x();
    })

    $('.model_x_estimator_functional_calc div:nth-child(3) .model_x_calc_box').click(function(){
      $(".model_x_estimator_functional span:nth-child(2)").css('visibility','visible');
        $(".model_x_estimator_functional span:nth-child(3)").css('visibility','visible');
      $("#hidden_img ").html('<img src=' + "./images/model-x-page/estimator-x.jpg" + ' />')
       if (click == true) {
        time -= 0.88;
        click = false;
        click2 = true;
        click3 = true;
      }


    show_estimator_x();
    })
    $('.model_x_estimator_functional_calc div:nth-child(4) .model_x_calc_box').click(function(){
      $(".model_x_estimator_functional span:nth-child(2)").css('visibility','hidden');
      $(".model_x_estimator_functional span:nth-child(3)").css('visibility','hidden');
        $("#hidden_img ").html('<img src=' + "./images/model-x-page/estimator-x-hidden.jpg" + ' />')
    })


});



var element = document.getElementById('mySwipe'),
  prevBtn = document.getElementById('prev_small'),
  nextBtn = document.getElementById('next_small');
  
window.mySwipe = new Swipe(element, {
  startSlide: 1,
  auto: 0,
  draggable: true,
  autoRestart: false,
  continuous: true,
  disableScroll: false,
  stopPropagation: true,

});
prevBtn.onclick = mySwipe.prev;
  nextBtn.onclick = mySwipe.next;


var element = document.getElementById('mySwipe1'),
  prevBtn = document.getElementById('prev1'),
  nextBtn = document.getElementById('next1');

window.mySwipe = new Swipe(element, {
  startSlide: 1,
  auto: 0,
  draggable: true,
  autoRestart: false,
  continuous: true,
  disableScroll: false,
  stopPropagation: true,

});
prevBtn.onclick = mySwipe.prev;
nextBtn.onclick = mySwipe.next;
