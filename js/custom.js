$('document').ready(function(){

	// initialize Masonry layout
	var $grid = $('.grid').masonry({
	  	itemSelector: '.grid-item',
	  	columnWidth: 300
	});

	$('.grid-item-inner').click(function(e){
		e.preventDefault();

		if ($('.grid-item-inner').parent().hasClass('full')) {

			// reset all open grid-item-inners
			$('.grid-item-inner').parent().removeClass('full');
			$('.grid-item-content').fadeOut('2000', function(){
				$('.grid-item-content').css('display', 'none');
			});

			$('.grid-item-inner').css('display', 'block');

			// reinitialize Masonry layout
			$grid.masonry('reloadItems');
		};

		// opens current grid-item-content
		$(this).css('display','none');
		$(this).parent().addClass('full');
		$(this).parent().children('.grid-item-content').fadeIn('2000', function(){
			$(this).parent().children('.grid-item-content').css('display', 'block');
		});
		// $grid.prepend( $(this).parent().children('.grid-item-content') ).masonry( 'prepended', $(this).parent().children('.grid-item-content') );;

		// console.log($gridHeight);

		// reinitialize Masonry layout
		$('.grid').masonry({
		  	itemSelector: '.grid-item',
		  	columnWidth: 300
		});
	});

	$('.icon-x').click(function(){
		
		// close this grid-item-content
		$(this).parent().css('display','none');
		$(this).parent().parent().removeClass('full');

		// reset this grid-item-inner
		$(this).parent().parent().children('.grid-item-inner').css('display', 'block');

		// reinitialize Masonry layout
		$('.grid').masonry({
		  	itemSelector: '.grid-item',
		  	columnWidth: 300
		});
	});

});