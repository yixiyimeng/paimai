$(function(){
	/* 菜单 */
	$('.m-sub-topnav .menu').click(function(e) {
		e.stopPropagation();
		$('.menulist').toggle();
	});
	$(document).click(function(e) {
		var menulist = $('.menulist')
		if (!menulist.is(e.target) && menulist.has(e.target).length === 0) {
			$('.menulist').hide();
		}
	})
})