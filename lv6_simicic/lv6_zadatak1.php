<?php
//1.

$student = ["Niko", "Šimičić", "Stručni studij Računarstvo", 1234, "3. godina"];

//3.

$auto = [
    "Citroen" => [
        "model" => "C4",
        "obujam_motora" => 1560,
        "boja" => "siva",
        "godina_proizvodnje" => 2018,
        "gorivo" => "dizel"
    ],
    "Mercedes" => [
        "model" => "E-klasa",
        "obujam_motora" => 2999,
        "boja" => "crna",
        "godina_proizvodnje" => 2020,
        "gorivo" => "dizel"
    ]
];

//5.

function kvadrat($broj){
    return $broj * $broj;
}

//6.

class kupac{
    private $ime;
    private $prezime;

    public function postaviIme($ime){
        $this->ime = $ime;
    }
    public function postaviPrezime($prezime){
        $this->prezime = $prezime;
    }
    public function opis(){
        return "Kupac je: ". $this->ime . " " . $this->prezime;
    }
}

//7.

$kupacOPG = new Kupac();
$kupacOPG->postaviIme("Ivan");
$kupacOPG->postaviPrezime("Horvat");

$broj = 7;

?>

<!DOCTYPE html>
<html lang="hr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Zadatak 1</title>
    </head>
        <body>
            <h1>Zadatak 1</h1>
            <h2>Podaci o studentu</h2>
            <ul>
                <?php foreach($student as $podatak): ?>
                    <li>
                        <?= htmlspecialchars($podatak) ?>
                    </li>
                    <?php endforeach; ?>
            </ul>
            <h2>Citroen</h2>
            <ul>
                <?php foreach($auto["Citroen"] as $kljuc => $vrijednost): ?>
                    <li>
                        <?= htmlspecialchars($kljuc) ?>: 
                        <?= htmlspecialchars((string)$vrijednost) ?>
                    </li>
                    <?php endforeach; ?>
            </ul>
            <h2>Mercedes</h2>
            <ul>
                <li>
                    model: <?= $auto["Mercedes"]["model"] ?>
                </li>
                <li>
                    boja: <?= $auto["Mercedes"]["boja"] ?>
                </li>
                <li>
                    godina_proizvodnje: <?= $auto["Mercedes"]["godina_proizvodnje"] ?>
                </li>
                <li>
                    gorivo: <?= $auto["Mercedes"]["gorivo"] ?>
                </li>
            </ul>
            <h2>Funkcija kvadrat</h2>
            <p>
                Kvadrat broja <?= $broj ?> je <?= kvadrat($broj) ?>.
            </p>

            <h2>Klasa kupac</h2>
            <p>
                <?= htmlspecialchars($kupacOPG->opis()) ?>
            </p>
        </body>
</html>