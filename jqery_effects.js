$(document).ready(function () {
  $("#button_fadeIn").click(function () {
    $("#rectangle").fadeIn(0);
    $("#triangle").fadeIn("slow");
    $("#circle").fadeIn(800);
  });

  $("#button_fadeOut").click(function () {
    $("#rectangle").fadeOut(0);
    $("#triangle").fadeOut("slow");
    $("#circle").fadeOut(800);
  });

  $("#button_fadeToggle").click(function () {
    $("#rectangle").fadeToggle();
    $("#triangle").fadeToggle("slow");
    $("#circle").fadeToggle(800);
  });

  $("#button_fadeTo").click(function () {
    $("#rectangle").fadeTo(0, 0.5);
    $("#triangle").fadeTo("slow", 0.5);
    $("#circle").fadeTo(800, 0.5);
  });

  $("#button_slideToggle").click(function () {
    $("#text").slideToggle();
  });

  $("#button_slideUp").click(function () {
    $("#text").slideUp("slow",()=>{alert("Panel został zwinięty")});
  });

  $("#button_slideDown_color").click(function () {
    $("#text").slideDown().css("color" ,"blue");
  });

  $("#button_stop_slide").click(function () {
    $("#text").stop();
  });
  
  $("#button_slideDown").click(function () {
    $("#text").slideDown();
  });
  

  //animacja tu
  $("#button_animation").click(function () {
    var rect = $("#rect_red");
    
      rect.animate({ borderRadius: "50%", width: "100px", color: "white", backgroundColor: "red" }, "slow");
      rect.animate({ borderRadius: "20%", backgroundColor: "blue" }, "slow");
      rect.animate({ borderRadius: "50%", backgroundColor: "green" }, "slow");
      rect.animate({ borderRadius: "20%", width: "200px", color: "red", backgroundColor: "green" }, "slow");
      rect.animate({ borderRadius: "20%", width: "200px", backgroundColor: "yellow" }, "slow");
      rect.animate({ borderRadius: "20%", width: "200px", backgroundColor: "purple" }, "slow");
      rect.animate({borderRadius: "0%", width: "100px", color: "black", backgroundColor: "red"},0);
  });

  $("#button_stop").click(function (){
        $("#rect_red").stop(true,true);
  })

});

