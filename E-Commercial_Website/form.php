<?php
$n=$_POST['firstname'];
$c=$_POST['secondname'];
$d=$_POST['pass'];

$con=mysqli_connect("localhost","root","","ecommerce");

$sql="INSERT INTO signin(frst_name,second_name,password)values('$n','$c','$d')";

$b=mysqli_query($con,$sql);

if ($b) {
    echo "User details added Successfully";
}
else {
    echo "Not Added";
}

?>