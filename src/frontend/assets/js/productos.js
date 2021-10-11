
function createFieldSearch(datos) {
    return $.ajax({
        url: `${datos}`,
        type: 'GET',
        dataType: 'json'
    }).done(function (response) {
        return response;
    });
}

/* $("#botonMas").click(()=>{
    llenarCards(localStorage.getItem("nextUrl"))
}) */

function llenarCardsPokemon(url){
    $("#cardsPokemon").empty();
    createFieldSearch(`${url}`).done((resultado)=>{
        let pokemonSprits = resultado.sprites;
        createFieldSearch(`https://pokeapi.co/api/v2/ability/${resultado.id}/`).done((resultado)=>{
            let pokemonChar = resultado.effect_entries;
            $("#cardsPokemon").append(`
            <div class="card-producto border-secondary elevation-2" id="card1">
                <div class="card-producto-header">
                    <img src="${pokemonSprits.front_default}" width="100px">
                </div>
                <div class="card-producto-body">
                    <h2 class="text-warning">${resultado.name}</h2>
                    <p class="text-justify">${pokemonChar[1].short_effect}</p>
                </div>
                <div class="card-producto-footer">
                    <button class="btn btn-info text-light" id="prueba"><i class="text-dark fas fa-share"></i>
                        Compartir</button>
                </div>
            </div>`);

        });
    });
}

function llenarCardsBerry(url){
    $("#cardsPokemon").empty();
    createFieldSearch(`${url}`).done((resultado)=>{
        let idBarry = resultado.id;
        let nameBarry = resultado.name;
        let urlItem = resultado.item.url;
        createFieldSearch(`${urlItem}`).done((resultado)=>{
            let effectBarry = resultado.effect_entries[0].effect;
            let spritesBarry = resultado.sprites.default;
            let costBarry = resultado.cost;
            console.log(spritesBarry);
            $("#cardsPokemon").append(`
            <div class="card-producto border-secondary elevation-2" id="card1">
                <div class="card-producto-header">
                    <img src="${spritesBarry}" width="100px">
                </div>
                <div class="card-producto-body">
                    <h2 class="text-warning">${nameBarry}: $${costBarry}</h2>
                    <p class="text-justify">${effectBarry}</p>
                </div>
                <div class="card-producto-footer">
                    <button class="btn btn-info text-light" id="prueba"><i class="text-dark fas fa-share"></i>
                        Compartir</button>
                </div>
            </div>`);
        });
    });
}

$(document).ready(()=>{
    $("#boton1").click(function() {
        let elemntBusqueda = $("#busqueda").val();
        console.log(elemntBusqueda)
        let radioValue = $('input[name="radioB"]:checked').val();
        console.log (radioValue)

        if(radioValue == "pokemon"){
            llenarCardsPokemon(`https://pokeapi.co/api/v2/pokemon/${elemntBusqueda}`);
        }
        if(radioValue == "berries"){
            llenarCardsBerry(`https://pokeapi.co/api/v2/berry/${elemntBusqueda}`)
        }
        if(radioValue == "items"){
            console.log ("Buscar items")
        }
    });
})
