<?php
print 'Hello World';
$airline_name = "AIXdemo";
$zip = "private://bundles/AIXdemo-22-09-23-135656.zip";
shell_exec("./2bash-practice2.sh", "$airline_name", "$zip");
