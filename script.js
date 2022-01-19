// Descrizione:
// 1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// 2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// 3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
// 4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
// 5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza,
//  un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
// BONUS:
// Usiamo il DOM per stampare e chiedere le informazioni all'utente!


const displayElement = document.getElementById("display-element");

// Prima richiesta e seconda richiesta
const student1 = {
    nome: "marco",
    cognome: "rossi",
    eta: 21
}

let message = "";

for (let key in student1) {
    message += `  ${student1[key]}`;
}

displayElement.innerHTML = message;


// Terza richiesta 
const studentList = [];

const student2 = {
    nome: "giovanni",
    cognome: "verdi",
    eta: 27
}

const student3 = {
    nome: "alessio",
    cognome: "bianchi",
    eta: 25
}

studentList.push(student1, student2, student3);
console.log(studentList);


// Quarta richiesta 


let nameSurname = "";

for (let j = 0; j < studentList.length; j++) {
    const name = studentList[j].nome;
    const surname = studentList[j].cognome;
    nameSurname += ` ${name} ${surname}`;
}

displayElement.innerHTML += `<br> ${nameSurname}`;


// Quinta richiesta BONUS
const sendBtn = document.getElementById("send");
const newDisplay = document.getElementById("new-display");


sendBtn.addEventListener('click', () => {
    const newName = document.getElementById("new-name").value;
    const newSurname = document.getElementById("new-surname").value;
    const newAge = parseInt(document.getElementById("new-age").value);

    const newStudent = {
        nome: newName,
        cognome: newSurname,
        eta: newAge
    }

    newDisplay.innerHTML = "";

    if (newName === "") {
        newDisplay.innerHTML += `<br> Non hai inserito il nome`;
    } else if (newSurname === "") {
        newDisplay.innerHTML += `<br> Non hai inserito il cognome`;
    } else if (isNaN(newAge)) {
        newDisplay.innerHTML += `<br> L'età dello studente non è valida`;
    } else {
        studentList.push(newStudent);
        console.log(studentList);
        newDisplay.innerHTML += `<br> Il nuovo studente è ${newStudent.nome} ${newStudent.cognome} ed ha ${newStudent.eta} anni.`
    }
});




