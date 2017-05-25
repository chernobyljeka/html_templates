jQuery(document).ready(function() {

	function menu()
	{
		var widthLi = 220;
		jQuery(".first_tree").width(widthLi);
		var LiHtml = jQuery("#main_menu>li:first-child>ul").html();
		jQuery(".first_tree>ul").append(LiHtml);

		jQuery( ".first_tree>ul>li" ).hover(
		  function() {
		  	var html = jQuery(this).find("ul");
			  	html = jQuery(html).html();
			if (typeof html != 'undefined')
			{
				jQuery( ".second_tree ul" ).html(html);
		    	jQuery( ".second_tree" ).addClass( "visible" );
		    }
		  }, function() {
		  	 var isHovered = jQuery('.second_tree_container').is(":hover");
		  	 var isHov = jQuery(this).is(":hover");
		  	 if (!isHovered && !isHov)
		  	 {
		  	    jQuery( ".second_tree" ).removeClass( "visible" );		
		  	 }
		  }
		);

		jQuery( ".second_tree_container" ).hover(
		  function() {}, function() {
		  	    jQuery( ".second_tree" ).removeClass( "visible" );		
		  });
}

	menu();

function adptive()
{
	if (jQuery(window).width() < 1200) {
       var main_menu = jQuery("#main_menu").html();
       jQuery("#menu-left>ul").html(main_menu);
	}	
}


adptive();

jQuery(window).on("resize", function (){
	adptive();
});	

jQuery(document).scroll(function () {
            if (jQuery(this).scrollTop() > 50) {
                jQuery('#back-to-top').fadeIn();
            } else {
                jQuery('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        jQuery('#back-to-top').click(function () {
            jQuery('#back-to-top').tooltip('hide');
            jQuery('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        
    jQuery('#back-to-top').tooltip('show');

	jQuery('#main_search_submit').bind("click", function(){
		if (jQuery('#main_search_block>input').css("left") == "0px")
		{
			jQuery('#main_search_block>input').animate({
				left : "-330px",
				width : "315px"

			},500);

		}
		else
		{
			jQuery('#main_search_block>input').animate({
				left : "0px",
				width : "0px"
			},500);
		}
	});
});