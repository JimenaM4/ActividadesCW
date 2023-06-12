<?php
const DBHOST ="localhost";
const DBUSER= "root";
const DBPASS= "";
const DBNAME ="pokedex";
function connect (){
    $conexion = mysqli_connect (DBHOST,DBUSER, DBPASS, DBNAME);
    return $conexion;
}
?>