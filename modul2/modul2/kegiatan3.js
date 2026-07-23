// variabel nama dan umur
let nama ="rendi";
    let umur = 17;


//program menentukan lulus atau tidak lulus
let nilai =75;

if (nilai >= 70) {
    console.log("status: lulus");
} else {
    console.log("status: tidak lulus");
}


//buat perulangan menampilan angka 1-20
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
 
//menghitung luas persegi

function hitungluaspersegi(sisi) {
    let luas = sisi * sisi;
    return luas;
}
let hasilluas = hitungluaspersegi(s);
console.log("luas persegi:" + hasilluas);