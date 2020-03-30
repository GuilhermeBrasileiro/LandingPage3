$(function(){

	var delay = 3000;
	var currentIndex = 0;
	var amount;

	initSlider();
	autoPlay();

	function initSlider(){

		amount = $('.about-right').length;
		var sizeContainer = 100 * amount;
		var sizeBoxSingle = 100 / amount;
		$('.about-right').css('width',sizeBoxSingle+'%');
		$('.scroll-wraper').css('width',sizeContainer+'%');
		
		for(var i = 0; i < amount; i++){
			if(i == 0){
				$('.slider-bullet').append('<span style="background-color: darkgrey;"></span>');
			}else{
				$('.slider-bullet').append('<span></span>');
			}
		}
	}

	function autoPlay(){
		setInterval(function(){
			currentIndex++;
			if(currentIndex == amount){
				currentIndex = 0;
			}
			goToSlider(currentIndex);
		},delay)
	}

	function goToSlider(currentIndex){
		var offSetX = $('.about-right').eq(currentIndex).offset().left - $('.scroll-wraper').offset().left;
		$('.slider-bullet span').css('background-color','rgb(220,220,220)');
		$('.slider-bullet span').eq(currentIndex).css('background-color','darkgrey');
		$('.scrollEquipe').stop().animate({'scrollLeft':offSetX});
	}

	$(window).resize(function(){
		$('.scrollEquipe').stop().animate({'scrollLeft':0});
	})

})