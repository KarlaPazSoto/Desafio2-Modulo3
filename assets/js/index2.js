const verificar = document.querySelector("#botonVerificar");

verificar.addEventListener("click", function(){
    const input1 = parseInt(document.querySelector("#inputUno").value);
    const input2 = parseInt(document.querySelector("#inputDos").value);
    const input3 = parseInt(document.querySelector("#inputTres").value);
    let total = input1 + input2 + input3;

    if(total <= 10){
        document.querySelector("p").innerHTML = "Llevas " + total + " stickers";
    }else{
        document.querySelector("p").innerHTML = "Llevas demasiados stickers";
    }
})