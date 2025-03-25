const calculator = (operator, ...numbers) => {
    // validasi, harus ada minimal 2 angka
    if (numbers.length < 2) return "Masukkan minimal dua angka";
    // switch case untuk memilih operasi berdasarkan operator
    switch (operator) {
        case '+': //penjumlahan semua angka dalam array
            return numbers.reduce((acc, num) => acc + num, 0);
        case '-': //pengurangan angka pertama dengan angka berikutnya secara berurutan
            return numbers.reduce((acc, num) => acc - num);
        case '*': //mengalikan semua angka dalam array
            return numbers.reduce((acc, num) => acc * num, 1);
        case '/': // Pembagian: Membagi angka pertama dengan angka berikutnya
        // Menangani kasus pembagian dengan nol
            return numbers.reduce((acc, num) => (num !== 0 ? acc / num : "Error: Division by zero"));
        case '%': //Modulus: Hanya berlaku untuk dua angka pertama
            return numbers.reduce((acc, num) => acc % num);
        default:
            return "Operator tidak valid";
    }
};
// penggunaan dan output 
console.log(calculator('+', 10, 20, 30)); // Output: 60
console.log(calculator('-', 50, 10, 5));  // Output: 35
console.log(calculator('*', 2, 3, 4));    // Output: 24
console.log(calculator('/', 100, 5, 2));  // Output: 10
console.log(calculator('%', 10, 3));      // Output: 1