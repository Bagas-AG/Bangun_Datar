const textBox1 = document.getElementById("textBox1");
const textBox2 = document.getElementById("textBox2");
const textBox3 = document.getElementById("textBox3");
const textBox4 = document.getElementById("textBox4");
const textBox5 = document.getElementById("textBox5");
const textBox6 = document.getElementById("textBox6");
const textBox7 = document.getElementById("textBox7");
const HitungKeliling = document.getElementById("HitungKeliling");
const HitungLuas = document.getElementById("HitungLuas");
const HitungSM = document.getElementById("HitungSM");
const result1 = document.getElementById("result1");

let a;
let t;
let m;
let SM;
let Keliling;
let Luas;

function saklar(){
    if(HitungLuas.checked){
        document.getElementById("kelilingInputs").style.display = "none";// Sembunyikan input keliling
        document.getElementById("luasInputs").style.display = "block";// Tampilkan input luas
        document.getElementById("SM").style.display = "none";
    } else if (HitungKeliling.checked){
        document.getElementById("kelilingInputs").style.display = "block";// Tampilkan input keliling
        document.getElementById("luasInputs").style.display = "none"; // Sembunyikan input luas
        document.getElementById("SM").style.display = "none";
    }else if (HitungSM.checked){
      document.getElementById("SM").style.display = "block";
      document.getElementById("kelilingInputs").style.display = "none";// Tampilkan input keliling
      document.getElementById("luasInputs").style.display = "none"; // Sembunyikan input luas
}
}
function hitungg(){
    if(HitungKeliling.checked){
        a = Number(textBox1.value);
        t = Number(textBox2.value);
        m = Number(textBox3.value);
        Keliling = a + t + m;
        result1.textContent = "Keliling nya adalah "+Keliling;
    }else if(HitungLuas.checked){
        a = Number(textBox4.value);
        t = Number(textBox5.value);
        Luas =(a*t) / 2;
        result1.textContent = "Luas nya adalah "+Luas;
    }else if(HitungSM.checked){
        a = Number(textBox6.value);
        t = Number(textBox7.value);
        SM = Math.sqrt(Math.pow(a, 2) + Math.pow(t, 2));
      result1.textContent = "Sisi miring nya adalah "+SM.toFixed(3);
    }else{
        result1.textContent = "Pilih opsi untuk menghitung";
    }

}
