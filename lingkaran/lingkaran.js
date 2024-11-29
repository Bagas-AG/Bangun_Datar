// conversion

const textBox1 = document.getElementById("textBox1");
const hitung = document.getElementById("hitung");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
const phi =3.14;
let k;
let l;
let r;

function saklar(){
  if(hitung.checked){
      document.getElementById("Inputs").style.display = "block";
  } 
}

function hitungg(){
  if(hitung.checked){
    r = Number(textBox1.value);
    k = 2 * phi * r ;
    result1.textContent = "keliling nya adalah : "+ k.toFixed(3) ;
    l = phi * r * r ;
    result2.textContent = "luas nya adalah : "+ l.toFixed(3) ;
  }else{
    result1.textContent ="select the unit";
  }
}