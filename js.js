$('.mi_menu_btn').click(function () {
   $(this).parent().find('.mi_menu_block').addClass('open');
});
$('.btn_menu_close').click(function () {
   $(this).parent().removeClass('open');
});
$(document).mouseup(function (e) {
    var div = $(".mi_menu_block");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        div.removeClass('open');
    }
});

$(window).scroll(function(){
    if($(window).scrollTop() > 100){
        $('.mi_header').addClass('white');
    } else {
        $('.mi_header').removeClass('white');
    }
});

$('.mi_slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false
});
$(".mi_all-project").on("click", ".mi_project_tab", function() {
    var tabs = $(".mi_project_tab"),
        cont = $(".mi_project_tabcontent");
    tabs.removeClass("active");
    cont.removeClass("open");
    $(this).addClass("active");
    cont.eq($(this).index()).addClass("open");
    return false;
});
//# sourceMappingURL=js.js.map
