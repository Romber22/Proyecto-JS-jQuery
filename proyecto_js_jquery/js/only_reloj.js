$(document).ready(function() {
    // console.log("relojitooooo");

    // RELOJ
    // console.log(reloj);
    
    setInterval(() => {
        var reloj = moment().format("hh:mm:ss");
        $('#reloj').html(reloj);
    }, 1000);
});