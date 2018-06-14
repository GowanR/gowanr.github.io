$(".code-container").hide();
$(".code-button").click(function() {
  $("body").css({ backgroundColor: "#222222", color: "#ffffff"}, 500);
  $(".main-container").animate({left: '250px', opacity: '0.0'}, 300, function(){
    $(".code-container").animate({left: '0px', opacity: '1.0'}, 300);
    $(".main-container").hide();
    $(".code-container").show();
  });
});

$(".mech-icon").click(function() {
  $("body").css({ backgroundColor: "#e6e6db", color: "black"}, 500);
  $(".code-container").animate({left: '250px', opacity: '0.0'}, 300, function(){
    $(".main-container").animate({left: '0px', opacity: '1.0'}, 300);
    $(".main-container").show();
    $(".code-container").hide();
  });
});
