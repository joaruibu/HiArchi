



$(document).ready(function () {


    // Animación portada.

    function animacionHome() {


        gsap.from(".animation__line", { opacity: 1, duration: 1, stagger: 0.1, delay: 0.3 });
        gsap.to(".animation__line", { duration: 1, opacity: 1, delay: 1.3, stagger: 0.1 });

        //gsap.from(".animation__line", {opacity: 0, duration:1.5, stagger: 0.1, delay: 0.5});
        // gsap.from(".animation__line",{ duration:1.5, opacity:0, delay:1, stagger:0.1 });

        gsap.to(".animation", { duration: 2, opacity: 0, delay: 2 });
        gsap.to(".animation", { duration: 2, opacity: 0, display: "none", position: "absolute", delay: 4 });
        gsap.to(".navbar", { duration: 1, opacity: 1, display: "flex", delay: 4 });
        gsap.to("main", { duration: 1, opacity: 1, display: "block", delay: 4 });

        //gsap.to(".animation",{ duration:1.5, display:"none", delay:2});
        // gsap.to(".main",{ duration:1.5, display: "block", delay:2.5})

        window.localStorage.setItem("done", true);

    }

    var done = window.localStorage.getItem("done");

    if (!done) {
        animacionHome();
    } else {
        $(".navbar").addClass("navbarReady");
        $("main").addClass("mainReady");
        $(".animation").addClass("animationNone");
    }


    
// Animación texto Joaquín Ruiz -J.

    $(window).scroll(function () {
        if ($(this).scrollTop() > 750) {
            $(".opacidad").addClass("invisible")
            setTimeout(function() {
                $(".inicial").text("JR");
            }, 1000);
        }

    });



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





// Animación Texto Ux/designer.

var tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.to(".textoPrincipal", .2, { opacity:0});
tl.to(".selectWork-text",.2, { opacity:1});



  
  
const scene = new ScrollMagic.Scene({
  triggerElement: ".portada",
  triggerHook: "onLeave",
  duration: "80%"
})  
//.setPin(".portada")
.setTween(tl)
  .addTo(controller);

function updatePercentage(){
  tl.progress();
  console.log(tl.progress());
}