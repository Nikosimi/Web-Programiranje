const kolegiji = [
    'Web programiranje',
    'Programsko inženjerstvo',
    'Digitalne komunikacije',
    'Dizajn korisničkog sučelja',
    'Informacijska sigurnost',
    'Multimedijska tehnika',
    'Razvoj mobilnih aplikacija',
    'Uvod u ekonomiku i manadžment'
];
const ECTS = 5;
const rezultat = document.getElementById('rezultat');
const popis = document.getElementById('popis');

function poruka(tekst, greska=false) {
    rezultat.textContent = tekst;
    rezultat.classList.toggle('greska', greska);
    
}

function procitajImePrezime() {
    const unos = document.getElementById('ime').value.trim();
    if (unos === '') return null;

    const rijeci = unos.split(/\s+/)
    if (rijeci.length < 2) return null;

    return {
        ime: rijeci[0],
        prezime: rijeci.slice(1).join(' ')
    };
}

function procitajBroj() {
   const unos = document.getElementById('brojKolegija').value;
   if (unos === '') return null;

   const broj = Number(unos);
   if(!Number.isInteger(broj) || broj<1 || broj>8) return null;

   return broj;
}

function provjeriEmail(email) {
    const prviAt = email.indexOf('@');
    const zadnjiAt = email.lastIndexOf('@');

    if(prviAt === -1) return 'Email adresa mora sadržavati znak @.';
    if(prviAt !== zadnjiAt) return 'Email adresa smije sadržavati samo jedan znak @.';

    const prije = email.slice(0, prviAt);
    const nakon = email.slice(prviAt + 1);

    if(prije.length < 2) return 'Prije znaka @ moraju biti barem 2 znaka.';
    if(nakon.length < 2) return 'Nakon znaka @ moraju biti barem 2 znaka.';

    const zadnjaTocka = nakon.lastIndexOf('.');
    if (zadnjaTocka === -1) return 'Nakon znaka @ mora postojati točka.';
    if(nakon.slice(zadnjaTocka+1).length < 2) return 'Nakon zadnje točke moraju biti barem 2 znaka.';

    return '';
}

document.getElementById('pozdrav').addEventListener('dblclick', function(){
    const osoba = procitajImePrezime();
    if(osoba === null){
        alert('Molimo unesite ime i prezime.');
    }else{
        alert(`Dobro došli, ${osoba.ime} ${osoba.prezime}`);
    }
});

document.getElementById('pomoc').addEventListener('mouseover', function(){
    poruka('Broj kolegija mora biti između 1 i 8.')
});
document.getElementById('pomoc').addEventListener('mouseout', function(){
    poruka('');
});

document.getElementById('kolegiji').addEventListener('mouseup', function(){
    const broj = procitajBroj();
    if(broj === null){
        poruka('Broj kolegija mora biti cijeli broj između 1 i 8.', true);
        return;
    }
    let tekst = '';
    for(let i = 0; i<broj; i++){
        tekst += `Kolegij ${i+1}: ${kolegiji[i]}\n`;
    }
    popis.value = tekst.trim();
    poruka(`Ukupno ECTS bodova: ${broj*ECTS}`);
});

document.getElementById('obrisi').addEventListener('click', function(){
    if(confirm('Želite li obrisati popis kolegija')){
        popis.value = '';
        poruka('');
    }
});

document.getElementById('prijavi').addEventListener('click', function(){
    const osoba = procitajImePrezime();
    if(osoba === null){
        alert('Ime i prezime ne smije biti prazno i mora sadržavati barem dvije riječi.');
        return;
    }
    const email = document.getElementById('email').value.trim();
    const greskaEmail = provjeriEmail(email);
    if (greskaEmail !== ''){
        alert(greskaEmail);
        return;
    }

    const broj = procitajBroj();
    if(broj ===  null){
        alert('Broj kolegija mora biti cijeli broj od 1 do 8.');
        return;
    }

    if(popis.value.trim() === ''){
        alert('Popis kolegija je prazan. Kliknite na gumb Kolegiji.')
        return;
    }

    const potvrda = confirm(`Vaše ime je ${osoba.ime}, vaše prezime ${osoba.prezime}, vaša email adresa ${email}. Broj kolegija: ${broj} (${broj * ECTS} ECTS). Potvrđujete li prijavu?`);
    if (potvrda){
        document.getElementById('prijava').reset();
        poruka('Prijava je zaprimljena.');
    }else{
        poruka('Prijava je otkazana.');
    }
});
