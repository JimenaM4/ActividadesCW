<?php
    require "config.php";
    $conexion = connect();
    if(!$conexion)
    {
        echo "No se pudo conectar con la base";
    }else{
        $nombre = (isset($_POST["nombre"]) && $_POST["nombre"] != "")? $_POST["nombre"] : false;
        $altura = (isset($_POST["altura"]) && $_POST["altura"] != "")? $_POST["altura"] : false;
        $peso = (isset($_POST["peso"]) && $_POST["peso"] != "")? $_POST["peso"] : false;
        $exp_base = (isset($_POST["exp_base"]) && $_POST["exp_base"] != "")? $_POST["exp_base"] : false;
        $tipo = (isset($_POST["tipo"]) && $_POST["tipo"] != "")? $_POST["tipo"] : false;
        $id_pokemon=(isset($_GET["id"]) && $_GET["id"]!="")? $_GET ["id"] : false;
    
       if($nombre && $altura && $peso && $exp_base)
       {
            $sql = "UPDATE pokemon set pok_name = '$nombre', pok_height ='$altura',pok_weight='$peso', 
            pok_base_experience='$exp_base' WHERE pok_id ='$id_pokemon'";
            $res = mysqli_query($conexion, $sql);
            $sql2 = "UPDATE pokemon_types SET type_id='$tipo' WHERE pok_id= '$id_pokemon'";
            $res2 = mysqli_query($conexion, $sql2);
            if(!$res || !$res2)
            {
                echo "No se pudo editar el pokémon";
                $respuesta = array("ok"=>false, "mensaje" => "No se pudo editar el pokémon");
            } else{
                $respuesta = array("ok"=>true, "mensaje" => "Pokémon editado");
            }
       }else{
            if(!$nombre)
            {
                $respuesta = array("ok"=>false, "mensaje" => "No se especificó el nombre");
            }else if ( !$altura){
                $respuesta = array("ok"=>false, "mensaje" => "No se especificó la altura");
            }else if ( !$peso){
                $respuesta = array("ok"=>false, "mensaje" => "No se especificó el peso");
            }else if ( !$exp_base){
                $respuesta = array("ok"=>false, "mensaje" => "No se especificó la experiencia base");
            }
       }
    }
    echo json_encode($respuesta)
?>                  