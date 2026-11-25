<?php

//1.
$datoteka = fopen("tekst.txt", "r");
$str_tekst = fread($datoteka, filesize("tekst.txt"));
fclose($datoteka);

//3.
$rijeci = explode(" ", $str_tekst);

//7.
$slovo = "k";
$pozicija = mb_strpos($str_tekst, $slovo);
$broj_pojavljivanja = mb_substr_count($str_tekst, $slovo);


//6.
$datoteka = fopen("rijeci.txt", "w");
fwrite($datoteka, implode(PHP_EOL, $rijeci));
fclose($datoteka);

?>

<!DOCTYPE html>
<html lang="hr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>2. Zadatak</title>
    </head>
    <body>
        <h1>Analiza datoteke tekst.txt</h1>
        <p>
            <?= htmlspecialchars($str_tekst) ?>
        </p>

        <?php if ($pozicija === false): ?>
            <p>
                Slovo <?= $slovo ?> se ne pojavljuje u tekstu.
            </p>
        <?php else: ?>
            <p>
                Prvi put se slovo <?= $slovo ?> pojavljuje na <?= $pozicija + 1 ?>. mjestu
                i ukupno se pojavljuje <?= $broj_pojavljivanja ?> puta.
            </p>
        <?php endif; ?>
    </body>
</html>