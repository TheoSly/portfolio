<?php
// Sécurité de base
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(403);
    exit("Méthode non autorisée.");
}

// Récupération des champs
$name = htmlspecialchars(trim($_POST["name"] ?? ''));
$email = htmlspecialchars(trim($_POST["email"] ?? ''));
$message = htmlspecialchars(trim($_POST["message"] ?? ''));

// Validation simple
if (!$name || !$email || !$message || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    exit("Champs invalides.");
}

// Construction du message
$to = "contact@theo-saly.fr";
$subject = "Nouveau message du portfolio";
$headers = "From: $name <$email>" . "\r\n" .
           "Reply-To: $email" . "\r\n" .
           "Content-Type: text/plain; charset=utf-8";

$body = "Nom: $name\nEmail: $email\n\nMessage:\n$message";

// Envoi de l'email
if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo "Message envoyé.";
} else {
    http_response_code(500);
    echo "Erreur lors de l'envoi.";
}
?>