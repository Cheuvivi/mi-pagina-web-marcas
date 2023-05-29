<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST['nombre'];
  $email = $_POST['email'];
  $mensaje = $_POST['mensaje'];

  // Dirección de correo electrónico a la que se enviará el formulario
  $destinatario = "22.daw.ivethanahirosero@fundacionmontessori.com";

  // Asunto del correo electrónico
  $asunto = "Mensaje enviado desde L'Hivernacle d'Horta.";

  // Cuerpo del correo electrónico
  $cuerpo = "Nombre: $nombre\n";
  $cuerpo .= "Correo electrónico: $email\n";
  $cuerpo .= "Mensaje: $mensaje\n";

  // Cabeceras del correo electrónico
  $cabeceras = "From: $nombre <$email>";

  // Enviar el correo electrónico
  if (mail($destinatario, $asunto, $cuerpo, $cabeceras)) {
    echo "El mensaje ha sido enviado correctamente.";
  } else {
    echo "Error al enviar el mensaje.";
  }
}
?>