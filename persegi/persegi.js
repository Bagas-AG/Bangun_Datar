
// conversion
const textBox1 = document.getElementById("textBox1");
const hitung = document.getElementById("hitung");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
let k;
let l;
let s;

function saklar(){
  if(hitung.checked){
      document.getElementById("Inputs").style.display = "block";
  } 
}
function hitungg(){
  if(hitung.checked){
    s = Number(textBox1.value);
    k = (s * 4); // Membulatkan keliling hingga 3 angka di belakang koma
    result1.textContent = "Kelilingnya adalah: " + k;
    l = (s * s); // Membulatkan luas hingga 3 angka di belakang koma
    result2.textContent = "Luasnya adalah: " + l;
  } else {
    result1.textContent = "Pilih satuan";
  }
}
