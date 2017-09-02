(function($){
	$.fn.jqueryDrag = function(options) {
		var isDrag = 0,
			el = $(this),
			mY = 0;
		var settings = $.extend({
			min: 0,
			max: 50000,
			applied_on : $(this),
			direction:'up'
		}, options );
		if($(this).val()=='NaN' || $(this).val()==''){
			$(this).val(0);
		}
		if(settings.direction=='up' || settings.direction=='down'){
			 settings.applied_on.css({'cursor': 'row-resize !important'});
			}
		if(settings.direction=='right' || settings.direction=='left'){
			 settings.applied_on.css({'cursor': 'row-resize !important'});
			}
		
		$(document).on('mousedown',el,function(e){
			if(settings.direction=='up' || settings.direction=='down'){
				mY = e.pageY;
				
			} else if(settings.direction=='right' || settings.direction=='left'){
				mY = e.pageX;
				console.log($(window).width());
				
			}
			isDrag=1;
			 
			pressedmoveout(isDrag,settings.min,settings.max,settings.applied_on,settings.direction);
		});
		
		function pressedmoveout(isDrag,min,max,btn_fire,type){
			$(document).on('mousemove',function(e){
				$('body').css({'cursor': 'row-resize !important'});
				if(isDrag==1){
					if(type=='up'){
						if (e.pageY < mY) {
							data=btn_fire.val();
							if(data<max){
								data=parseInt(data)+1;
								btn_fire.val(data);
							}
						} else {
							data=btn_fire.val();
							if(data>min){
								data=parseInt(data)-1;
								btn_fire.val(data);
							}
						}
					}
					else if(type=='down'){
						if (e.pageY < mY) {
							if(data>min){
								data=btn_fire.val();
								data=parseInt(data)-1;
								btn_fire.val(data);
							}
						} else {
							data=btn_fire.val();
							if(data<max){
								data=parseInt(data)+1;
								btn_fire.val(data);
							}
						}
					}
					else if(type=='left'){
						if (e.pageX < mY) {
							data=btn_fire.val();
							if(data<max){
								data=parseInt(data)+1;
								btn_fire.val(data);
							}
						} else {
							data=btn_fire.val();
							if(data>min){
								data=parseInt(data)-1;
								btn_fire.val(data);
							}
						}
					}
					else if(type=='right'){
						if (e.pageX < mY) {
							data=btn_fire.val();
							if(data>min){
								data=parseInt(data)-1;
								btn_fire.val(data);
							}
						} else {
							data=btn_fire.val();
							if(data<max){
								data=parseInt(data)+1;
								btn_fire.val(data);
							}
						}
					}
				}
				$(document).on('mouseup',function(){
					$('body').css({'cursor': ''});
					isDrag=0;
					mY = 0;
				}); 	
			});
		}
	};
}(jQuery));
