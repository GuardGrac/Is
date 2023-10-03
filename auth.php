<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link href="main.css" rel="stylesheet">
    <title>Главная</title>
</head>
<body>
	<div class="section">
		<div class="container">
			<div class="row full-height justify-content-center">
				<div class="col-12 text-center align-self-center py-5">
					<div class="section pb-5 pt-5 pt-sm-2 text-center">
						<h6 class="mb-0 pb-3"><span>Авторизация</span><span>Регистрация</span></h6>
			          	<input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label for="reg-log"></label>
						<div class="card-3d-wrap mx-auto">
							<div class="card-3d-wrapper">
								<div class="card-front">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3">Авторизация</h4>

                                            <form action="controllers/auth.php" method="post">
                                                <div class="form-group">
                                                    <input type="text" name="login-log" class="form-style" placeholder="Логин" autocomplete="off">
                                                    <i class="input-icon uil uil-at"></i>
                                                </div>	
                                                <div class="form-group mt-2">
                                                    <input type="password" name="password-log" class="form-style" placeholder="Пароль" autocomplete="off">
                                                    <i class="input-icon uil uil-lock-alt"></i>
                                                </div>
                                                <input type="submit" placeholder="Авторизация" class="btn mt-4">
                                            </form>
				      					</div>
			      					</div>
			      				</div>
								<div class="card-back">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3">Регистрация</h4>

                                            <form action="controllers/registration.php" method="post">
                                                <div class="form-group">
                                                    <input type="email" name="email-reg" class="form-style" placeholder="Email" autocomplete="off">
                                                    <i class="input-icon uil uil-at"></i>
                                                </div>	

                                                <div class="form-group mt-2">
                                                    <input type="text" name="fullname-reg" class="form-style" placeholder="ФИО" autocomplete="off" pattern="[а-яА-ЯЁё]+\s[а-яА-ЯЁё]+\s[а-яА-ЯЁё]+">
                                                    <i class="input-icon uil uil-at"></i>
                                                </div>	

                                                <div class="form-group mt-2">
                                                    <input type="text" name="login-reg" class="form-style" placeholder="Логин" autocomplete="off">
                                                    <i class="input-icon uil uil-at"></i>
                                                </div>	

                                                <div class="form-group mt-2">
                                                    <input type="password" name="password-reg" class="form-style" placeholder="Пароль" autocomplete="off">
                                                    <i class="input-icon uil uil-lock-alt"></i>
                                                </div>

                                                <div class="form-group mt-2">
                                                    <input type="password" name="repassword-reg" class="form-style" placeholder="Повторите пароль" autocomplete="off">
                                                    <i class="input-icon uil uil-lock-alt"></i>
                                                </div>

                                                <input type="submit" placeholder="Регистрация" class="btn mt-4">
                                            </form>
				      					</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
</body>
</html>