<?php

include("/class/PHPMailer-master/src/PHPMailer.php");
include("/class/PHPMailer-master/src/SMTP.php");
include("/class/PHPMailer-master/src/Exception.php");

//filter_input ( int $type , string $variable_name [, int $filter [, mixed $options ]] ) : mixed
//$search_html = filter_input(INPUT_GET, 'search', FILTER_SANITIZE_SPECIAL_CHARS);

//filter_input — Obtem a específica variável externa pelo nome e opcionalmente a filtra
$nome_User = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_SPECIAL_CHARS);
$telefone_User = filter_input(INPUT_POST, 'telefone', FILTER_SANITIZE_SPECIAL_CHARS);
$mensagem_User = filter_input(INPUT_POST, 'mensagem', FILTER_SANITIZE_SPECIAL_CHARS);
    $mail=new \PHPMailer\PHPMailer();
    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp1.example.com;smtp2.example.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'username';                 // SMTP username
    $mail->Password = 'password';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom($emailUser);
    $mail->addAddress('douglasabnovato@gmail.com');     // Add a recipient

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Contato do site';
    $mail->Body    = "
        Nome: {nomeUser}</br>
        Email: {emailUser}</br>
        Telefone: {telefoneUser}</br>
        Mensagem: {mensagemuser}</br>
    ";
    $mail->send();
    echo 'Mensagem enviada com sucesso.';