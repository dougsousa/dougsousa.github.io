//internal_link
$(function() {
	$('.tonamove').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 500);
				return false;
			}
		}
	});
});

//WhatsApp
$(document).ready(function(){
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$(".WhatsAppSender").attr("href", 'whatsapp://send?phone=5548');
	} else {
		$(".WhatsAppSender").attr("href", 'https://web.whatsapp.com/send?phone=5548');
	}
});