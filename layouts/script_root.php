<?php
   $get_url = "https://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
   $arr = explode("?", $get_url, 2);
   $actual_link = $arr[0];
   if ($_SERVER["HTTP_HOST"] == "localhost") {
      define('SCRIPT_ROOT', 'http://localhost/mymagic11/');
   } else if ($_SERVER['HTTP_HOST'] == '103.145.51.69:2082') {
      define('SCRIPT_ROOT', 'https://mymagic11.in/');
   } else {
      define('SCRIPT_ROOT', 'http://143.110.244.110/mymagic11/');
   }
