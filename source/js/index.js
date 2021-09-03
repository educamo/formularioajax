$(document).ready(function() {

    //valido el campo edad para que acepte solo numeros
    $("#edad").on('input', function(evt) {
        // Allow only numbers.
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });

    //valido el campo nombre para que acepte solo letras
    $("#nombre").on('input', function(evt) {
        // Allow only text.
        $(this).val($(this).val().replace(/[^a-zA-Z ]/, ''));
    });

    //valido el campo apellido para que acepte solo letras
    $("#apellido").on('input', function(evt) {
        // Allow only text.
        $(this).val($(this).val().replace(/[^a-zA-Z ]/, ''));
    });

});