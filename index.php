<!doctype html>
<html>
<head>
	<title>Sass Template</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- BOOTSTRAP -->
	<link rel="stylesheet" href="css/bootstrap.min.css">

	<!-- BXSLIDER -->
	<link rel="stylesheet" href="css/jquery.bxslider.css">

	<!-- FONT-AWESOME -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">

	<link rel="stylesheet" href="css/style.css" >

	<!--[if lt IE 9]>
		<script src="js/libs/html5shiv.min.js"></script>
	<![endif]-->
</head>
<body>

	<!-- begin wrap  -->
	<div class="wrap container">
		<header class="header">
			<nav class="navbar navbar-default">
			  <div class="container-fluid">
			    <!-- Brand and toggle get grouped for better mobile display -->
			    <div class="navbar-header">
			      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span class="sr-only">Toggle navigation</span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			      </button>
			      <a class="navbar-brand" href="#">Brand</a>
			    </div>

			    <!-- Collect the nav links, forms, and other content for toggling -->
			    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul class="nav navbar-nav">
			        <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
			        <li><a href="#">Link</a></li>
			        <li class="dropdown">
			          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
			          <ul class="dropdown-menu">
			            <li><a href="#">Action</a></li>
			            <li><a href="#">Another action</a></li>
			            <li><a href="#">Something else here</a></li>
			            <li role="separator" class="divider"></li>
			            <li><a href="#">Separated link</a></li>
			            <li role="separator" class="divider"></li>
			            <li><a href="#">One more separated link</a></li>
			          </ul>
			        </li>
			      </ul>
			      <form class="navbar-form navbar-left" role="search">
			        <div class="form-group">
			          <input type="text" class="form-control" placeholder="Search">
			        </div>
			        <button type="submit" class="btn btn-default">Submit</button>
			      </form>
			      <ul class="nav navbar-nav navbar-right">
			        <li><a href="#" data-toggle="modal" data-target="#myModal">Callback</a></li>
			        <li class="dropdown">
			          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
			          <ul class="dropdown-menu">
			            <li><a href="#">Action</a></li>
			            <li><a href="#">Another action</a></li>
			            <li><a href="#">Something else here</a></li>
			            <li role="separator" class="divider"></li>
			            <li><a href="#">Separated link</a></li>
			          </ul>
			        </li>
			      </ul>
			    </div><!-- /.navbar-collapse -->
			  </div><!-- /.container-fluid -->
			</nav>
		</header>

	</div>
	<!-- end wrap -->

	<footer class="footer">

	</footer>

	<!-- SCRIPTS -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src='js/libs/bootstrap.min.js'></script>
	<script src='js/libs/jquery.bxslider.min.js'></script>
	<script src='js/common.js'></script>
	<!-- <script src="js/build/global.min.js"></script> -->

	<!-- Modal -->
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<i class="fa fa-times modal__close" data-dismiss="modal" aria-label="Close"></i>
					<h4 class="modal__title" id="myModalLabel">Обратный звонок</h4>
				</div>
				<form action="callback.php" method="POST" class="modal__callback">
					<div class="modal-body">
						<div class="form-group">
							<label for="modal__name" class="modal__label">Ф.И.О.<span>*</span></label>
							<input type="text" name="name" class="form-control" id="modal__name" placeholder="Ф.И.О.">
						</div>
						<div class="form-group">
							<label for="modal__email" class="modal__label">Email<span>*</span></label>
							<input type="email" name="email" class="form-control" id="modal__email" placeholder="Email">
						</div>
						<div class="form-group">
							<label for="modal__message" class="modal__label">Сообщение</label>
							<textarea class="form-control" name="message" id="modal__message" placeholder="Сообщение"></textarea>
						</div>
						<div class="form-group">
							<p class="modal__important"><span>*</span> Поля, обязательные для заполнения</p>
						</div>
						<span class="modal__error"><?=$status?></span>

						<div class="captcha">
							<p class="captcha__desc">Введите код указанный на картинке</p>
							<div class="captcha-img-container">
								<img class="captcha__img" src="qucikCapthca/imagebuilder.php" border="1">
								<a href="#" class="captcha__refresh">
									<i class="fa fa-refresh"></i>
									Перезагрузить
								</a>
							</div>
							<input class="captcha__input form-control" MAXLENGTH=8 SIZE=8 name="userstring" type="text" value="">
						</div>
					</div>
					<div class="modal-footer">
						<input class="modal__submit btn" type="submit" value="Отправить">
					</div>
				</form>
			</div>
		</div>
	</div> <!-- end modal -->

	<!-- CONFIRM -->
	<div class="modal modal-confirm fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
		<div class="modal-dialog modal-sm">
			<div class="modal-content">
				<div class="modal-body">
					<p class="modal-confirm__message">Ваше обращение отправлено.</p>
					<button class="modal-confirm__close btn" data-dismiss="modal" aria-label="Close">Ok</button>
				</div>
			</div>
		</div>
	</div>

</body>
</html>