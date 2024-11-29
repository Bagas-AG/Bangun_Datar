const textBox1 = document.getElementById("textBox1");
const textBox2 = document.getElementById("textBox2");
const textBox3 = document.getElementById("textBox3");

const HitungKeliling = document.getElementById("HitungKeliling");
const HitungLuas = document.getElementById("HitungLuas");
const SM = document.getElementById("SM");
const result1 = document.getElementById("result1");

let a;
let d;
let s;
let Keliling;
let Luas;
let sm;

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

        Keliling = 4 * a;
        result1.textContent = "Keliling nya adalah "+Keliling;
    }else if(HitungLuas.checked){
        d = Number(textBox2.value);

        Luas =(d * d) / 2;
        result1.textContent = "Luas nya adalah "+Luas;
    }
    else if(HitungSM.checked){
        s = Number(textBox3.value);
  
        sm = Math.sqrt(Math.pow((s/2), 2) + Math.pow((s/2), 2));
      result1.textContent = "Sisi nya adalah "+sm;
    }else{
        result1.textContent = "Pilih opsi untuk menghitung";
    }

}