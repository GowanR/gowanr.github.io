var isOpenFlag = false;

$(".code-container").hide();

$(".c-container > p").css("maxWidth", "0vw");
$(".c-container > p").hide();

$(".c-container > div").click(function() {
  if(isOpenFlag) {
    $(".c-container > p").animate({maxWidth: "0vw", opacity: "0.0"}, 300, function(){
      $(".c-container > p").hide();
    });
    isOpenFlag = false;
  } else {
    $(".c-container > p").show();
    $(".c-container > p").animate({maxWidth: "15vw", opacity: "1.0"}, 300, function(){});
    isOpenFlag = true;
  }

});


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
