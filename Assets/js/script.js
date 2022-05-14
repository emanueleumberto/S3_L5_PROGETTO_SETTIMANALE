function numUno() {
    document.getElementById("risultato").value += 1;
}

function numDue() {

    document.getElementById('risultato').value += 2;
}

function numTre() {

    document.getElementById('risultato').value += 3;
}

function numQuattro() {

    document.getElementById('risultato').value += 4;
}

function numCinque() {

    document.getElementById('risultato').value += 5;
}

function numSei() {

    document.getElementById('risultato').value += 6;
}

function numSette() {

    document.getElementById('risultato').value += 7;
}

function numOtto() {

    document.getElementById('risultato').value += 8;
}

function numNove() {

    document.getElementById('risultato').value += 9;
}

function numZero() {

    document.getElementById('risultato').value += 0;
}

function punto() {

    document.getElementById('risultato').value += '.';
}

function cancella() {

    document.getElementById('risultato').value = ' ';
}

let op1;
function addizione(){
     num1 = +(document.getElementById('risultato').value);
    document.getElementById('risultato').value += '+';
    
}

let op2;
function sottrazione() {
    op2 = +(document.getElementById('risultato').value);
    document.getElementById('risultato').value += '-';
    
}

let op3;
function moltiplicazione() {
    op3 = +(document.getElementById('risultato').value);
    document.getElementById('risultato').value += 'x';
   
}

let op4;
function divisione() {
    op4 = +(document.getElementById('risultato').value);
    document.getElementById('risultato').value += '/';
    
}

let numFinale;
function operazione() {
    numFinale = document.getElementById('risultato').value;
    if (numFinale.includes('+')) {
        let somma = numFinale.split('+');
        risultato = +somma[0] + +somma[1]; 
        document.getElementById('risultato').value = risultato;
    } else 
    if (numFinale.includes('-')) {
        let divis = numFinale.split('-');
        risultato = +divis[0] - +divis[1]; 
        document.getElementById('risultato').value = risultato;
    } else 
    if (numFinale.includes('x')) {
        let molti = numFinale.split('x');
        risultato = +molti[0] * +molti[1]; 
        document.getElementById('risultato').value = risultato;
    }
    else 
    if (numFinale.includes('/')) {
        let diviso = numFinale.split('/');
        risultato = +diviso[0] / +diviso[1]; 
        document.getElementById('risultato').value = risultato;
    }
}