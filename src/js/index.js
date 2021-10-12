





function createFieldSearch(datos) {
    return $.ajax({
        url: `${datos}`,
        type: 'GET',
        dataType: 'json'
    }).fail(function (jqXHR, textStatus, errorThrown) {
        //alert( 'Error!!' );
    }).done(function (response) {
        return response;
    });
}

$("#botonMasPokemon").click(() => {
    llenarCardsPokemon(localStorage.getItem("nextUrlPokemon"))
})

$("#botonMasBerries").click(() => {
    llenarCardsBerries(localStorage.getItem("nextUrlBerries"))
})

$("#botonMasItem").click(() => {
    llenarCardsItem(localStorage.getItem("nextUrlItem"))
})

function llenarCardsPokemon(url) {
    createFieldSearch(`${url}`).done((resultado) => {
        //Nombre.................................................
        let consulta = resultado.results;
        let urlNext = resultado.next;
        localStorage.setItem("nextUrlPokemon", urlNext);
        consulta.forEach(pokemon => {
            var nombrePokemon = pokemon.name;
            createFieldSearch(`${pokemon.url}`).done((resultado) => {
                let pokemonSprits = resultado.sprites;
                let costPokemon = resultado.base_experience;
                createFieldSearch(`https://pokeapi.co/api/v2/ability/${resultado.id}/`).done((resultado) => {
                    let pokemonChar = resultado.effect_entries;
                    $("#cardsPokemon").append(`
                    <div class="card border-secondary " id="card1">
                        <div class="card-header">
                            <img src="${pokemonSprits.front_default}" width="100px">
                            <p class="text-warning">${nombrePokemon}: $${costPokemon}</p>

                        </div>
                        <div class="card-body">
                            <p class="text-justify p-1">${pokemonChar[1].short_effect}</p>
                        </div>
                        <div class="card-footer">
                        <button class="btn btn-info text-light" id="prueba"><i class="fas fa-eye"></i>
                        Ver más</button>
                    <button class="btn btn-primary text-light" id="prueba"><i class="fas fa-share"></i>
                        Compartir</button>
                    <button class="btn btn-success text-light" id="prueba"><i class="fas fa-cart-plus"></i>
                        Agregar al carrito</button>
                        </div>
                    </div>`);

                });
            });
        });
    });
}

function llenarCardsBerries(url) {
    createFieldSearch(`${url}`).done((resultado) => {
        let consulta = resultado.results;
        let urlNext = resultado.next;
        localStorage.setItem("nextUrlBerries", urlNext);
        consulta.forEach(berries => {
            let urlBerries = berries.url;
            createFieldSearch(`${urlBerries}`).done((resultado) => {
                let idBarry = resultado.id;
                let nameBarry = resultado.name;
                let urlItem = resultado.item.url;
                createFieldSearch(`${urlItem}`).done((resultado) => {
                    let effectBarry = resultado.effect_entries[0].effect;
                    let spritesBarry = resultado.sprites.default;
                    let costBarry = resultado.cost;
                    $("#cardsBarry").append(`
                    <div class="card border-secondary elevation-2" id="card1">
                        <div class="card-header">
                            <img src="${spritesBarry}" width="100px">
                            <p class="text-warning">${nameBarry}: $${costBarry}</p>
                        </div>
                        <div class="card-body">
                            <p class="text-justify p-1">${effectBarry}</p>
                        </div>
                        <div class="card-footer">
                        <button class="btn btn-info text-light" id="prueba"><i class="fas fa-eye"></i>
                        Ver más</button>
                    <button class="btn btn-primary text-light" id="prueba"><i class="fas fa-share"></i>
                        Compartir</button>
                    <button class="btn btn-success text-light" id="prueba"><i class="fas fa-cart-plus"></i>
                        Agregar al carrito</button>
                        </div>
                    </div>`);
                });
            });
        })
    })
}

function llenarCardsItem(url) {
    createFieldSearch(`${url}`).done((resultado) => {
        let consulta = resultado.results;
        let urlNext = resultado.next;
        localStorage.setItem("nextUrlItem", urlNext);
        consulta.forEach(item => {
            createFieldSearch(`${item.url}`).done((resultado) => {
                let nombreItem = resultado.name;
                let costItem = resultado.cost;
                let effectItem = resultado.effect_entries[0].effect;
                let spriteItem = resultado.sprites.default;
                $("#cardsItem").append(`
                <div class="card border-secondary elevation-2" id="card1">
                    <div class="card-header">
                        <img src="${spriteItem}" width="100px">
                        <p class="text-warning">${nombreItem}: $${costItem}</p>
                    </div>
                    <div class="card-body">
                        <p class="text-justify p-1">${effectItem}</p>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-info text-light" id="prueba"><i class="fas fa-eye"></i>
                            Ver más</button>
                        <button class="btn btn-primary text-light" id="prueba"><i class="fas fa-share"></i>
                            Compartir</button>
                        <button class="btn btn-success text-light" id="prueba"><i class="fas fa-cart-plus"></i>
                            Agregar al carrito</button>
                    </div>
                </div>`);
            })
        });
    })
}

$(document).ready(() => {
    llenarCardsPokemon("https://pokeapi.co/api/v2/pokemon/?limit=10");
    llenarCardsBerries("https://pokeapi.co/api/v2/berry?limit=10");
    llenarCardsItem("https://pokeapi.co/api/v2/item?limit=10");
})

