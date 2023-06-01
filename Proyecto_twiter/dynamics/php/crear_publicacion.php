<?php
$include = include("./config.php");//añande la conexion con sql
$con = connect();//mandas a llamar la funcion de conexion
if ($include && $con)//se asegura de que la conexion este establecida
{
    $ID_Usuario =1;
    $descripcion = "desciption";
    $fecha= "01-06-2023";
    $hora= "10:00";
    $corazon=1;
    $n_comentarios=3;
    $n_retuits=5;
    //EN CASO DE PETICIONES QUE INGRESEN O MODIFIQUEN DATOS
    //$peticion = "INSERT INTO publicacion VALUES(0, 1, '$descripcion', '$fecha', '$hora', $corazon, $n_comentarios, $n_retuits)";//peticion que haras a sql
    // $query = mysqli_query($con, $peticion);//manda la peticion a la base de datos
    //var_dump($query); //si regresa boolean true, se ejecuto, si no manda false

    //EN CASO DE PETICIONES QUE TE REGRESEN TABLAS
     $sql= "SELECT ID_USUARIO, descripcion FROM publicacion";
     $query= mysqli_query($con, $sql);// manda o revive una peticion sql
    // $datos= mysqli_fetch_assoc($query);//procesa la informacion de la peticion para meterla en un arreglo y se pueda entender, solo te mandara el primer registro que este, pero si lo vuelves a poner abajo, te va a aparecer el siguiente,y asi consecuntivamente
    // //la otra maner es: mysqli_fetch_array, pero es un poco mas confusa, assoc manda las localidades asociativas, mientras que array te manda las localidades numericas y las asociativas
    // var_dump($datos);

    while ($row=mysqli_fetch_assoc($query))//asociara row con mysqli_fetch_assoc($query), es para que te mande todos los registros sin necesidad de mandar uno por uno
    {
         echo "<br>";
         echo ($row["descripcion"]);
         //var_dump($row);
    }

}
?>