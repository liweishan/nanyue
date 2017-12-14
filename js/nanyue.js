
$(function(){
//	轮播图
	var mySwiper = new Swiper ('.plan',{
		prevButton:'.goods_prev',//向上一页滚动
		nextButton:'.goods_next',//向下一页滚动
//		pagination : '.swiper-pagination',//分页（就是小圆点）
//		paginationClickable: true,
		direction: 'horizontal',  //轮播方向
		autoplay:2000,  //自动轮播
		loop: true,   //循环
		autoplayDisableOnInteraction : false,  //用户操作后不停止
		onlyExternal: true,//禁止滑动
	});
	$('.plan').hover(function(){
	    mySwiper.stopAutoplay();
	},function(){
	    mySwiper.startAutoplay();
	});
//	home_banner
	var homeSwiper = new Swiper ('.home_banner',{
		nextButton:'.home_next ',//向下一页滚动
		prevButton:'.home_prev',//向上一页滚动
		pagination : '.swiper-pagination',//分页（就是小圆点）
		paginationClickable: true,
		direction: 'horizontal',  //轮播方向
		autoplay:2000,  //自动轮播
		loop: true,   //循环
		autoplayDisableOnInteraction : false,  //用户操作后不停止
		onlyExternal: true,//禁止滑动
	});
	$('.home_banner').hover(function(){
	    homeSwiper.stopAutoplay();
	},function(){
	    homeSwiper.startAutoplay();
	});
//	图片展示
	 var swiper = new Swiper('.img_show_left', {
//      pagination: '.swiper-pagination',
        prevButton:'.img_show_prev',//向下一页滚动
		nextButton:'.img_show_next',//向上一页滚动
        paginationClickable: true,
        slidesPerView: 6,
        spaceBetween: 19,
		loop: true,   //循环
		onlyExternal: true,//禁止滑动
	});	
	
//	home_news_tab
//  选项卡切换按钮的样式以及内容的显示隐藏的代码
	function fn(){
		$('.tab_btn a').removeClass('tab_active');
		$('.tab_btn a').eq(count).addClass('tab_active');
		$('.content_model').hide().eq(count).show();
	}
	var count=0; 
	$('.tab_btn a').click(function(){
		count=$(this).index();
		fn();
	});
	//点击按钮到上一页
	$('.tab_prvi').click(function(){
		count--;
		if(count<=-1){
			count=$('.tab_btn a').length-1;
		};
		fn();
	});
	//点击按钮到下一页
	$('.tab_next').click(function(){
		count++;
		if(count>$('.tab_btn a').length-1){
			count=0;
		};
		fn();
	});
	
	//点击切换home的word_hot的上下翻页
	var count2=0;
	//上一页
	$('.page_prvs').click(function(){
		count2--;
		if(count2<=-1){
			count2=$('.word_hot').length-1;
		}
		$('.word_hot').hide().eq(count2).show();
	});
	//下一页
	$('.page_next').click(function(){
		count2++;
		if(count2>=$('.word_hot').length){
			count2=0;
		}
		$('.word_hot').hide().eq(count2).show();
	});
})
