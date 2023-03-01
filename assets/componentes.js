$('.slider-testimonials').slick({
    infinite: true,
    slidesToShow: 1,
    dots: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
    slidesToScroll: 1
});
$('.slider-products-collection').slick({
    infinite: true,
    slidesToShow: 3,
    dots: true,
    autoplay: false,
    arrows: false,
    autoplaySpeed: 5000,
    slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});
$(".email-toggle").click(function (){
  $(".content-form").slideToggle();
});
$(".select-filter select option").unwrap().each(function() {
    var value=$(this).val();
    var btn = $('<button class="btn" value="'+value+'">'+$(this).text()+'</button>');
    $(this).replaceWith(btn);
});
// Save existing sort parameters
Shopify.queryParams = {};
if(location.search.length) {
    for(var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
        aKeyValue = aCouples[i].split('=');
        if (aKeyValue.length > 1) {
            Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
        }
    }
}
// Add existing sort parameters to current URL
$(".select-filter button").click(function (e){
    var value = e.currentTarget.value;
    Shopify.queryParams.sort_by = value;
    location.search = new URLSearchParams(Shopify.queryParams).toString();
});
$(".filter-show-yakampot").click(function (){
  $(".filter-yakampot").slideToggle();
$(".filter-complete-yakampot").slideUp();
});
$(".filter-show-complete-yakampot").click(function (){
    $(".filter-yakampot").slideUp();
    $(".filter-complete-yakampot").slideToggle();
});
$('.slider-index-for-cart').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: false,
    asNavFor: '.slider-index-nav-cart'
});
$('.slider-index-nav-cart').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    asNavFor: '.slider-index-for-cart',
    dots: false,
    arrows: false,
    centerMode: false,
    vertical: true,
    focusOnSelect: true
});
    $(window).on('scroll', function() {
        yPos = window.pageYOffset;
        shift = yPos * 0.8 + 'px';
        $('.banner-video-general').css('top', shift);
    });
   // Init slick slider + animation
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800,
        lazyLoad: 'progressive',
        arrows: true,
        dots: true,
        fade: true,
        prevArrow: '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
        nextArrow: '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
    });
$('.slider').slick('slickRemove', $('.slick-slide').index(this) - 1);



    $('.slick-nav').on('click touch', function(e) {

      e.preventDefault();

      var arrow = $(this);

      if(!arrow.hasClass('animate')) {
        arrow.addClass('animate');
        setTimeout(() => {
                   arrow.removeClass('animate');
      }, 1600);
    }

                       });

/*Filter Legacy*/

function create_filter_price_bar(){
    var min=0;
    var max=0;
    $( ".grid--collection .grid-product" ).each(function() {      
      if(eval($(this).data('price'))>max) max = eval($(this).data('price'));
      if(min==0) min =  eval($(this).data('price')); else if(eval($(this).data('price'))<min) min =  eval($(this).data('price'));      
    });

    function change1(ui ){
      //console.log(ui);
                  var price1 = (Shopify.formatMoney(ui[ 0 ], theme.moneyFormat));
        var price2 = (Shopify.formatMoney(ui[ 1 ], theme.moneyFormat));
        $(".total-range span.min-price").html(price1);
        $(".total-range span.max-price").html(price2);
        
        $( ".grid--collection .grid-product" ).each(function() {
          if(eval($(this).data('price'))>= ui[0] && eval($(this).data('price'))<=ui[1]){
            $(this).fadeIn();
          }else{
            $(this).fadeOut();
          }
        });
	}
  	var slider=new Slider("#range1",{min:min,max:max,value:[min,max],range:!0,
     formatter: function(value) {
		return 'Current value: ' + value;
	}}).on('slide', change1);

    var price1 = (Shopify.formatMoney(min, theme.moneyFormat));
    var price2 = (Shopify.formatMoney(max, theme.moneyFormat));
    $(".total-range span.min-price").html(price1);
    $(".total-range span.max-price").html(price2);	  
  }
$( document ).ready(function() {
  if ($('.template-collection').length){
  	create_filter_price_bar();
  }
});
/*
$('.slider-more-article').slick({
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                dots: false,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                dots: false,
                slidesToScroll: 1
            }
        }

    ]
});*/
$(function(){
$(document).on('click','.facet-checkbox .filter-link',function(e){
  e.preventDefault();
  if ($(this).hasClass('disable_filter')){
    return false;
  }
  let _data=$(this).data();
  let _search = window.location.search;
  let filterOpt = _data.filteropt.replace(' ','%20');
  let _bPath= window.location.origin+_data.colurl;
  console.log(filterOpt);
  console.log(_search.length);
  if (_search.length){
    if (_search.indexOf(filterOpt)!= -1){
      window.location.href = _bPath+_search.replace('&'+filterOpt,'').replace(filterOpt,'');
    }else{
      window.location.href = _bPath+_search+'&'+filterOpt;
    }
  }else{
    window.location.href = _bPath+"?"+filterOpt;
  }
  
});
  if ($('.collection-filter').length){
    const _search = window.location.search;
    const origin = window.location.origin;
    const pathname = window.location.pathname;
    console.log(_search);
    if (!(_search.indexOf('filter.v.availability=1')!==-1)){
      console.log('no tengo availability');
      window.location.href = origin+pathname+(_search?_search+'&filter.v.availability=1':'?filter.v.availability=1');
    }
  }
});
