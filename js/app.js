const selectPropiedad = document.getElementById('propiedad');
const selectUbicacion = document.getElementById('ubicacion');
const inputMetros2 = document.getElementById('metros2');
const btnCotizar = document.getElementById('cotizar');
const spanPoliza = document.getElementById('valorPoliza');

btnCotizar.addEventListener('click', () => {
    const propiedad = selectPropiedad.value;
    const ubicacion = selectUbicacion.value;
    const metros2 = inputMetros2.value;

    if(propiedad === null){
        alert('Seleccione una propiedad');
        spanPoliza.innerText = "";
    } else if (ubicacion === null){
        alert('Seleccione una ubicación');
        spanPoliza.innerText = "";
    } else if (metros2 <= 0){
        alert('Ingrese un valor numérico válido');
        spanPoliza.innerText = "";
    } else {
        const valorPoliza = calcularPoliza(propiedad, ubicacion, metros2);
        spanPoliza.innerText = valorPoliza.toFixed(2);
    }
})

function calcularPoliza(propiedad, ubicacion, metros2){
    let valorPoliza = 0;
        
    valorPoliza = propiedad * ubicacion * metros2;

    return valorPoliza;

}