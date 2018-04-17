
$(document).ready(function() {




////speed buttons controll////////

$(function() {
  var d_75 = 275;
  var d_100 = 351;
  var p_100_d = 337;

  function show_distance() {
    $("#75d").html(d_75);
    $("#100d").html(d_100);
    $("#p100d").html(p_100_d);
  }

  var temp_sum = 70;
  var speed_sum = 65;
  $("#speed_calc_val").html(speed_sum);
  $("#temp_calc_val").html(temp_sum);
  show_distance();
  $(".calc_speed_btn #speed_up").click(function() {
    speed_sum += 5;

    if (speed_sum >= 70) {
      $(".calc_speed_btn #speed_up").css('visibility', 'hidden');
    } else if (speed_sum > 45) {
      $(".calc_speed_btn #speed_down").css('visibility', 'visible');

    }
    switch (speed_sum) {
      case speed_sum = 70:
        d_75 -= 25;
        d_100 -= 32;
        p_100_d -= 30;
        break
      case speed_sum = 65:
        d_75 -= 28;
        d_100 -= 34;
        p_100_d -= 34;
        break
      case speed_sum = 60:
        d_75 -= 31;
        d_100 -= 39;
        p_100_d -= 38;
        break
      case speed_sum = 55:
        d_75 -= 33;
        d_100 -= 44;
        p_100_d -= 42;
        break
      case speed_sum = 50:
        d_75 -= 37;
        d_100 -= 46;
        p_100_d -= 45;
        break
    }
    show_distance();
    $("#speed_calc_val").html(speed_sum);

  })

  $(".calc_speed_btn #speed_down").click(function() {
    speed_sum -= 5;
    if (speed_sum <= 45) {
      $(".calc_speed_btn #speed_down").css('visibility', 'hidden');
    } else if (speed_sum < 70) {
      $(".calc_speed_btn #speed_up").css('visibility', 'visible');
    }
    switch (speed_sum) {
      case speed_sum = 65:
        d_75 += 25;
        d_100 += 32;
        p_100_d += 30;
        break
      case speed_sum = 60:
        d_75 += 28;
        d_100 += 34;
        p_100_d += 34;
        break
      case speed_sum = 55:
        d_75 += 31;
        d_100 += 39;
        p_100_d += 38;
        break
      case speed_sum = 50:
        d_75 += 33;
        d_100 += 44;
        p_100_d += 42;
        break
      case speed_sum = 45:
        d_75 += 37;
        d_100 += 46;
        p_100_d += 45;
        break
    }
    show_distance();
    $("#speed_calc_val").html(speed_sum);

  })


  /////temp nuttons controll/////////


  $(".calc_temp_btn #temp_up").click(function() {

    if (temp_sum <= 0) {
      temp_sum += 30;
    } else {
      temp_sum += 20;
    }



    if (temp_sum >= 110) {
      $(".calc_temp_btn #temp_up").css('visibility', 'hidden');
      temp_sum = 110;
    } else if (temp_sum > 0) {
      $(".calc_temp_btn #temp_down").css('visibility', 'visible');

    }

    switch (temp_sum) {
      case temp_sum = 110:
        d_75 += 10;
        d_100 += 11;
        p_100_d += 13;
        break

      case temp_sum = 90:
        d_75 += 4;
        d_100 += 6;
        p_100_d += 4;
        break
      case temp_sum = 70:
        d_75 += 8;
        d_100 += 9;
        p_100_d += 8;
        break
      case temp_sum = 50:
        d_75 += 6;
        d_100 += 8;
        p_100_d += 8;
        break
      case temp_sum = 30:
        d_75 += 12;
        d_100 += 14;
        p_100_d += 15;
        break
      case temp_sum = 0:
        d_75 += 0;
        d_100 += 0;
        p_100_d += 0;
        break

    }
    show_distance();
    $("#temp_calc_val").html(temp_sum);

  })

  $(".calc_temp_btn #temp_down").click(function() {
    if (temp_sum <= 30) {
      temp_sum -= 30;
    } else {
      temp_sum -= 20;
    }
    if (temp_sum <= 0) {
      $(".calc_temp_btn #temp_down").css('visibility', 'hidden');
      temp_sum = 0;
    } else if (temp_sum < 110) {
      $(".calc_temp_btn #temp_up").css('visibility', 'visible');
    }

    switch (temp_sum) {
      case temp_sum = 110:
        d_75 -= 10;
        d_100 -= 9;
        p_100_d -= 13;
        break

      case temp_sum = 90:
        d_75 -= 10;
        d_100 -= 11;
        p_100_d -= 13;
        break
      case temp_sum = 70:
        d_75 -= 4;
        d_100 -= 6;
        p_100_d -= 4;
        break
      case temp_sum = 50:
        d_75 -= 8;
        d_100 -= 9;
        p_100_d -= 8;
        break
      case temp_sum = 30:
        d_75 -= 6;
        d_100 -= 8;
        p_100_d -= 8;
        break
      case temp_sum = 0:
        d_75 -= 12;
        d_100 -= 14;
        p_100_d -= 15;
        break

    }
    show_distance();
    $("#temp_calc_val").html(temp_sum);



  })
  $('#temp_calc_big_button').click(function() {
    $(this).toggleClass('temp_active_btn');
    if ($('#temp_calc_big_button').hasClass('temp_active_btn')) {
      d_75 -= 18;
      d_100 -= 22;
      p_100_d -= 20;
      $(this).css('background', '#3395FF');
      $('#temp_calc_big_button  p').css('color', 'white');


    } else {
      d_75 += 18;
      d_100 += 22;
      p_100_d += 20;
      $(this).css('background', 'none');
      $('#temp_calc_big_button  p').css('color', 'gray');
    }



    show_distance();


  })

})
//////////estimator conteiner///////


$(function(){
var distance_driven = 40;

var time = 1.5;

var cost = 1.61;

var gas = 3.54;
function show_estimator(){
  $("#time_calc").html('0' + time.toFixed(2));
  $("#cost_calc").html('$'+cost.toFixed(2));
  $("#gas_calc").html('$'+gas.toFixed(2));
}
show_estimator();
$("#calc_dis_value").html(distance_driven);

$(".calc_dis_btn #dis_up").click(function(){
  distance_driven +=5;
  cost += 0.1;
  time += 0.08;
  gas += 0.44;
  if (distance_driven >= 300) {
    $(this).css('visibility', 'hidden');
    distance_driven = 300;
  } else if (distance_driven >= 0) {
    $(".calc_dis_btn #dis_down").css('visibility', 'visible');
  }
  show_estimator();

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

show_estimator();
  $("#calc_dis_value").html(distance_driven);
})
$('.model_s_estimator_functional_calc div:not(:first-child) .model_s_calc_box').on('click', function() {
  $(this).addClass('active_estimator').parents('div').siblings('div').children('.model_s_calc_box').removeClass('active_estimator');
});

var click = true;
var click2 = false;

$('.model_s_estimator_functional_calc div:nth-child(2) .model_s_calc_box').click(function(){
  $(".model_s_estimator_functional span:nth-child(2)").css('visibility','visible');
    $(".model_s_estimator_functional span:nth-child(3)").css('visibility','visible');
      $("#hidden_img ").html('<img src=' + "./images/model-s-page/estimator-s.jpg" + ' />')
if(click2 == true){
  time += 0.15;
click2 = false;
click = true;
click3 = true;
}
show_estimator();
})

$('.model_s_estimator_functional_calc div:nth-child(3) .model_s_calc_box').click(function(){
  $(".model_s_estimator_functional span:nth-child(2)").css('visibility','visible');
    $(".model_s_estimator_functional span:nth-child(3)").css('visibility','visible');
  $("#hidden_img ").html('<img src=' + "./images/model-s-page/estimator-s.jpg" + ' />')
   if (click == true) {
    time -= 0.15;
    click = false;
    click2 = true;
    click3 = true;
  }


show_estimator();
})
$('.model_s_estimator_functional_calc div:nth-child(4) .model_s_calc_box').click(function(){
  $(".model_s_estimator_functional span:nth-child(2)").css('visibility','hidden');
  $(".model_s_estimator_functional span:nth-child(3)").css('visibility','hidden');
    $("#hidden_img ").html('<img src=' + "./images/model-s-page/estimator-s-hidden.jpg" + ' />')
})
})




  $('.switch_btn_con button').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
  });
  $('.switch_btn_con button:first-child').click(function() {
    $(".model_s_switching_img div").html('<img src=' + "images/model-s-page/motor-dual.jpg" + ' />')
    
  })

  $('.switch_btn_con button:last-child').click(function() {
    $(".model_s_switching_img div").html('<img src="images/model-s-page/motor-p90d.jpg"  />')
    
  })
  $('#wheels_calc div>div').on('click', function() {
    $(this).addClass('active_calc').siblings().removeClass('active_calc');
  });
  $('.model_s_electric_con_hidden_btn button:first-child').click(function() {
    $(".model_s_switching_img div").html('<img src=' + "./images/model-s-page/motor-dual.jpg" + ' />')
     $('.switch_btn_con button:first-child').addClass('active').siblings().removeClass('active');
    
  })

  $('.model_s_electric_con_hidden_btn button:last-child').click(function() {
    $(".model_s_switching_img div").html('<img src="./images/model-s-page/motor-p90d.jpg"  />')
    $('.switch_btn_con button:last-child').addClass('active').siblings().removeClass('active');
  })
  })
  var element = document.getElementById('mySwipe'),
    prevBtn = document.getElementById('prev_s'),
    nextBtn = document.getElementById('next_s');

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
