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
		if($currentValue == 0){
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


     $( ".listing-content" ).on( "click", "h3", function() {
    	$('ul').toggleClass('open-list');
    	$('h3').toggleClass('selectedListing');
    }); 

createImage();

});