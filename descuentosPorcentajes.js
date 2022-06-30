function calcularPorcentajesConDescuentos(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function calculoPrecioDescuento(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValor = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValor = inputDiscount.value;

    const precioConDescuento = calcularPorcentajesConDescuentos(priceValor, discountValor);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
}