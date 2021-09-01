<?Php

    $formData = array(
        'nombre' => $_POST['nombre'],
        'apellido' => $_POST['apellido'],
        'correo' => $_POST['correo'],
        'edad' => $_POST['edad'],
        'sexo' => $_POST['sexo'],
        'direccion' => $_POST['direccion'],
        'tlf' => $_POST['tlf']
    );


    $to = "educamo@gmail.com";
    $subject = "Asunto del email";
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";    
    $message = $formData[0];
    
    mail($to, $subject, $message, $headers);

 


    $datos = 'Los Datos se guardaron correctamente';

echo json_encode($datos);
?> 