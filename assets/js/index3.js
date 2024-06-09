const ingresar = document.querySelector("#ingresar");

ingresar.addEventListener("click",function(){
    const num1 = document.querySelector("#numeracion1").value;
    const num2 = document.querySelector("#numeracion2").value;
    const num3 = document.querySelector("#numeracion3").value;

    let password = num1 + num2 + num3

    if(password == 911){
        document.querySelector("p").innerHTML = "Contraseña 1 correcta"
    }else if(password == 714){
        document.querySelector("p").innerHTML = "Contraseña 2 correcta"
    }else{
        document.querySelector("p").innerHTML = "Contraseña incorrecta"
    }
})