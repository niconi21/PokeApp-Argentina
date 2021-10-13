$().ready(() => {
    let cardsPokemones = '';
    let pokemonesVistos = JSON.parse(localStorage.getItem('vistos'))
    pokemonesVistos.forEach(pokemon => {
        cardsPokemones += `
        <div class="card border-secondary ">
                        <div class="card-header">
                            <img src="${pokemon.img}" width="100px">
                            <p class="text-warning">${pokemon.nombre}: $${pokemon.costo}</p>

                        </div>
                        <div class="card-body">
                            <p class="text-justify p-1">${pokemon.efecto}</p>
                        </div>
                        <div class="card-footer">
                        
                        <button class="btn btn-info text-light botonVerPokemon"><div hidden>${pokemon.nombre}</div><i class="fas fa-eye"></i>
                        Ver más</button>
                    <button class="btn btn-primary text-light" id="prueba"><div hidden>${pokemon.nombre}</div><i class="fas fa-share"></i>
                        Compartir</button>
                        <button class="btn btn-success text-light botonCarritoPokemon" id="prueba"><div hidden>${pokemon.nombre}</div><i class="fas fa-cart-plus"></i>
                        Agregar al carrito</button>
                        </div>
                    </div>`
    });
    $('#cardsPokemonVistos').append(cardsPokemones);

    $('body').on('click', '.botonVerPokemon', function (e) {
        let nombrePokemon = $(e.target.querySelector('div')).text();
        llenarModalPokemon(nombrePokemon);
    })
    $('body').on('click', '.botonCarritoPokemon', function (e) {
        let nombrePokemon = $(e.target.querySelector('div')).text();
        llenarCarritoPokemon(nombrePokemon);
    })
})


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


function llenarModalPokemon(nombre) {
    createFieldSearch(`https://pokeapi.co/api/v2/pokemon/${nombre}`).done((resultado) => {
        let nombrePokemon = resultado.name;
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