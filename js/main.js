// JavaScript Document
$(document).ready(function(){ 
	 var prefixes = ['Webkit', 'Moz', 'ms', 'O', ''];
	 var book = $('.book')[0];
	 page = $('.front-cover')[0];
	 hold = false,
	 centerPoint = window.innerWidth / 2,
	 pageSize = 300,
	 clamp = function (val, min, max) {
		return Math.max(min, Math.min(val, max));
	};
	page.onmousedown = function () {
            hold = true;
        };

        window.onmouseup = function () {
            if (hold) {
                hold = false;
            }
        };

        window.onresize = function () {
            centerPoint = window.innerWidth / 2;
        };

        window.onmousemove = function (evt) {
            if (!hold) {
                return;
            }

            var angle = clamp((centerPoint - evt.pageX + pageSize) / pageSize * -90, -180, 0);

            for (i = 0, j = prefixes.length; i < j; i++) {
                book.style[prefixes[i] + 'Transform'] = 'rotateX(' + (60 + angle / 8) + 'deg)';
                page.style[prefixes[i] + 'Transform'] = 'rotateY(' + angle + 'deg)';
             
            }
        };
})