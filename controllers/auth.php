<? 
$login = filter_var(trim($_POST['login-log']), FILTER_SANITIZE_STRING); 
$password = filter_var(trim($_POST['password-log']), FILTER_SANITIZE_STRING); 
 
$mysql = new mysqli('localhost', 'root', '', 'registr-php-mysql'); 
 
$result1 = $mysql->query("SELECT * FROM users WHERE `login`= '$login';"); 
$user1 = $result1->fetch_assoc(); 
$mysql->close(); 

 
if(!empty($user1)) { 
    if (password_verify($password, end($user1))) {
        header('Location: /pages/inside.php'); 
    }
    else {
        header('Location: /pages/no_inside.php'); 
    }
} 
else{ 
    header('Location: /pages/no_inside.php'); 
} 
?>