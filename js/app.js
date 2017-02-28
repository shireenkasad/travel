$(document).ready(function(){
	var $detailHolder = $('.detail-holder'),
		$detailSection = $('.section-gallery-detail'),
		$detailClose = $('.detail-close'),
		$body = $('body'),
		$currentValue,

		$galleryDetail = [
			{ src: "img/l1_1600.jpg" },
			{ src: "img/l2_1600.jpg" },
			{ src: "img/l3_1600.jpg" },
			{ src: "img/l4_1600.jpg" },
			{ src: "img/l5_1600.jpg" },
			{ src: "img/l6_1600.jpg" },
			{ src: "img/l7_1600.jpg" },
			{ src: "img/l8_1600.jpg" },
			{ src: "img/l11_1600.jpg" },
			{ src: "img/l12_1600.jpg" },
			{ src: "img/l13_1600.jpg" },
			{ src: "img/l14_1600.jpg" }
		],

		$galleryTotal = $galleryDetail.length;

	function createImage(){
		$.each($galleryDetail, function(index, element){
			var $div = $('<div />', {
				class: "detail-image",
				id: "gallery-large",
				"data-value": index
			});
			var $img = $('<img />', {
				src: $galleryDetail[index].src,
				class: "photo"
			});
			$div.append($img);
			$detailHolder.append($div);
		});
	}

	function loadNext(){
		$detailHolder.find('.detail-image[data-value="' + $currentValue + '"]').removeClass('active');
		if($currentValue == $galleryTotal - 1){
			$currentValue = 0;
		}
		else { $currentValue++; }
		$detailHolder.find('.detail-image[data-value="' + $currentValue + '"]').addClass('active');
		return $currentValue;
	}

	function loadPrevious(){
		$detailHolder.find('.detail-image[data-value="' + $currentValue + '"]').removeClass('active');
		if($currentValue === 0){
			$currentValue = $galleryTotal - 1;
		}
		else { $currentValue--; }
		$detailHolder.find('.detail-image[data-value="' + $currentValue + '"]').addClass('active');
		return $currentValue;
	}

	$('.gallery-item').click(function(event){
		event.preventDefault();
		$detailSection.removeClass('hide');
		$currentValue = $(this).find('img').attr("data-href");
		$detailHolder.find('.detail-image[data-value="' + $currentValue + '"]').addClass('active');
		$body.addClass('fixed');
	});

	$( ".detail-content" ).on( "click", ".detail-close", function() {
		$detailSection.addClass('hide');
		$detailHolder.find('.detail-image[data-value="' + $currentValue + '"]').removeClass('active');
    	$body.removeClass('fixed');
    });  

    $( ".detail-content" ).on( "click", ".forward", function() {
    	loadNext();
    }); 

    $( ".detail-content" ).on( "click", ".back", function() {
    	loadPrevious();
    }); 

     $( ".header-content" ).on( "click", ".mobile-nav-label", function() {
    	$('#mobile-open').toggleClass('activeMobile');
    }); 

	$( "#mobile-open .drop").click(function(  ) {
  		//event.preventDefault();
		$("#mobile-open.activeMobile .subnav-menu").toggleClass('open');
		$("#mobile-open.activeMobile nav .drop > a").toggleClass('selected');
	});


     $( ".page-content" ).on( "click", "h3", function() {
    	$('ul').toggleClass('open-list');
    	$('h3').toggleClass('selectedListing');
    }); 

createImage();

});
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
