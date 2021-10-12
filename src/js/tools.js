$('#btnMenu').click(() => {
    let items = document.getElementsByClassName('nav-item');
    for (let index = 0; index < items.length; index++) {
        items[index].classList.toggle('oculto')

    }
})
function resize() {
    var widthBrowser = window.outerWidth;
    if (widthBrowser > 800) {
        let items = document.getElementsByClassName('nav-item');
        for (let index = 0; index < items.length; index++) {
            items[index].classList.remove('oculto')

        }
    }
}


var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
overlay = document.getElementById('overlay'),
popup = document.getElementById('popup');

function abrirModal(objeto) {
    


    // let pokemon = listPokemones[index];
    popup.innerHTML = `
<a href="#" id="btn-cerrar-popup" class="btn-cerrar-popup"><i class="fas fa-times"></i></a>
            <h2>${objeto.nombre}</h2>
            <img src="${objeto.img}" alt="">

            <div>
                <h4>Información básica</h4>
                <p><b>Altura:${objeto.altura}</b></p>
                <p><b>Peso:${objeto.peso}</b></p>
                <p><b>Áreas de ubicación::${objeto.areaUbicacion}</b></p>
            </div>

            <div>
                <h4>Hbilidades</h4>
                <p><b>Nombre:${objeto.habilidad}</b></p>
                <p><b>Efecto:${objeto.efecto}</b></p>
                <p><b>Texto de ambientación: :${objeto.texto1}</b></p>
            </div>

            <div>
                <h4>Movimientos</h4>
                <p><b>Nombre:${objeto.movimiento}</b></p>
                <p><b>Poder:${objeto.poder}</b></p>
                <p><b>Texto de ambientación:${objeto.texto2}</b></p>
            </div>
`

    overlay.classList.add('active');
    popup.classList.add('active');


    btnCerrarPopup = document.getElementById('btn-cerrar-popup');

    btnCerrarPopup.addEventListener('click', function (e) {
        e.preventDefault();
        overlay.classList.remove('active');
        popup.classList.remove('active');
    });
}


