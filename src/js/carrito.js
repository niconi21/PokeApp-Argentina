$().ready(() => {
   llenarTabla();
})

function llenarTabla(){
    let filasPokemones = '';
    let pokemonesCarrito = JSON.parse(localStorage.getItem('carrito'))
    let costo = 0;
    pokemonesCarrito.forEach((pokemon, index) => {
        filasPokemones += `
        <tr>
            <td class="text-center">${pokemon.nombre}</td>
            <td class="text-center"><img src="${pokemon.img}"></td>
            <td>${pokemon.efecto}</td>
            <td class="text-center">$${pokemon.costo}.00</td>
            <td class="text-center"><button onclick="eliminarCarrito(${index})" class="btn btn-danger"><i class="fas fa-trash"></i></button></td>
        </tr>
        `  
        costo+=parseInt(pokemon.costo);
    });
    $('#tblCarrito').html('');
    $('#tblCarrito').append(filasPokemones);
    $('#costoTotal').html(``);
    $('#costoTotal').append(`$${costo}.00`);

}

function eliminarCarrito(index){
    let pokemones = JSON.parse(localStorage.getItem('carrito'));
    pokemones.splice(index,1);
    localStorage.setItem('carrito', JSON.stringify(pokemones))
    llenarTabla()
}