let angka1;
let angka2;
let operator;
let hasil;

function tambah(Angka1, Angka2) {
  angka1 = Angka1;
  angka2 = Angka2;
  hasil = angka1 + angka2;
  return hasil;
}

function kurang(Angka1, Angka2) {
  angka1 = Angka1;
  angka2 = Angka2;
  hasil = angka1 - angka2;
  return hasil;
}

function kali(Angka1, Angka2) {
  angka1 = Angka1;
  angka2 = Angka2;
  hasil = angka1 * angka2;
  return hasil;
}

function bagi(Angka1, Angka2) {
  angka1 = Angka1;
  angka2 = Angka2;
  hasil = angka1 / angka2;
  return hasil;
}

angka1 = parseInt(prompt("masukan angka pertama"))

if (angka1 !== angka1) {
  alert("yang anda masukan bukan angka")
}

operator = prompt("masukan operator aritmatika \n contoh:  + - * /")

angka2 = parseInt(prompt("masukan angka kedua"))

if (angka2 !== angka2) {
  alert("yang anda masukan bukan angka")
}

switch (operator) {
  case "+":
    alert("hasilnya adalah " + tambah(angka1, angka2));
    break;
  case "-":
    alert("hasilnya adalah " + kurang(angka1, angka2));
    break;
  case "*":
    alert("hasilnya adalah " + kali(angka1, angka2));
    break;
  case "/":
    alert("hasilnya adalah " + bagi(angka1, angka2));
    break;
  default:
    alert("yang anda masukan tidak sesuai")
}