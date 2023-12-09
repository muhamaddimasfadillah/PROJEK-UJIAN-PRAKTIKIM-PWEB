document.getElementById('jadwalForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah reload halaman saat submit form

  const nama = document.getElementById('nama').value;
  const tanggal = document.getElementById('tanggal').value;

  if (nama && tanggal) {
    const jadwal = {
      nama: nama,
      tanggal: tanggal
    };

    tambahJadwal(jadwal);
    tampilkanJadwal();
    document.getElementById('nama').value = '';
    document.getElementById('tanggal').value = '';
  } else {
    alert('Harap isi semua field!');
  }
});

function tambahJadwal(jadwal) {
  let jadwalList = localStorage.getItem('jadwalList');
  if (jadwalList) {
    jadwalList = JSON.parse(jadwalList);
  } else {
    jadwalList = [];
  }
  jadwalList.push(jadwal);
  localStorage.setItem('jadwalList', JSON.stringify(jadwalList));
}

function tampilkanJadwal() {
  const jadwalList = JSON.parse(localStorage.getItem('jadwalList'));
  const jadwalContainer = document.getElementById('jadwalList');

  if (jadwalList && jadwalList.length > 0) {
    jadwalContainer.innerHTML = '<h3>Daftar Jadwal:</h3>';
    jadwalList.forEach(function(jadwal, index) {
      jadwalContainer.innerHTML += `<p>${index + 1}. ${jadwal.nama} - ${jadwal.tanggal}</p>`;
    });
  } else {
    jadwalContainer.innerHTML = '<p>Belum ada jadwal.</p>';
  }
}

// Memastikan daftar jadwal ditampilkan saat halaman dimuat
tampilkanJadwal();
