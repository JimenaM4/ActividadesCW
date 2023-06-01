<?php
//Archivo para establecer la conexion con sql
const DBHOST = "localhost";
const DBUSER = "root";
const PASSWORD = "";
const DB = "mytwiter";
function connect(){
    $conexion= mysqli_connect(DBHOST, DBUSER, PASSWORD, DB);
    return $conexion;
};
//var_dump(connect());
?>