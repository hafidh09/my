/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .navi-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

//program 1 sampai 4
      function helloWorld() {
      document.getElementById("output1").innerText = "Hello World!";
                    }
            
      function hitungLuasSegitiga() {
          var alas = parseFloat(document.getElementById("alas").value);
          var tinggi = parseFloat(document.getElementById("tinggi").value);
          var luas = 0.5 * alas * tinggi;
       document.getElementById("output2").innerText = "Luas Segitiga: " + luas.toFixed(2);
                    }
            
      function hitungLuasPersegiPanjang() {
           var panjang = parseInt(document.getElementById("panjang").value);
           var lebar = parseInt(document.getElementById("lebar").value);
           var luas = panjang * lebar;
       document.getElementById("output3").innerText = "Luas Persegi Panjang: " + luas;
                    }
            
      function tentukanNilai() {
           var nilai = parseInt(document.getElementById("nilai").value);
           var hasil;
           if (nilai >= 80 && nilai <= 100) hasil = 'A';
           else if (nilai >= 65 && nilai < 80) hasil = 'B';
           else if (nilai >= 55 && nilai < 65) hasil = 'C';
           else if (nilai >= 45 && nilai < 55) hasil = 'D';
           else if (nilai >= 0 && nilai < 45) hasil = 'E';
           else hasil = 'Angka Tidak Valid!';
            
        document.getElementById("output4").innerText = "Nilai huruf: " + hasil;
      }
// program 5 lampu
function toggleLight(lightNumber) {
    const light = document.getElementById(`light${lightNumber}`);
    light.classList.toggle('on'); // Menambahkan atau menghapus kelas 'on'
}

