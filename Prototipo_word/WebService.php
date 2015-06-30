<?php
header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json");
 $todo=array();
 $i=0;
$directorio = opendir("../word/"); //ruta actual
while ($archivo = readdir($directorio)) //obtenemos un archivo y luego otro sucesivamente
{
   
             chmod($archivo, 0755);
         $pos = strpos($archivo, "ARCHIVO-0");
        $pos2 = strpos($archivo, ",v");
        $pos3 = strpos($archivo, ".lease");
    if($pos!==false&&$pos2===false&&$pos3===false){
             
          	 	$todo[]=array("Url"=>utf8_encode ("http://www.empowerlabs.com/intellibanks/data/Sandbox/AlejandroLuna/word/".$archivo), "Name"=>utf8_encode ("este es un titulo para el archvio de word"), "Description"=>utf8_encode ("Descripcion para el archvo de word"));
              
         }
    
}


echo json_encode($todo);
?>

