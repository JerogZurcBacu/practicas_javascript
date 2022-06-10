let cuenta = 0;

const valor = document.querySelector('#valor');
const botones = document.querySelectorAll('.btn');

botones.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const estilos = e.currentTarget.classList;
        if(estilos.contains("disminuir")) {
            cuenta--;
        } else if(estilos.contains("incrementar")) {
            cuenta++;
        } else {
            cuenta = 0
        }
        if (cuenta > 0) {
            valor.style.color = 'green'
        }
        if (cuenta < 0) {
            valor.style.color = 'red';
        }
        if (cuenta === 0) {
            valor.style.color = '#222';
        }
        valor.textContent = cuenta;
    });
});