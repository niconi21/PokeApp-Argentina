$('#btnMenu').click(() => {
    let items = document.getElementsByClassName('nav-item');
    for (let index = 0; index < items.length; index++) {
        items[index].classList.toggle('oculto')

    }
})
function resize() {
    var widthBrowser = window.outerWidth;
    if (widthBrowser > 800) {
        let items = document.getElementsByClassName('nav-item');
        for (let index = 0; index < items.length; index++) {
            items[index].classList.remove('oculto')

        }
    }
}

