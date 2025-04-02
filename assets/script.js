console.log("Bienvenido a Scentory, si llegaste aquí es porque algún conocimiento debes tener!, puedes contactarnos para más info");

// Obtener el botón de venta (cta-button)
// Obtener todos los botones con la clase 'cta-button'
const sellButtons = document.getElementsByClassName("cta-button");

// Agregar el evento 'click' a cada botón
for (let i = 0; i < sellButtons.length; i++) {
    sellButtons[i].addEventListener("click", function() {
        var id = sellButtons[i].id; 
        var link = `https://wa.me/+51945462560?text=Buen%20d%C3%ADa%2C%20quisiera%20informaci%C3%B3n%20sobre%20el%20perfume%20${id}`; 
        console.log("Id: ",id)
        window.open(link, '_blank');
    });
}

