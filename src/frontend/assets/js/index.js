
$('#btn-menu').click(() => {
    let items = document.getElementsByClassName('nav-item');
    for (let index = 0; index < items.length; index++) {
        items[index].classList.toggle('oculto')

    }
})

function createFieldSearch(datos) {
    return $.ajax({
        url: `${datos}`,
        type: 'GET',
        dataType: 'json'
    }).done(function (response) {
        return response;
    });
}

$("#botonMas").click(()=>{
    llenarCards(localStorage.getItem("nextUrl"))
})

function llenarCards(url){
    createFieldSearch(`${url}`).done((resultado)=>{
        //Nombre.................................................
        let consulta = resultado.results;
        let urlNext = resultado.next;
        localStorage.setItem("nextUrl", urlNext);
        consulta.forEach(pokemon => {
            var nombrePokemon = pokemon.name;
            createFieldSearch(`${pokemon.url}`).done((resultado)=>{
                let pokemonSprits = resultado.sprites;
                createFieldSearch(`https://pokeapi.co/api/v2/ability/${resultado.id}/`).done((resultado)=>{
                    let pokemonChar = resultado.effect_entries;
                    $("#cardsPokemon").append(`
                    <div class="card-producto border-secondary elevation-2" id="card1">
                        <div class="card-producto-header">
                            <img src="${pokemonSprits.front_default}" width="100px">
                        </div>
                        <div class="card-producto-body">
                            <h2 class="text-warning">${nombrePokemon}</h2>
                            <p class="text-justify">${pokemonChar[1].short_effect}</p>
                        </div>
                        <div class="card-producto-footer">
                            <button class="btn btn-info text-light" id="prueba"><i class="text-dark fas fa-share"></i>
                                Compartir</button>
                        </div>
                    </div>`);

                });
            }); 
        });
    });
}


$(document).ready(()=>{
    llenarCards("https://pokeapi.co/api/v2/pokemon/");
})

