function somar(){
    let numero1 = Number(document.querySelector("#numero1").value);
    let numero2 = Number(document.querySelector("#numero2").value)

    let resultado = numero1 + numero2;

    document.querySelector("#resultado").textContent = "Resultado: " + resultado;
}

function subtrair(){

     let numero1 = Number(document.querySelector("#numero1").value);
     let numero2 = Number(document.querySelector("#numero2").value)

     let resultado = numero1 - numero2;

     document.querySelector("#resultado").textContent = "Resultado: " + resultado;
}

function multiplicar(){

    let numero1 = Number(document.querySelector("#numero1").value);
    let numero2 = Number(document.querySelector("#numero2").value)

    let resultado = numero1 * numero2;

    document.querySelector("#resultado").textContent = "Resultado: " + resultado;
}

function dividir(){

    let numero1 = Number(document.querySelector("#numero1").value);
    let numero2 = Number(document.querySelector("#numero2").value)

    if (numero2 === 0) {
        document.querySelector("#resultado").textContent = "Resultado: " + resultado;
        
    }

    let resultado = numero1 / numero2;

    document.querySelector("#resultado").textContent = "Resultado: " + resultado;
}

function limpar(){
    document.querySelector("#numero1").value = "";
    document.querySelector("#numero2").value = "";

    document.querySelector("#resultado").textContent = "resultado:";
}