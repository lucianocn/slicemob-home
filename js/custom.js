$(document).ready(function() {
	'use strict';
/* Fix for Internet Explorer 10 in Windows 8 and Windows Phone 8 */
	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
		var msViewportStyle = document.createElement("style")
		msViewportStyle.appendChild(
			document.createTextNode(
				"@-ms-viewport{width:auto!important}"
			)
		)
		document.getElementsByTagName("head")[0].appendChild(msViewportStyle)
	}
//intro text slider
	$('#carousel_fade_intro').carousel({
		interval: 2500,
		pause: "false"
	})
/* Make intro section height of viewport / Min height is set to 445px in style.css */
	$(function(){
		$('#intro .item').css({'height':($(window).height())+'px'});
		$(window).resize(function(){
		$('#intro .item').css({'height':($(window).height())+'px'});
		});
	});

	$.localScroll({
		offset: -60,
	});
});