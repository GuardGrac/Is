<?

$email = filter_var(trim($_POST['email-reg']), FILTER_SANITIZE_STRING);
$fullname = filter_var(trim($_POST['fullname-reg']), FILTER_SANITIZE_STRING);
$login = filter_var(trim($_POST['login-reg']), FILTER_SANITIZE_STRING);
$password = filter_var(trim($_POST['password-reg']), FILTER_SANITIZE_STRING);
$repassword = filter_var(trim($_POST['repassword-reg']), FILTER_SANITIZE_STRING);

$hash = password_hash($password, PASSWORD_BCRYPT);

$mysql = new mysqli('localhost', 'root', '', 'registr-php-mysql');

$result1 = $mysql->query("SELECT * FROM `users` WHERE `login` = '$login'");
$user1 = $result1->fetch_assoc();

if($password == $repassword && strlen($login) >= 6 && strlen($password) >= 3 && strlen($repassword) >= 3 && str_replace(' ', '', $fullname)){
    if(!empty($user1)) {
        $mysql->close();
    
        header('Location: /pages/login_used.php');
    }
    else {
        $mysql->query("INSERT INTO `users` (`email`, `fullname`, `login`, `password`) VALUES('$email', '$fullname', '$login', '$hash')");
        $mysql->close();

        header('Location: /pages/valid_registration.php');
    }
}
else {
    header('Location: /pages/novalid_date.php');
}

?>