function hitungSkor() {
    // Ambil nilai dari input
    const bluntStump = parseInt(document.getElementById('bluntStump').value) || 0;
    const kalsifikasi = parseInt(document.getElementById('kalsifikasi').value) || 0;
    const lesiPanjang = parseInt(document.getElementById('lesiPanjang').value) || 0;
    const bending = parseInt(document.getElementById('bending').value) || 0;
    const derajatKolateral = parseInt(document.getElementById('derajatKolateral').value) || 0;

    // Hitung total skor
    const totalSkor = (bluntStump * 3) + (kalsifikasi * 2) + (lesiPanjang * 1) + (bending * 1) + (derajatKolateral * 2);

    // Tabel probabilitas keberhasilan berdasarkan gambar yang Anda berikan
    const probabilitas = {
        0: '95.29%',
        1: '88.86%',
        2: '75.86%',
        3: '55.30%',
        4: '32.76%',
        5: '16.10%',
        6: '7.02%',
        7: '2.88%',
        8: '1.16%',
        9: '0.45%'
    };

    // Tentukan persentase keberhasilan
    // Gunakan nilai dari objek probabilitas, jika skor tidak ada, berikan 'N/A'
    const persentase = probabilitas[totalSkor] || 'Skor terlalu tinggi';

    // Tampilkan hasil
    document.getElementById('totalSkor').innerText = totalSkor;
    document.getElementById('persentase').innerText = persentase;
}