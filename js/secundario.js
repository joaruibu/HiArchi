



$(document).ready(function () {






// Hover Menú desplegable.

$(".navbar-menu").hover(
    function(){
        $(this).find(".line2").addClass("moveLine");
    }, function(){
        $(this).find(".line2").removeClass("moveLine");
    }
);






// Animación Menú desplegable.


    var menu = document.querySelector(".navbar-menu");

    $(menu).click(function () {
        event.preventDefault();
        $(".menu-open").toggleClass("mostrar");
        $(".line").toggleClass("blueColor");
        $("main").toggleClass("degradado");
    });


});




