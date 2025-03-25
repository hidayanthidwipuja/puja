// Fungsi untuk mencetak deret Fibonacci
function fibonacci(n) {
    // Jika n kurang dari atau sama dengan 0, tidak ada deret yang bisa dibuat
    if (n <= 0) return [];
    
    // Jika n == 1, maka hanya ada satu elemen dalam deret
    if (n === 1) return [0];
    
    // Inisialisasi array Fibonacci dengan dua elemen pertama
    let fibSeries = [0, 1];
    
    // Menghitung elemen Fibonacci berikutnya hingga mencapai n elemen
    for (let i = 2; i < n; i++) {
        // Elemen baru adalah jumlah dari dua elemen sebelumnya
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }
    
    return fibSeries;
}

// Contoh penggunaan: mencetak 10 angka pertama dalam deret Fibonacci
console.log(fibonacci(10));
