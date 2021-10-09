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



function llenarCards(){
    createFieldSearch("https://pokeapi.co/api/v2/pokemon/").done((resultado)=>{
        //Nombre.................................................
        let consulta = resultado.results;
        consulta.forEach(pokemon => {
            var nombrePokemon = pokemon.name;
            createFieldSearch(`${pokemon.url}`).done((resultado)=>{
                let pokemonSprits = resultado.sprites;
                createFieldSearch(`https://pokeapi.co/api/v2/characteristic/${resultado.id}/`).done((resultado)=>{
                    let pokemonChar = resultado.descriptions;
                    $("#cardsPokemon").append(`
                    <div class="card-producto border-secondary elevation-2 border-left-danger border-right-danger" id="card1">
                        <div class="card-producto-header">
                            <img src="${pokemonSprits.front_default}" alt="">
                        </div>
                        <div class="card-producto-body">
                            <small class="text-warning">${nombrePokemon}</small>
                            <p>${pokemonChar[1].description}</p>
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
        llenarCards();
})
