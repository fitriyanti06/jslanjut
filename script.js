// cara membuat object pada javascript
// 1.object literal
let mahasiswa1 = {
  nama: 'fitri',
  energy:10,
  makan: function (porsi) {
      this.energy =this.energy + porsi;
      console.log(`Hallo ${this.nama}, selamat makan!`);  
    }
}

let mahasiswa2 = {
  nama: 'yanti',
  energy:10,
  makan: function (porsi) {
      this.energy =this.energy + porsi;
      console.log(`Hallo ${this.nama}, selamat makan!`);  
    }
}





// 2. Function Declaration
function Mahasiswa(nama, energi) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  mahasiswa.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Hallo ${this.nama}, selamat makan!`);
  }

  mahasiswa.main = function (jam) {
    this.energi -= jam;
    console.log(`Hallo ${this.nama}, selamat bermain!`);
  }

  return mahasiswa;
}

let fitri = Mahasiswa('Sandhika', 10);
let yanti = Mahasiswa('yanti', 20);