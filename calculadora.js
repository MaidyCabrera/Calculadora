var botones = ["", "AC", "ON", "OFF", "7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "0", ".", "=", "/"];
var operacionActual = "";

function renderizarGUI() {

    //Div Calculadora
    const divCalculadora = document.createElement("div")
    divCalculadora.setAttribute("id", "calculadora");
    divCalculadora.setAttribute("class", "text-center")
    divCalculadora.setAttribute("style", "width:50%; margin:0 auto; background-color: pink; padding:20px")
    document.body.appendChild(divCalculadora);

    //Div Pantalla
    const divPantalla = document.createElement("div")
    divPantalla.setAttribute("id", "divPantalla");
    divPantalla.setAttribute("style", "padding:30px; border:5px white")
    divCalculadora.appendChild(divPantalla);

    //Pantalla
    const pantalla = document.createElement("input")
    pantalla.setAttribute("id", "pantalla");
    pantalla.setAttribute("type", "text");
    pantalla.setAttribute("value", "");
    pantalla.setAttribute("disabled", "true");
    pantalla.setAttribute("class", "form-control text-left; background-color: pink; height:30px ")
    //Agregar pantalla en la divPantalla
    divPantalla.appendChild(pantalla);

    //Div Botones
    const divBotones = document.createElement("div")
    divBotones.setAttribute("id", "botones");
    divCalculadora.appendChild(divBotones);

    for (let i = 0; i < botones.length; i++) {

        //crear Filas
        if (i % 4 == 0) {
            const divFila = document.createElement("div")
            divFila.setAttribute("class", "row")
            divBotones.appendChild(divFila)
        }
        let boton = document.createElement("button")
        boton.setAttribute("id", "boton" + botones[i]);
        boton.setAttribute("class", "btn btn--pink col-3 font-weight-bold")
        boton.innerHTML = botones[i]

        // Agrega un escuchador de eventos
        boton.addEventListener("click", () => {
            procesarEvento(boton);
        })
        divBotones.lastChild.appendChild(boton);
    }
}

// function procesarEvento(boton) {
//     console.log(boton.innerHTML)
//     let miPantalla = document.getElementById("pantalla");

//     if (boton.innerHTML === "AC") {
//         miPantalla.value = "0";
//     } else if (boton.innerHTML === "ON") {
//         miPantalla.value = "0";
//     } else if (boton.innerHTML === "OFF") {
//         miPantalla.value = "";
//     } else if (miPantalla.value === "0") {
//         miPantalla.value = boton.innerHTML;
//     } else if (boton.innerHTML !== "=") {
//         miPantalla.value += boton.innerHTML;
//     } else {
//         try {
//             let resultado = math.evaluate(miPantalla.value);
//             miPantalla.value = resultado;
//         } catch (error) {
//             let resultado = "Syntax errors";
//             miPantalla.value = resultado;
//         }
//     }
// }

function procesarEvento(boton) {
    console.log(boton.innerHTML)
    let miPantalla = document.getElementById("pantalla");

    if (boton.innerHTML === "AC") {
        miPantalla.value = "0";
        operacionActual = "";
    } else if (boton.innerHTML === "ON") {
        miPantalla.value = "0";
        operacionActual = "";
    } else if (boton.innerHTML === "OFF") {
        miPantalla.value = "";
        operacionActual = "";
    } else if (miPantalla.value === "0") {
        miPantalla.value = boton.innerHTML;
        operacionActual = boton.innerHTML;
    } else if (boton.innerHTML !== "=") {
        miPantalla.value += boton.innerHTML;
        operacionActual += boton.innerHTML;
    } else {
        try {
            let resultado = math.evaluate(miPantalla.value);
            miPantalla.value = operacionActual + "=" + resultado;
            operacionActual = resultado.toString();
        } catch (error) {
            let resultado = "Syntax errors";
            miPantalla.value = resultado;
            operacionActual = "";
        }
    }
}


renderizarGUI();