function setTime() {
    const header = document.getElementById("header");
    header.textContent = new Date().toString();
  }
  setInterval(setTime, 1000);
  console.log("Program Finish");
  
// Antrian awal
 let antrian = ['ray', 'fiki', 'fadhilla', 'farah'];

 // Pembeli yang datang
 antrian.push('nabila'); // Nabila datang
 antrian.push('maza', 'elsi'); // Maza dan Elsi datang

 // Pembeli terakhir tidak jadi antri dan pulang
 // Misalkan Elsi yang pulang
 antrian.pop(); 

 // Antrian pertama sudah mendapatkan belanjaan
 // Misalkan Ray yang sudah mendapatkan belanjaan
 antrian.shift(); 

 // Antrian kedua juga sudah mendapatkan belanjaannya
 // Misalkan Fiki yang sudah mendapatkan belanjaan
 antrian.shift(); 

 // Pembeli baru yang nyerobot antrian
 antrian.unshift('tomi'); 

 // Menampilkan hasil akhir antrian di HTML
 const antrianList = document.getElementById('antrianList');
 antrian.forEach(pembeli => {
     const listItem = document.createElement('li');
     listItem.textContent = pembeli;
     antrianList.appendChild(listItem);
 });
 console.log(antrian);

function divideNumbers(num1, num2) {
    try {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error('Input harus berupa angka.');
        }

        if (num2 === 0) {
            throw new Error('Pembagi tidak boleh nol.');
        }
        const result = num1 / num2;
        return result;

    } catch (error) {
        console.error('Terjadi kesalahan:', error.message);
    }
}

console.log(divideNumbers(10, 2)); // Output: 5
console.log(divideNumbers(10, 0)); // Output: Terjadi kesalahan: Pembagi tidak boleh nol.
console.log(divideNumbers(10, 'a')); // Output: Terjadi kesalahan: Input harus berupa angka.