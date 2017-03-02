// JavaScript Document
$(document).ready(function(){

var oOne=$('#pic-one>a');
var oTwo=$('#pic-two>a');
var oThree=$('#pic-three>a');
var oFour=$('#pic-four>a');
var oFive=$('#pic-five>a');
var oSix=$('#pic-six>a');
var oSlideOpen=$('.slideshow-open');
var oClose=$('.nav-close');
var oPrev=$('.nav-prev');
var oNext=$('.nav-next');
var oSection=$('section');
var aUl=$('section>ul');
var windowWidth=$(window).width()/2;
var count=0;
var countArry=[];


oOne.mousedown(function(){
   showPic(0);
   })

oTwo.mousedown(function(){
   showPic(1);
   })
   
oThree.mousedown(function(){
   showPic(2);
   })
   
oFour.mousedown(function(){
   showPic(3);
   })

oFive.mousedown(function(){
  showPic(4);
   })
 
oSix.mousedown(function(){
   showPic(5);
   })
  
oClose.mouseover(function(){
    $(this).css('cursor','pointer');
	oClose.css('background-color','#E10000');
	})

oClose.mouseout(function(){
	$(this).css('background-color','#999');
	})

oClose.mousedown(function(){
	 var oLi=$('.show>li');
	 oLi.removeClass('current');
	 oLi.eq(0).css('transform','translateX(0px)');
	 for(j=1;j<oLi.length;j++){
		oLi.eq(j).css('transform','translateX('+windowWidth+'em)');
		oLi.eq(j).css('WebkitTransform','translateX('+windowWidth+'em)')
		oLi.eq(j).css('msTransform','translateX('+windowWidth+'em)')
		oLi.eq(j).css('oTransform','translateX('+windowWidth+'em)')
	 }
    aUl.removeClass('show');
	oSection.removeClass('slideshow-open');
	count=0;
	})

oPrev.mouseover(function(){
	$(this).css('cursor','pointer');
	var oLi=$('.show>li');
	if(oLi.eq(0).hasClass('current')){
	     $(this).css('cursor','not-allowed');
	  }
	})

oNext.mouseover(function(){
	$(this).css('cursor','pointer');
	var oLi=$('.show>li');
	if(oLi.eq(oLi.length-1).hasClass('current')){
	     $(this).css('cursor','not-allowed');
	  }
	})

oPrev.mouseout(function(){
	$(this).css('cursor','default');
	})

oNext.mouseout(function(){
	$(this).css('cursor','default');
	})

oPrev.mousedown(function(){
	var oLi=$('.show>li');
	if(oLi.length>1 ){
	  count--;
	  if(count==-1){
		  count=0;
		  $(this).css('cursor','not-allowed');
	  }
	  oLi.eq(count+1).removeClass('current');
	  oLi.eq(count+1).css('transform','translateX('+windowWidth+'em)');
	  oLi.eq(count+1).css('WebkiTransform','translateX('+windowWidth+'em)');
	  oLi.eq(count+1).css('msTransform','translateX('+windowWidth+'em)');
	  oLi.eq(count+1).css('oTransform','translateX('+windowWidth+'em)');
	  oLi.eq(count).addClass('current');
	  oLi.eq(count).css('transform','translateX(0px)');
	  oLi.eq(count).css('WebkiTransform','translateX(0px)');
	  oLi.eq(count).css('msTransform','translateX(0px)');
	  oLi.eq(count).css('oTransform','translateX(0px)')
	}
	
})

oNext.mousedown(function(){
	var oLi=$('.show>li');
	if(oLi.length>1 ){
	  count++;
	  if(count==oLi.length){
		  count=oLi.length-1;
		  $(this).css('cursor','not-allowed');
	  }
	  oLi.eq(count-1).removeClass('current');
	  oLi.eq(count-1).css('transform','translateX('+-windowWidth+'em)');
	  oLi.eq(count-1).css('WebkiTransform','translateX('+-windowWidth+'em)');
	  oLi.eq(count-1).css('msTransform','translateX('+-windowWidth+'em)');
	  oLi.eq(count-1).css('oTransform','translateX('+-windowWidth+'em)');
	  oLi.eq(count).addClass('current');
	  oLi.eq(count).css('transform','translateX(0px)');	
	  oLi.eq(count).css('WebkiTransform','translateX(0px)');
	  oLi.eq(count).css('msTransform','translateX(0px)');
	  oLi.eq(count).css('oTransform','translateX(0px)')  
	}
})

var showPic=function(index){
   oSection.addClass('slideshow-open');
   var oUl=$('.slideshow-open>ul');
   oUl.eq(index).addClass('show');
   var oLi=$('.show>li');
   oLi.eq(0).addClass('current');
   for(j=1;j<oLi.length;j++){
	  oLi.eq(j).css('transform','translateX('+windowWidth+'em)');
	  oLi.eq(j).css('WebkitTransform','translateX('+windowWidth+'em)');
	  oLi.eq(j).css('msTransform','translateX('+windowWidth+'em)');
	  oLi.eq(j).css('oTransform','translateX('+windowWidth+'em)');
   }
}


})