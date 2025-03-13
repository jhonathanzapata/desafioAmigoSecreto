// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Variables

let listaDeAmigos = [];


// Funciones principales

function agregarAmigo() {
    let textoUsuario = document.getElementById('amigo').value;
    validacionDeVacioYAdicionDeEntrada(textoUsuario);
    limpiarCaja('amigo');
    generarListaAmigos();
    
}

function sortearAmigo() {
    let lista= document.getElementById('listaAmigos');
    lista.innerHTML="";
    validacionDelistaVaciaYGenerarAleatorio();
}

// Funciones secundarias

function generarListaAmigos() {
    let lista= document.getElementById('listaAmigos');
    lista.innerHTML="";
    crearLi(lista);  
}

function limpiarCaja(id) {
    document.getElementById(id).value = '';
}

function crearLi(lista) {
    listaDeAmigos.forEach(element => {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(element));
        lista.appendChild(li);
    });
}

function validacionDeVacioYAdicionDeEntrada(texto) {
    if (texto=="") {
        alert(`Por favor, inserte un nombre.`);
    } else {
        listaDeAmigos.push(texto);
    }
}

function validacionDelistaVaciaYGenerarAleatorio() {
    if (listaDeAmigos.length==0) {
        alert(`La lista de amigos esta vacía`);
    } else {
        generarNumeroAleatorioYCrearListaLi();
    }
}

function generarNumeroAleatorioYCrearListaLi() {
        let numeroGenerado =  Math.floor(Math.random()*(listaDeAmigos.length-1))+1;
        let nombreSeleccionado=listaDeAmigos[numeroGenerado];
        let ulNombreSeleccionado= document.getElementById('resultado');
        ulNombreSeleccionado.innerHTML=`El amigo secreto sorteado es ${nombreSeleccionado}`;
}


