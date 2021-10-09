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

$('#prueba').click(()=>{
    var idPokemon;
    createFieldSearch("https://pokeapi.co/api/v2/pokemon/").done((resultado)=>{
        //Nombre.................................................
        let pokemon = resultado.results;
        console.log("Nombre: "+pokemon[0].name)
        //Sprits.................................................
        createFieldSearch(`${pokemon[0].url}`).done((resultado)=>{
            let pokemonSprits = resultado.sprites;
            console.log("Sprit: "+pokemonSprits.front_default)
            $("#imagen1").attr("src",`${pokemonSprits.front_default}`)
            console.log("id: "+resultado.id)
        });
        //descriptions.............................................
        console.log("var: "+idPokemon)
/*         createFieldSearch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}/`).done((resultado)=>{
            let pokemonDescriptions = resultado.descriptions;
            console.log("Descripcion: "+pokemonDescriptions[1].description)
        }); */
    });
});