const textBox1 = document.getElementById("textBox1");
const textBox2 = document.getElementById("textBox2");
const textBox3 = document.getElementById("textBox3");
const textBox4 = document.getElementById("textBox4");
const Diagonal1 = document.getElementById("Diagonal1");
const Diagonal2 = document.getElementById("Diagonal2");
const HitungKeliling = document.getElementById("HitungKeliling");
const HitungLuas = document.getElementById("HitungLuas");
const result1 = document.getElementById("result1");

let a;
let b;
let c;
let d;
let diagonal1;
let diagonal2;
let Keliling;
let Luas;

function saklar(){
    if(HitungLuas.checked){
        document.getElementById("kelilingInputs").style.display = "none";// Sembunyikan input keliling
        document.getElementById("luasInputs").style.display = "block";// Tampilkan input luas
    } else if (HitungKeliling.checked){
        document.getElementById("kelilingInputs").style.display = "block";// Tampilkan input keliling
        document.getElementById("luasInputs").style.display = "none"; // Sembunyikan input luas
    }
}

function hitungg(){
    if(HitungKeliling.checked){
        a = Number(textBox1.value);
        b = Number(textBox2.value);
        c = Number(textBox3.value);
        d = Number(textBox4.value);

        Keliling = a + b + c + d;
        result1.textContent = "Keliling nya adalah "+Keliling;
    }else if(HitungLuas.checked){
        diagonal1 = Number(Diagonal1.value);
        diagonal2 = Number(Diagonal2.value);

        Luas =(diagonal1 * diagonal2) / 2;
        result1.textContent = "Luas nya adalah "+Luas;
    }
    else{
        result1.textContent = "Pilih opsi untuk menghitung";
    }

}