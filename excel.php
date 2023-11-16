<?php
$server_hostname = "localhost"; 
$database_name = "rs"; 
$username = "root";
$password = ""; 
$link_sqli = mysqli_connect($server_hostname, $username, $password, $database_name);
if (!$link_sqli) {
echo "Error: Unable to connect to MySQL." . PHP_EOL;
echo "Debugging error #: " . mysqli_connect_errno() . PHP_EOL;
echo "Error description: " . mysqli_connect_error() . PHP_EOL;
exit;
}
$TableName = "rs1"; 
$Filename = "nexport"; 
$Output = "";
$strSQL = "SELECT * FROM $TableName";
$sql = mysqli_query($link_sqli, $strSQL); 
if (mysqli_error($link_sqli)) { 
echo mysqli_error($link_sqli);
} else {
$columns_total = mysqli_num_fields($sql);
for ($i = 0; $i < $columns_total; $i++) {
  $Heading = mysqli_fetch_field_direct($sql, $i);
  $Output .= '"' . $Heading->name . '"|';
}
$Output .= "\n";		
while ($row = mysqli_fetch_array($sql)) {
  for ($i = 0; $i < $columns_total; $i++) {
	  $var='"';
          $var2="«";
	  $new_str = str_replace($var, $var2, $row);
     $Output .= '"' . $new_str["$i"] . '"|';
  }
  $Output .= "\n";
}
$TimeNow = date("YmdHis");
$Filename .= $TimeNow . ".csv";
header('Content-type: application/csv');
header('Content-Disposition: attachment; filename=' . $Filename);
header('Content-Encoding: UTF-8');
header('Content-type: text/csv; charset=UTF-8');
echo "\xEF\xBB\xBF";
echo $Output;
}
exit;
?>