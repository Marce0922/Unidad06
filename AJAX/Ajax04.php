<?php
    $usuario = $_POST['nick'];
    $clave = $_POST['pass'];
    if(empty($usuario) || empty($clave)){
        echo "Algo no anda bien, no fueron enviados todos los parametros";
    } else {
        echo "ok, su clave fue acceptada ".$usuario;
    }
?>