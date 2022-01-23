$(document).ready(function () {
  $("#button_03").click(function () {
    $(".cp_01").hide();
  });

  $("#button_02").click(function () {
    $("#p_03").hide();
  });

  $("#button_01").click(function () {
    $("#p_01").hide(500);
  });

  $("#li_b_01").click(function () {
    $("ol li:odd").hide();
  });

  $("#li_b_02").click(function () {
    $("ol li:first").hide();
  });

  $("#li_b_04").click(function () {
    $("ol li:even").hide();
  });

  $("#li_b_03").click(function () {
    $("*li").show();
  });

  $("#button_toogle_memy").click(function () {
    $(".memy").toggle();
  });

  $("#button_04").click(function () {
    $("p").show();
  });
});


miasta
