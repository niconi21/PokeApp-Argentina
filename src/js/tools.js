
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

    popup.innerHTML = `
<a href="#" id="btn-cerrar-popup" class="btn-cerrar-popup"><i class="fas fa-times"></i></a>
            <h2>${objeto.nombre}</h2>
            <img src="${objeto.img}" alt="">

            <div>
                <h4>Información básica</h4>
                <p><b>Altura: ${objeto.altura}</b></p>
                <p><b>Peso: ${objeto.peso}</b></p>
                <p><b>Áreas de ubicación: ${objeto.areaUbicacion}</b></p>
            </div>

            <div>
                <h4>Habilidades</h4>
                <p><b>Nombre: ${objeto.habilidad}</b></p>
                <p><b>Efecto: ${objeto.efecto}</b></p>
                <p><b>Texto de ambientación: ${objeto.texto1}</b></p>
            </div>

            <div>
                <h4>Movimientos</h4>
                <p><b>Nombre: ${objeto.movimiento}</b></p>
                <p><b>Poder: ${objeto.poder}</b></p>
                <p><b>Texto de ambientación: ${objeto.texto2}</b></p>
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

function abrirModalBerri(objeto) {

    popup.innerHTML = `
<a href="#" id="btn-cerrar-popup" class="btn-cerrar-popup"><i class="fas fa-times"></i></a>
            <h2>${objeto.nameBerri}</h2>
            <img src="${objeto.spritBerri}" alt="">

            <div>
                <h4>Información básica</h4>
                <p><b>Poder: ${objeto.poderBerri}</b></p>
                <p><b>Tamaño: ${objeto.tamanioBerri}</b></p>
                <p><b>Tiempo para madurar: ${objeto.madurarBerri}</b></p>
                <p><b>Máximo de bayas por árbol: ${objeto.maxArbolBerri}</b></p>
                <p><b>Firmeza: ${objeto.firmezaBerri}</b></p>
                <p><b>Horas de descomposición: ${objeto.descBerri}</b></p>
            </div>

            <div>
                <h4>Sabores</h4>
                <p><b>${objeto.saboresBerri}</b></p>
            </div>

            <div>
                <h4>Efecto</h4>
                <p><b>${objeto.efectoBerri}</b></p>
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

function abrirModalItem(objeto) {

    popup.innerHTML = `
<a href="#" id="btn-cerrar-popup" class="btn-cerrar-popup"><i class="fas fa-times"></i></a>
            <h2>${objeto.nombreItem}</h2>
            <img src="${objeto.spritItem}" alt="">

            <div>
                <h4>Información básica</h4>
                <p><b>Categoria: ${objeto.categoriaItem}</b></p>
                <br>
                <p><b>Efecto: ${objeto.efectoItem}</b></p>
                <br>
                <p><b>Texto de ambientacion: ${objeto.textItem}</b></p>
                <br>
                <p><b>Atributos: ${objeto.atributoItem}</b></p>
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

function setPokemonVistos(objeto) {
    let pokemonesVistos = JSON.parse(localStorage.getItem('pokemonVistos'));
    let existe = false;
    pokemonesVistos.forEach(pokemon => {
        if (pokemon.nombre == objeto.nombre)
            existe = true;
    });
    if (!existe)
        pokemonesVistos.push(objeto);
    localStorage.setItem('pokemonVistos', JSON.stringify(pokemonesVistos));
}

function setBerriesVistos(objeto) {
    console.log(objeto);
    let berriesVistos = JSON.parse(localStorage.getItem('berriesVistos'));
    let existe = false;
    berriesVistos.forEach(pokemon => {
        if (pokemon.nameBerri == objeto.nameBerri)
            existe = true;
    });
    if (!existe)
        berriesVistos.push(objeto);
    localStorage.setItem('berriesVistos', JSON.stringify(berriesVistos));
}

function setItemsVistos(objeto) {
    let itemsVistos = JSON.parse(localStorage.getItem('itemsVistos'));
    let existe = false;
    itemsVistos.forEach(pokemon => {
        if (pokemon.nombreItem == objeto.nombreItem)
            existe = true;
    });
    if (!existe)
        itemsVistos.push(objeto);
    localStorage.setItem('itemsVistos', JSON.stringify(itemsVistos));
}

function setPokemonCarrito(objeto) {
    pokemonesVistos = JSON.parse(localStorage.getItem('pokemonCarrito'));
    let existe = false;
    pokemonesVistos.forEach(pokemon => {
        if (pokemon.nombre == objeto.nombre)
            existe = true;
    });
    if (!existe)
        pokemonesVistos.push(objeto);
    localStorage.setItem('pokemonCarrito', JSON.stringify(pokemonesVistos));
}

function setBerrieCarrito(objeto) {
    let berriesCarrito = JSON.parse(localStorage.getItem('Berriescarrito'));
    let existe = false;
    berriesCarrito.forEach(berrie => {
        if (berrie.nameBerri == objeto.nameBerri)
            existe = true;
    });
    if (!existe)
        berriesCarrito.push(objeto);
    localStorage.setItem('Berriescarrito', JSON.stringify(berriesCarrito));
}

function setItemsCarrito(objeto) {
    let itemsCarrito = JSON.parse(localStorage.getItem('itemscarrito'));
    let existe = false;
    itemsCarrito.forEach(item => {
        if (item.nombreItem == objeto.nombreItem)
            existe = true;
    });
    if (!existe)
        itemsCarrito.push(objeto);
    localStorage.setItem('itemscarrito', JSON.stringify(itemsCarrito));
}

function setComparirPokemon(objeto) {
    objeto.descripcion = objeto.efecto
    abrirModalCompartir(objeto)
}
function setComparirBerrie(objeto) {
    objeto.img = objeto.spritBerri
    objeto.nombre = objeto.nameBerri
    objeto.costo = objeto.costBarry
    objeto.descripcion = objeto.efectoBerri
    abrirModalCompartir(objeto)
}
function setComparirItem(objeto) {
    objeto.img = objeto.spritItem
    objeto.nombre = objeto.nombreItem
    objeto.costo = objeto.costItem
    objeto.descripcion = objeto.efectoItem
    abrirModalCompartir(objeto)
}

function abrirModalCompartir(objeto) {
    popup.innerHTML = `
        <a href="#" id="btn-cerrar-popup" class="btn-cerrar-popup"><i class="fas fa-times"></i></a>
        <h2>Compartir pokemon</h2>
        <img src="${objeto.img}" alt="">
        <div>
            <h4>Información básica</h4>
            <p><b>Nombre: ${objeto.nombre}</b></p>
            <p><b>Costo: $${objeto.costo}.00</b></p>
        </div>
        <div class="form">
            <form>
            <div class="form-group">
                <label>
                Destinatarío
                </label>
                <input id="inpCorreo" type="email">
                <div id="msgCorreo" class="msg-error"></div>
            </div>
            <div class="form-group">
                <label>
                Asunto
                </label>
                <input id="inpAsunto" type="text">
                <div id="msgAsunto" class="msg-error"></div>
            </div>
            <div class="form-group">
                <label>
                Mensaje:
                </label>
                <textarea id="inpMensaje"></textarea>
            </div>
            <div class="form-send">
                <button id="enviarCorreo" class="btn btn-success">Enviar</button>
                <a href="#" id="cancelarCompartir" class="btn btn-danger">Cancelar</a>
            </div>

            </form>
        </div>
`


    overlay.classList.add('active');
    popup.classList.add('active');
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');
    btnEnviarCorreo = document.getElementById('enviarCorreo');
    cancelarCompartir = document.getElementById('cancelarCompartir');

    btnEnviarCorreo.addEventListener('click', function (e) {
        e.preventDefault();
        if (validarFormularioCompartir()) {
            let body = `<div>
                        <h4>Información básica</h4>
                        <p><b>Nombre: </b>${objeto.nombre}</p>
                        <p><b>Costo:  </b>$${objeto.costo}.00</p>
                        <p><b>Descripción: </b>${objeto.descripcion}.00</p>

                    </div>`;

            body += $('#inpMensaje').val()

            window.open(`mailto:${$('#inpCorreo').val()}?subject=${$('#inpAsunto').val()}&body=${body}`);
        }
    });
    btnCerrarPopup.addEventListener('click', function (e) {
        e.preventDefault();
        overlay.classList.remove('active');
        popup.classList.remove('active');
    });
    cancelarCompartir.addEventListener('click', function (e) {
        e.preventDefault();
        overlay.classList.remove('active');
        popup.classList.remove('active');
    });
}


function validarFormularioCompartir() {
    let correo = $('#inpCorreo')
    let asunto = $('#inpAsunto')
    let valido = true;
    let correoRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    $('#msgCorreo').html('')
    $('#msgAsunto').html('')
    correo.removeClass('errorForm')
    asunto.removeClass('errorForm')

    if (correo.val() == '') {
        correo.addClass('errorForm')
        $('#msgCorreo').append(`<small class="text-left text-warning"><i class="fas fa-exclamation-triangle"></i> Se require el correo</small>`)
        valido = false;
    }
    if (!correoRegex.test(correo.val())) {

        correo.addClass('errorForm')
        $('#msgCorreo').append(`<small class="text-left text-warning"><i class="fas fa-exclamation-triangle"></i> Escribe un correo válido</small>`)
        valido = false;
    }

    if (asunto.val() == '') {
        asunto.addClass('errorForm')
        $('#msgAsunto').append(`<small class="text-left text-warning"><i class="fas fa-exclamation-triangle"></i> Se require el asunto</small>`)

        valido = false;
    }
    return valido
}

function crearArreglosLocalStorage() {
    if (localStorage.getItem('pokemonVistos') == null)
        localStorage.setItem('pokemonVistos', '[]');
    if (localStorage.getItem('berriesVistos') == null)
        localStorage.setItem('berriesVistos', '[]');
    if (localStorage.getItem('itemsVistos') == null)
        localStorage.setItem('itemsVistos', '[]');
    if (localStorage.getItem('pokemonCarrito') == null)
        localStorage.setItem('pokemonCarrito', '[]');
    if (localStorage.getItem('Berriescarrito') == null)
        localStorage.setItem('Berriescarrito', '[]');
    if (localStorage.getItem('itemscarrito') == null)
        localStorage.setItem('itemscarrito', '[]');
}