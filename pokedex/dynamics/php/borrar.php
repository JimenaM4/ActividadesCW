<?php
    require "config.php";
    $conexion = connect();
    if(!$conexion)
    {
        echo "No se pudo conectar con la base";
    }else{
        $id_pokemon=(isset($_GET["id"]) && $_GET["id"]!="")? $_GET ["id"] : false;
       {
            $sql1 = "DELETE FROM pokemon_types WHERE pok_id ='$id_pokemon'"; 
            $res1 = mysqli_query($conexion, $sql1);
            $sql2 = "DELETE FROM pokemon WHERE pok_id ='$id_pokemon'"; 
            $res2 = mysqli_query($conexion, $sql2);
            if(!$res1||!$res2)
            {
                echo "No se pudo borrar el pokémon";
                $respuesta = array("ok"=>false, "mensaje" => "No se pudo borrar el pokémon");
            } else{
                $respuesta = array("ok"=>true, "mensaje" => "Pokémon borrado");
            } 
        }
        }
    echo json_encode($respuesta)
?>                    