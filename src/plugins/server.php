<?php 
$name = $_POST['input-name'];
$address = $_POST['input-adress'];
$budget = $_POST['input-budget'];
$descr = $_POST['input-descr'];



$checkbox = $_POST['dont-call'];
$checkbox = isset($checkbox) ? "no" : "yes";



$mail_message = '
<html>
<head>
<title>Заявка на заказ </title>
</head>

<body>

<h2>Заказ  </h2>
<ul>

    <li>Имя:' . $name . '</li>
    <li>Адрес:' . $address . '</li>
    
    <li>Дополнительная информация:' . $descr . '</li>
    
</ul>
</body>
</html>';



$headers = "From: Администратор сайта <	rw1zz@yandex.ru>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";
               

    $mail = mail('spureful@gmail.com', 'Заказ', $mail_message, $headers);

    $data = [];

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }


    echo json_encode($data);


?> 