<?php

$json='["html","css"]';
var_dump($json); //عشاان اعرف نوع الجسون

echo '<br>';

$phpArray=json_decode($json);  //حولت الجسون اوبجكيت الى اراى عشاان اقدر اعمل لووب غليها
var_dump($phpArray);

echo '<br>';

foreach($phpArray as $arr){
    echo $arr . '<br>';
}


//عشاان اعمل العكس
$phpArray=array('html','css');
var_dump($phpArray);
echo '<br>';

$json = json_encode($phpArray);
var_dump($json);