// JavaScript Document


$(".btn-pageTop").on("click",function(){
  $("html,body").animate({scrollTop:0},1000);
  });




//ハンバーガーメニュー
$(".btn-trigger").on("touchstart",function(){
	$(this).toggleClass("active");
	$(".navi").fadeToggle(500);
})
