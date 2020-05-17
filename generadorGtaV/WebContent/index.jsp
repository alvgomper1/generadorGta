<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>    <link rel="stylesheet" type="text/css" href="css/index.css"/>
<meta charset="ISO-8859-1">
<title>Generador de cuentas</title>
</head>
<body>

<div class="contenedorFondo" ></div>

<div class="contenedorPrincipal">


<div class="textoArriba"><h1>BIENVENIDO AL GENERADOR DE CUENTAS DE GTA V ONLINE</h1></div>
<div class="generador">


 <p style="font-size: 20px; margin: 0px; padding: 0px; text-decoration:underline;" >Elige la plataforma para tu cuenta</p>
  <select class="select-css" id="plataforma" name="plataforma">
    <option value="PS4">PS4</option>
    <option value="XBOX_ONE">XBOX ONE</option>
    <option value="PS3">PS3</option>
    <option value="XBOX_360">XBOX 360</option>
  </select><br><br><button onclick="move()">Generar</button> 



<div id="myProgress">
  <div id="myBar">
    <div id="label">0%</div>

  </div><div id="mensaje"></div>
</div>

<div class="vacio"></div>



<!-- <button onclick="nuevoCodigo()">Generar</button> -->
<div id="mostrarGenerado" >Cuenta: </div>
<script type="text/javascript" src="css/generador.js" charset="UTF-8"></script>


</div>
<div class="instrucciones"><h1>Instrucciones:</h1>



<div class="columna1">
<ul><li><p>Descargar la app de la imagen pinchando <a href="enlacepagina.html">aqui</a> <img src="imagenes/1.png"></p> </li>
<li><p>Registrarte con un correo válido, ya que tendrás que confirmarlo para crear la cuenta<img src="imagenes/2.png"></p></li>
<li><p>Entras a la cuenta una vez creada y te aparecerá esta bienvenida dónde te pregunta que si tienes un código, ahi pones el código ALVA-YXF<img src="imagenes/3.png"></p></li>
<li><p>Después de introducir el código, te aparecerá este mensaje para verificar la cuenta, le damos al botón que pone verificar<img src="imagenes/4.png"></p></li>
<li><p>Introducimos aqui nuestro número móvil, ya que nos llegará un SMS con el código de verificación<img src="imagenes/5.png"></p></li>
<li><p>Una vez introducido el código que nos llegó por SMS, ya habremos terminado<img src="imagenes/6.jpeg"></p></li>
<li><p> Una vez hayamos terminado con los pasos, hacemos una captura de pantalla como aparace en la imagen de arriba y me la pasáis por Instagram con el correo y el código generados por la web </p></li>
</ul>





</div>




<p></p>







</div>

</div>







</body>
</html>