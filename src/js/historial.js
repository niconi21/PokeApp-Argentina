$().ready(() => {
    llenarCardPokemonesHistorial();
    llenarCardBerriesHistorial();
    llenarCardItemsHistorial();
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
                    setPokemonVistos(objeto)
                    abrirModal(objeto);
                })
            })
        })
    })
}

function llenarModalBerri(nombreBerry){
    createFieldSearch(`https://pokeapi.co/api/v2/berry/${nombreBerry}`).done((resultado)=>{
        let firmezaBerri = resultado.firmness.name;
        let madurarBerri = resultado.growth_time;
        let maxArbolBerri = resultado.max_harvest;
        let nameBerri = resultado.name;
        let poderBerri = resultado.natural_gift_power;
        let tamanioBerri = resultado.size;
        let descBerri = resultado.soil_dryness;
        let listaSabores = resultado.flavors;
        let itemUrl = resultado.item.url;
        let saboresBerri = "";
        listaSabores.forEach(e => {
            saboresBerri = saboresBerri + e.flavor.name + ", ";
        });
        createFieldSearch(`${itemUrl}`).done((resultado)=>{
            let spritBerri = resultado.sprites.default;
            let efectoBerri = resultado.effect_entries[0].effect;
            let objeto = {
                firmezaBerri: `${firmezaBerri}`,
                madurarBerri: `${madurarBerri} hrs`,
                maxArbolBerri: `${maxArbolBerri}`,
                nameBerri: `${nameBerri}`,
                poderBerri: `${poderBerri} points`,
                tamanioBerri: `${tamanioBerri} decimetres`,
                descBerri: `${descBerri} hrs`,
                saboresBerri: `${saboresBerri}`,
                spritBerri: `${spritBerri}`,
                efectoBerri: `${efectoBerri}`,
            }
            setBerriesVistos(objeto)
            abrirModalBerri(objeto);
        })
    })
}

function llenarModalItem(nombreItem) {
    createFieldSearch(`https://pokeapi.co/api/v2/item/${nombreItem}`).done((resultado) => {
        let nombreItem = resultado.name;
        let efectoItem = resultado.effect_entries[0].effect;
        let textItem = resultado.flavor_text_entries[1].text;
        let categoriaItem = resultado.category.name;
        let spritItem = resultado.sprites.default;
        let atributoList = resultado.attributes;
        let costItem = resultado.cost;
        let atributoItem = "";

        atributoList.forEach(e => {
            atributoItem = atributoItem + e.name + ","
        });

        let objeto = {
            costItem,
            nombreItem: `${nombreItem}`,
            efectoItem: `${efectoItem}`,
            textItem: `${textItem}`,
            categoriaItem: `${categoriaItem}`,
            spritItem: `${spritItem}`,
            atributoItem: `${atributoItem}`
        }

        abrirModalItem(objeto);
        setItemsVistos(objeto)

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
                    setPokemonCarrito(objeto)
                    // abrirModal(objeto);
                })
            })
        })
    })
}

function llenarCarritoBerrie(nombreBerry) {
    createFieldSearch(`https://pokeapi.co/api/v2/berry/${nombreBerry}`).done((resultado)=>{
        let firmezaBerri = resultado.firmness.name;
        let madurarBerri = resultado.growth_time;
        let maxArbolBerri = resultado.max_harvest;
        let nameBerri = resultado.name;
        let poderBerri = resultado.natural_gift_power;
        let tamanioBerri = resultado.size;
        let descBerri = resultado.soil_dryness;
        let listaSabores = resultado.flavors;
        let itemUrl = resultado.item.url;
        let saboresBerri = "";
        listaSabores.forEach(e => {
            saboresBerri = saboresBerri + e.flavor.name + ", ";
        });
        createFieldSearch(`${itemUrl}`).done((resultado)=>{
            let costBarry = resultado.cost;
            let spritBerri = resultado.sprites.default;
            let efectoBerri = resultado.effect_entries[0].effect;
            let objeto = {
                costBarry,
                firmezaBerri: `${firmezaBerri}`,
                madurarBerri: `${madurarBerri} hrs`,
                maxArbolBerri: `${maxArbolBerri}`,
                nameBerri: `${nameBerri}`,
                poderBerri: `${poderBerri} points`,
                tamanioBerri: `${tamanioBerri} decimetres`,
                descBerri: `${descBerri} hrs`,
                saboresBerri: `${saboresBerri}`,
                spritBerri: `${spritBerri}`,
                efectoBerri: `${efectoBerri}`,
            }
            setBerrieCarrito(objeto)
        })
    })
}

function llenarCarritoItems(nombreItem) {
    createFieldSearch(`https://pokeapi.co/api/v2/item/${nombreItem}`).done((resultado) => {
        let nombreItem = resultado.name;
        let efectoItem = resultado.effect_entries[0].effect;
        let textItem = resultado.flavor_text_entries[1].text;
        let categoriaItem = resultado.category.name;
        let spritItem = resultado.sprites.default;
        let atributoList = resultado.attributes;
        let costItem = resultado.cost;
        let atributoItem = "";

        atributoList.forEach(e => {
            atributoItem = atributoItem + e.name + ","
        });

        let objeto = {
            costItem,
            nombreItem: `${nombreItem}`,
            efectoItem: `${efectoItem}`,
            textItem: `${textItem}`,
            categoriaItem: `${categoriaItem}`,
            spritItem: `${spritItem}`,
            atributoItem: `${atributoItem}`
        }

        setItemsCarrito(objeto)

    })
}

function llenarCardPokemonesHistorial(){
    let cardsPokemones = '';
    let pokemonesVistos = JSON.parse(localStorage.getItem('pokemonVistos'))
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
}

function llenarCardBerriesHistorial(){
    let cardsBerries = '';
    let berriesVistos = JSON.parse(localStorage.getItem('berriesVistos'))
    berriesVistos.forEach(berrie => {
        cardsBerries += `
        <div class="card border-secondary elevation-2" id="card1">
                        <div class="card-header">
                            <img src="${berrie.spritBerri}" width="100px">
                            <p class="text-warning">${berrie.nameBerri}: $${berrie.costBarry}</p>
                        </div>
                        <div class="card-body">
                            <p class="text-justify p-1">${berrie.efectoBerri}</p>
                        </div>
                        <div class="card-footer">
                        <button class="btn btn-info text-light botonVerBerri" id="prueba"><div hidden>${berrie.nameBerri}</div><i class="fas fa-eye"></i>
                        Ver más</button>
                    <button class="btn btn-primary text-light" id="prueba"><i class="fas fa-share"></i>
                        Compartir</button>
                    <button class="btn btn-success text-light" id="botonCariitoBerri"><div hidden>${berrie.nameBerri}</div><i class="fas fa-cart-plus"></i>
                        Agregar al carrito</button>
                        </div>
                    </div>`
    });
    $('#cardsBerriesVistos').append(cardsBerries);

    $('body').on('click', '.botonVerBerri', function (e) {
        let nombreBerrie = $(e.target.querySelector('div')).text();
        console.log('ver',nombreBerrie);
        llenarModalBerri(nombreBerrie);
    })
    $('body').on('click', '#botonCariitoBerri', function (e) {
        let nombreBerrie = $(e.target.querySelector('div')).text();
        
        llenarCarritoBerrie(nombreBerrie)
    })
}

function llenarCardItemsHistorial(){
    let cardsItems = '';
    let itemsVistos = JSON.parse(localStorage.getItem('itemsVistos'))
    itemsVistos.forEach(item => {
        cardsItems += `
        <div class="card border-secondary elevation-2" id="card1">
                    <div class="card-header">
                        <img src="${item.spritItem}" width="100px">
                        <p class="text-warning">${item.nombreItem}: $${item.costItem}</p>
                    </div>
                    <div class="card-body">
                        <p class="text-justify p-1">${item.efectoItem}</p>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-info text-light botonVerItem" id="prueba"><div hidden>${item.nombreItem}</div><i class="fas fa-eye"></i>
                            Ver más</button>
                        <button class="btn btn-primary text-light" id="prueba"><i class="fas fa-share"></i>
                            Compartir</button>
                        <button class="btn btn-success text-light botonCarritoItems" id="prueba"><div hidden>${item.nombreItem}</div><i class="fas fa-cart-plus"></i>
                            Agregar al carrito</button>
                    </div>
                </div>`
    });
    $('#cardsItemsVistos').append(cardsItems);

    $('body').on('click', '.botonVerItem', function (e) {
        let nombreItem = $(e.target.querySelector('div')).text();
        llenarModalItem(nombreItem);
    })
    $('body').on('click', '.botonCarritoItems', function (e) {
        let nombreItem = $(e.target.querySelector('div')).text();
        console.log(nombreItem);
        llenarCarritoItems(nombreItem)
    })
    
}