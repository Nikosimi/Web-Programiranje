class Macka {
    constructor(ime, boja, dob, spol) {
        this.ime = ime;
        this.boja = boja;
        this.dob = dob;
        this.spol = spol;
    }
    opis(){
        return `Ime: ${this.ime}, boja: ${this.boja}, dob: ${this.dob}, spol: ${this.spol}`;
    }

    promijeniDob(novaDob){
        this.dob = novaDob;
    }
}

//4.

const tigar = new Macka("Tigar", "narančasta", 3, "muški");
const micika = new Macka("Micika", "bijela", 1, "ženski");

const ispisMacke = document.getElementById("macke");
ispisMacke.innerHTML = tigar.opis() + "<br>";

//5.

micika.promijeniDob(2);
ispisMacke.innerHTML += `Nova dob micike: ${micika.dob}`;

//6.

document.getElementById("izmjena").textContent = "Dokument je posljednji put izmijenjen: "+document.lastModified;