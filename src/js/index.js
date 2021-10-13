let listPokemones = [];
let listBerries = [];
let listItems = [];

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


$(document).ready(function () {
    $('body').on('click', '.botonVerPokemon', function (e) {
        let nombrePokemon = $(e.target.querySelector('div')).text();
        llenarModalPokemon(nombrePokemon);
    })
    $('body').on('click', '.botonCarritoPokemon', function (e) {
        let nombrePokemon = $(e.target.querySelector('div')).text();
        llenarCarritoPokemon(nombrePokemon);
    })
})

function llenarModalPokemon(nombre) {
    createFieldSearch(`https://pokeapi.co/api/v2/pokemon/${nombre}`).done((resultado) => {
        let nombrePokemon = resultado.name;
        let costo = resultado.base_experience;
        let spritePokemon = resultado.sprites.front_default;
        let alturaPokemon = resultado.height;
        let pesoPokemon = resultado.weight;
        let abilityPokemon = resultado.abilities[0].ability.name;
        let abilityUrlPokemon = resultado.abilities[0].ability.url;
        let movePokemon = resultado.moves[0].move.name;
        let moveUrlPokemon = resultado.moves[0].move.url;
        createFieldSearch(`https://pokeapi.co/api/v2/pokemon-species/${nombrePokemon}/`).done((resultado) => {
            let habitatPokemon = resultado.habitat.name;
            createFieldSearch(abilityUrlPokemon).done((resultado) => {
                let effectPokemon = resultado.effect_entries[1].short_effect;
                let effectTextPokemon = resultado.flavor_text_entries[0].flavor_text;
                createFieldSearch(moveUrlPokemon).done((resultado) => {
                    let powerMovePokemon = resultado.power;
                    let moveTextPokemon = resultado.flavor_text_entries[1].flavor_text;
                    let objeto = {
                        costo,
                        nombre: `${nombrePokemon}`,
                        img: `${spritePokemon}`,
                        altura: `${alturaPokemon} decimetres`,
                        peso: `${pesoPokemon} hectograms`,
                        areaUbicacion: `${habitatPokemon}`,
                        habilidad: `${abilityPokemon}`,
                        efecto: `${effectPokemon}`,
                        texto1: `" ${effectTextPokemon} "`,
                        movimiento: `${movePokemon}`,
                        poder: `${powerMovePokemon} points`,
                        texto2: `" ${moveTextPokemon} "`
                    }
                    setVistos(objeto)
                    abrirModal(objeto);
                })
            })
        })
    })
}

function llenarCarritoPokemon(nombre) {
    createFieldSearch(`https://pokeapi.co/api/v2/pokemon/${nombre}`).done((resultado) => {
        let nombrePokemon = resultado.name;
        let costo = resultado.base_experience;
        let spritePokemon = resultado.sprites.front_default;
        let alturaPokemon = resultado.height;
        let pesoPokemon = resultado.weight;
        let abilityPokemon = resultado.abilities[0].ability.name;
        let abilityUrlPokemon = resultado.abilities[0].ability.url;
        let movePokemon = resultado.moves[0].move.name;
        let moveUrlPokemon = resultado.moves[0].move.url;
        createFieldSearch(`https://pokeapi.co/api/v2/pokemon-species/${nombrePokemon}/`).done((resultado) => {
            let habitatPokemon = resultado.habitat.name;
            createFieldSearch(abilityUrlPokemon).done((resultado) => {
                let effectPokemon = resultado.effect_entries[1].short_effect;
                let effectTextPokemon = resultado.flavor_text_entries[0].flavor_text;
                createFieldSearch(moveUrlPokemon).done((resultado) => {
                    let powerMovePokemon = resultado.power;
                    let moveTextPokemon = resultado.flavor_text_entries[1].flavor_text;
                    let objeto = {
                        costo,
                        nombre: `${nombrePokemon}`,
                        img: `${spritePokemon}`,
                        altura: `${alturaPokemon} decimetres`,
                        peso: `${pesoPokemon} hectograms`,
                        areaUbicacion: `${habitatPokemon}`,
                        habilidad: `${abilityPokemon}`,
                        efecto: `${effectPokemon}`,
                        texto1: `" ${effectTextPokemon} "`,
                        movimiento: `${movePokemon}`,
                        poder: `${powerMovePokemon} points`,
                        texto2: `" ${moveTextPokemon} "`
                    }
                    setCarrito(objeto)
                    // abrirModal(objeto);
                })
            })
        })
    })
}
function llenarCardsPokemon(url) {
    createFieldSearch(`${url}`).done((resultado) => {
        //Nombre.................................................
        let consulta = resultado.results;
        let urlNext = resultado.next;
        localStorage.setItem("nextUrlPokemon", urlNext);
        consulta.forEach((pokemon, index) => {
            var nombrePokemon = pokemon.name;
            createFieldSearch(`${pokemon.url}`).done((resultado) => {
                let pokemonSprits = resultado.sprites;
                let costPokemon = resultado.base_experience;
                createFieldSearch(`https://pokeapi.co/api/v2/ability/${resultado.id}/`).done((resultado) => {
                    let pokemonChar = resultado.effect_entries;
                    listPokemones.push({
                        nombre: nombrePokemon,
                        costo: costPokemon,
                        descripcion: pokemonChar[1].short_effect,
                        img: pokemonSprits.front_default
                    })
                    $("#cardsPokemon").append(`
                    <div class="card border-secondary ">
                        <div class="card-header">
                            <img src="${pokemonSprits.front_default}" width="100px">
                            <p class="text-warning">${nombrePokemon}: $${costPokemon}</p>

                        </div>
                        <div class="card-body">
                            <p class="text-justify p-1">${pokemonChar[1].short_effect}</p>
                        </div>
                        <div class="card-footer">
                        
                        <button class="btn btn-info text-light botonVerPokemon"><div hidden>${nombrePokemon}</div><i class="fas fa-eye"></i>
                        Ver más</button>
                    <button class="btn btn-primary text-light" id="prueba"><div hidden>${nombrePokemon}</div><i class="fas fa-share"></i>
                        Compartir</button>
                        <button class="btn btn-success text-light botonCarritoPokemon" id="prueba"><div hidden>${nombrePokemon}</div><i class="fas fa-cart-plus"></i>
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
                    listBerries.push({
                        nombre: nameBarry,
                        costo: costBarry,
                        descripcion: effectBarry
                    })
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
                listItems.push({
                    nombre: nombreItem,
                    costo: costItem,
                    descripcion: effectItem
                })
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

