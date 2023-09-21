$(document).ready(function() {
    // console.log("validacion");

    // Formato de la fecha
    $('form input[name="date"]').datepicker({
        dateFormat: 'dd-mm-yy'
    });
    
    // Validación
    $.validate({
        lang: 'es',
        // errorMessagePosition: 'top' //muestra los errores arriba
        // scrollToTopOnError: true //muestra todos los errores
    });
});