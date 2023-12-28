document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Tentukan username dan password yang diharapkan
        const expectedUsername = 'ahmad2017';
        const expectedPassword = 'integrity';

        // Ambil nilai yang dimasukkan pengguna
        const enteredUsername = document.getElementById('username').value;
        const enteredPassword = document.getElementById('password').value;

        // Lakukan pengecekan
        if (enteredUsername === expectedUsername && enteredPassword === expectedPassword) {
            // Login berhasil
            alert('Login Sukses');
            // Redirect ke halaman baru
            window.location.href = 'berhasil-login.html';
        } else {
            
            alert('Login Gagal');
        }
    });
});
