// Funcion SUBFOOTER
$(".boton-esconder").click(function() {
    $(".footer-ocultar").toggleClass("mostrar");
    $(".boton-esconder i").toggleClass("rotar");
    // setTimeout(function() {
    //     $('.footer-ocultar').removeClass('mostrar');
    //     $(".boton-esconder i").toggleClass("rotar");
    // }, 5000);
});
// Funcion tabs collapsables
$(".portal_tabs  a").click(function() {
    $(this).toggleClass("acordeon-activo");
    $(this).parents(".tab-pane", ".card-header").siblings().find(".acordeon-activo").removeClass("acordeon-activo")
});
// Funcion VER MAS Item collapsables
$(".collapse").on('show.bs.collapse', function() {
    $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-times");
}).on('hide.bs.collapse', function() {
    $(this).prev(".card-header").find(".fa").removeClass("fa-times").addClass("fa-plus");
});

// Funcion COMPARTIR
$(".compartir").click(function() {
    $(".redes").toggle();
});
// Funcion hover overlay
$(".dropdown").hover(function() {
    $(".overlay").css("display", "block");
}, function() {
    $(".overlay").css("display", "none");
});
$(".ingreso").hover(function() {
    $(".overlay").css("display", "block");
}, function() {
    $(".overlay").css("display", "none");
});
// Funcion checks formulario
$(".juridica").click(function() {
    $(".input-juridica").show();
});
$(".natural").click(function() {
    $(".input-juridica").hide();
});
// Funcion Collpase menu activo
(function($) {
    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');

        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
            $('.dropdown-submenu .show').removeClass("show");
        });

        return false;
    });
})(jQuery)
// Funcion check formulario
$(".own-check").click(function() {
    $(this).find("img").toggleClass("move");
});

// Funcion Mapa Sitio
$(".status").click(function() {
    $(this).find(".plus").toggleClass("minus");
    $(this).siblings("ul").toggle();
});