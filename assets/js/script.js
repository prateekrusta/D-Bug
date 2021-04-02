$(function() {

    $('.navbar-toggle').click(function() {
        $(this).toggleClass('act');
            if($(this).hasClass('act')) {
                $('.main-menu').addClass('act');
            }
            else {
                $('.main-menu').removeClass('act');
            }
    });

    
    $(document).on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    
    $('body').scrollspy({
        target: '.site-header',
        offset: 10
    });

	
    var $section = $('.section-skills');
    function loadDaBars() {
	    $('.progress ').progressbar({
	        transition_delay: 500
	    });
    }
    
    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadDaBars();
            $(document).unbind('scroll');
        }
    });

 

	$('#infinity').data('countToOptions', {
		onComplete: function (value) {
		  count.call(this, {
		    from: value,
		    to: value + 1
		  });
		}
	});

	$('#infinity').each(count);

	function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }

 
    var s = skrollr.init({
            forceHeight: false,
            smoothScrolling: false,
            mobileDeceleration: 0.004,
            mobileCheck: function() {
    
                return false;
            }
    });
    
});





