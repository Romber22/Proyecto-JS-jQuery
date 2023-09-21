$(document).ready(function() {
    // console.log("funciona");

    // CAMBIO DE TEMA
    $('#to_green').click(function() {
        $('#css_tema').attr("href", "./css/green.css");
    });

    $('#to_blue').click(function() {
        $('#css_tema').attr("href", "./css/blue.css");
    });

    $('#to_red').click(function() {
        $('#css_tema').attr("href", "./css/red.css");
    });


    // Scroll arriba de la web
    $('.subir').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 2000);

        return false;
    });


    // Sesión con LocalStorage
    $('#login form').submit(function(e) {
        e.preventDefault();
        var form_name = $('#name').val();
        if(form_name != null || form_name != 'undefined') {
            localStorage.setItem('form_name', form_name); //guardo el nombre en localStorage
            $('#about span').html('Bienvenid@, '+localStorage.getItem('form_name')); //cambio el span de ¿Quién soy?
            $('#login').hide(); //Oculto el formulario de login

            $('#about').append('<a href="#" id="logout">Cerrar sesión</a>');
        
            // Cerrar sesión
            $('#logout').click(function(e) {
                localStorage.clear();
                location.reload(); //Recarga la página
            });
        }
        return false;
    });

});