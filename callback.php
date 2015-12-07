<?php
	include "qucikCapthca/result.php";

	if ($_SERVER['REQUEST_METHOD'] === 'POST') {
		$name         = trim($_POST['name']);
		// $phone        = trim($_POST['phone']);
		$email        = trim($_POST['email']);
		$message      = trim($_POST['message']);

		if ( ($name === '') || ($email === '') ) {
			$status = 'field_error';
			echo $status;
			return false;
		}

	 	if ($string !== $userstring){
	 		$status = 'captcha_error';
	 		echo $status;

	 		return false;
	 	} else {
	 		session_destroy();
	 	}

	 	$to = "timskiy2@yandex.ru";
	 	$subject = 'Тема';
	 	$text = "Имя: " . $name . "<br>" .
	 			"Email: " . $email . "<br>" .
	 			"Телефон: " . $phone . "<br>" .
	 			"Текст сообщения: " . $message;

		if(mail($to, $subject, $text)){
			$status = "Ваше письмо отправлено!";
			echo $status;
		} else {
			$status = "Ошибка отправки письма!";
			echo $status;
		}
	} else {
		$status = "Не удалось отправить сообщение!";
		echo $status;
	}
?>

