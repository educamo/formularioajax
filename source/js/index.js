$(document).ready(function() {

    //valido el campo edad para que acepte solo numeros
    $("#edad").on('input', function(evt) {
        // Allow only numbers.
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });

    //valido el campo nombre para que acepte solo letras
    $("#nombre").on('input', function(evt) {
        // Allow only numbers.
        $(this).val($(this).val().replace(/[^a-zA-Z ]/, ''));
    });

    //valido el campo apellido para que acepte solo letras
    $("#apellido").on('input', function(evt) {
        // Allow only numbers.
        $(this).val($(this).val().replace(/[^a-zA-Z ]/, ''));
    });

    //evento submit del formulario para enviar los datos por mail mediante ajax
    $("#frmregistro").submit(function(event) {
        event.preventDefault();

        var formData = $(this).serialize();
        console.log(formData);

        $.ajax({
            type: $(this).attr("method"),
            url: "php/mail.php",
            data: formData,
            cache: true,
            processData: true,

            beforeSend: function() {
                $("#btnsubmit").html("Enviando...");
                $("#btnsubmit").attr("disabled", "disabled");
            },
            success: function(data) {
                $("#massage").removeClass("massageerror");
                $("#massage").removeClass("massage");
                $("#massage").addClass("massage");
                $("#massage").show();
                $("#massage").html(JSON.parse(data));
                console.log(data);
                location.reload(true);
            },
            error: function(data) {
                $("#massage").removeClass("massage");
                $("#massage").addClass("massageerror");
                $("#massage").show();
                $("#massage").html(JSON.parse(data));
                $("#btnsubmit").html("Enviar");
                $("#btnsubmit").attr("disabled", "enable");
            },
        });
        return true;
    });

});