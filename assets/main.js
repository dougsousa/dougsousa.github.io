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

$(document).ready(function(){
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("footer-year").innerHTML = n;
});