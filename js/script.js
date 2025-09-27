document.addEventListener("DOMContentLoaded", () => {
  let name = prompt("Masukkan Nama Anda:");
  if (!name) name = "Pengunjung";
  document.getElementById("username").textContent = name;
});

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Semua field harus diisi!");
    return false;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Email tidak valid!");
    return false;
  }

  alert("Pesan berhasil dikirim! Terima kasih, " + name);
}
