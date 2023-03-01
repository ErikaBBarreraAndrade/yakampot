$( document ).ready(function() {
    $('.content-login-link').mouseover(
        function(){
            $(".menu-hover-login").stop(true, false).animate({ height: "500px" }, "slow");

        });
    $('.content-login-link').mouseleave(
        function(){
            $(".menu-hover-login").stop(true, false).animate({ height: "0px" }, "slow");

        });
    $(".link-appointment").click(function(){
        $(".content-form").slideToggle();
    });
});
