<?php

require 'PHPMailerAutoload.php';

if(isset($_POST) && !empty($_POST['email'])){

$mail = new PHPMailer;
$mail->CharSet = "UTF-8";
$mail->isSMTP();                       
$mail->Host = 'secure.emailsrvr.com';  
$mail->SMTPAuth = true;                
$mail->Port       = 587;   
$mail->Username = 'sender@gamol.com.mx';                            
$mail->Password = 'NnXEf6';                                                               
$mail->isHTML(true);
$plantilla="<table width='600' border='0' cellspacing='0' cellpadding='0' align='center'>
  <tr>
    <td colspan='2' height='50'><img src='http://simplificalo.mx/wp-content/themes/simplificaloTheme/img/head_simpli_email.png' width='600' height='50' alt='Simplifícalo oficial'/></td>
  </tr>
  <tr>
    <th colspan='2' align='center' bgcolor='#000000' style='color: #96fa50; padding: 10px 0px 10px 0px;'>Hano Paniagua - Cotizador</th>
  </tr>
  <tr>
    <td colspan='2' height='20'></td>
  </tr>
  <tr>
    <td width='301' style='font-weight: bold;'>Email:</td>
    <td width='299'>".$_POST['email']."</td>
  </tr>
  <tr>
  	<td height='5' colspan='2'></td>
  </tr>
  <tr>
    <td style='font-weight: bold;'>Nombre:</td>
    <td>".$_POST['nombre']."</td>
  </tr>
  <tr>
  	<td height='5' colspan='2'></td>
  </tr>
  <tr>
    <td style='font-weight: bold;'>Apellido Paterno:</td>
    <td>".$_POST['paterno']."</td>
  </tr>
  <tr>
  	<td height='5' colspan='2'></td>
  </tr>
  <tr>
    <td style='font-weight: bold;'>Apellido Materno:</td>
    <td>".$_POST['materno']."</td>
  </tr>
  <tr>
  	<td height='5' colspan='2'></td>
  </tr>
  <tr>
    <td style='font-weight: bold;'>Telefono:</td>
    <td>".$_POST['telefono']."</td>
  </tr>
  <tr>
  	<td height='5' colspan='2'></td>
  </tr>
  <tr>
    <td style='font-weight: bold;'>Estado:</td>
    <td>".$_POST['estado']."</td>
  </tr>
  <tr>
  	<td height='5' colspan='2'></td>
  </tr>
  <tr>
    <td style='font-weight: bold;'>Tipo de Cotización:</td>
    <td>".$_POST['cotiza']."</td>
  </tr>
  <tr>
  	<td height='5' colspan='2'></td>
  </tr>
  <tr>
    <td style='font-weight: bold;'>¿Cual es mi negocio?:</td>
    <td>".$_POST['negocio']."</td>
  </tr>
  <tr>
  	<td height='5' colspan='2'></td>
  </tr>
  <tr>
    <td style='font-weight: bold;'>¿Cuantos años llevo trabajando?:</td>
    <td>".$_POST['anos']." años</td>
  </tr>
  <tr>
  	<td height='5' colspan='2'></td>
  </tr>
  <tr>
    <td style='font-weight: bold;'>Tengo empleados:</td>
    <td>de ".$_POST['empleados']." empleados</td>
  </tr>
  <tr>
  	<td height='5' colspan='2'></td>
  </tr>
  <tr>
    <td style='font-weight: bold;'>¿Como recibo la mayoría de mis ingresos?:</td>
    <td>".$_POST['ingresos']."</td>
  </tr>
  <tr>
  	<td height='5' colspan='2'></td>
  </tr>
  <tr>
    <td style='font-weight: bold;'>¿Como pago la mayoría de mis gastos?:</td>
    <td>".$_POST['gastos']."</td>
  </tr>
  <tr>
  	<td height='5' colspan='2'></td>
  </tr>
  <tr>
    <td style='font-weight: bold;'>Comentario</td>
    <td>".$_POST['mensaje']."</td>
  </tr>
  <tr>
  	<td height='5' colspan='2'></td>
  </tr>
  <tr>
  	<td height='10' colspan='2'></td>
  </tr>
  <tr>
    <td colspan='2' align='center' bgcolor='#000000' style='color: #96fa50; padding: 10px 0px 10px 0px;'>Simplifícalo 2015.</td>
  </tr>
</table>";  
$msg=$plantilla;

$mail->setFrom = 'sender@gamol.com.mx';
$mail->FromName = $_POST['nombre']." ".$_POST['paterno'];
$mail->Subject = "Formulario Cotizador Hano Paniagua";
$mail->addAddress('soulness.works@gmail.com');

$mail->Body = $msg;
$mail->AltBody = $msg;
	

$resEmail	=	$mail->Send();


if($resEmail) {
	$ok	=	'ok';	
}else{
	$ok	=	$mail->ErrorInfo;
}
	echo $ok;	
}else{
	echo 'Error post vacio';
}

