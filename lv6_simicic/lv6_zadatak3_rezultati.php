<?php

$ime = trim($_GET["ime"] ?? "");
$prezime = trim($_GET["prezime"] ?? "");
$ispravno = $ime !== "" && $prezime !== "";

?>

<!DOCTYPE html>
<html lang="hr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Zadatak 3 - rezultat</title>
    </head>
    <body>
        <?php if ($ispravno): ?>
            <h1><?= htmlspecialchars($ime) ?>
            <?= htmlspecialchars($prezime) ?></h1>
        <?php else: ?>
            <h1>Dogodila se pogreška.</h1>
            <p>
                <a href="lv6_zadatak3_obrazac.php">Natrag na obrazac</a>
            </p>
        <?php endif; ?>
    </body>
</html>