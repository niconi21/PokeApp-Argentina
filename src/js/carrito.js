$().ready(() => {
   llenarTabla();
})

function llenarTabla(){
    let costo = 0;
    let filasPokemones = '';
    let pokemonesCarrito = JSON.parse(localStorage.getItem('pokemonCarrito'))
    pokemonesCarrito.forEach((pokemon, index) => {
        filasPokemones += `
        <tr>
            <td class="text-center">${pokemon.nombre}</td>
            <td class="text-center"><img src="${pokemon.img}"></td>
            <td>${pokemon.efecto}</td>
            <td class="text-center">$${pokemon.costo}.00</td>
            <td class="text-center"><button onclick="eliminarPokemonCarrito(${index})" class="btn btn-danger"><i class="fas fa-trash"></i></button></td>
        </tr>
        `  
        costo+=parseInt(pokemon.costo);
    });
    let berriesCarrito = JSON.parse(localStorage.getItem('Berriescarrito'))
    berriesCarrito.forEach((berrie, index) => {
        filasPokemones += `
        <tr>
            <td class="text-center">${berrie.nameBerri}</td>
            <td class="text-center"><img src="${berrie.spritBerri}"></td>
            <td>${berrie.efectoBerri}</td>
            <td class="text-center">$${berrie.costBarry}.00</td>
            <td class="text-center"><button onclick="eliminarBerrieCarrito(${index})" class="btn btn-danger"><i class="fas fa-trash"></i></button></td>
        </tr>
        `  
        costo+=parseInt(berrie.costBarry);
    });
    let itemsCarrito = JSON.parse(localStorage.getItem('itemscarrito'))
    itemsCarrito.forEach((item, index) => {
        filasPokemones += `
        <tr>
            <td class="text-center">${item.nombreItem}</td>
            <td class="text-center"><img src="${item.spritItem}"></td>
            <td>${item.efectoItem}</td>
            <td class="text-center">$${item.costItem}.00</td>
            <td class="text-center"><button onclick="eliminarItemCarrito(${index})" class="btn btn-danger"><i class="fas fa-trash"></i></button></td>
        </tr>
        `  
        costo+=parseInt(item.costItem);
    });

    $('#tblCarrito').html('');
    $('#tblCarrito').append(filasPokemones);
    $('#costoTotal').html(``);
    $('#costoTotal').append(`$${costo}.00`);

}

function eliminarPokemonCarrito(index){
    let pokemones = JSON.parse(localStorage.getItem('pokemonCarrito'));
    pokemones.splice(index,1);
    localStorage.setItem('pokemonCarrito', JSON.stringify(pokemones))
    llenarTabla()
}

function eliminarBerrieCarrito(index){
    let berries = JSON.parse(localStorage.getItem('Berriescarrito'));
    berries.splice(index,1);
    localStorage.setItem('Berriescarrito', JSON.stringify(berries))
    llenarTabla()
}

function eliminarItemCarrito(index){
    let items = JSON.parse(localStorage.getItem('itemscarrito'));
    items.splice(index,1);
    localStorage.setItem('itemscarrito', JSON.stringify(items))
    llenarTabla()
}