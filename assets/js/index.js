let imagen = document.querySelector("img");
let borde = false;

imagen.addEventListener("click", function(){
    if (borde == false){
        imagen.style.border = "7px solid blue";
        borde = true;
    }else{
        imagen.style.border = "";
        borde = false;
    }
})

