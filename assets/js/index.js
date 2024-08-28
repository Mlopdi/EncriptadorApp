function encriptar() {
    let texto = document.getElementById("input-area");
    var patt = new RegExp(/^([a-z\s]+)?$/g);
    if (patt.test(texto.value)) {
        if (texto.value !== "") {
            ocultarMuneco();
            escribir(codificarTexto(texto.value));
        } else {
            mostrarMuneco();
        }
    } else {
        escribir("Error! Solo se aceptan letras minúsculas, sin acentos ni caracteres especiales.");
    }
}

function desencriptar() {
    let texto = document.getElementById("input-area");
    var patt = new RegExp(/^[a-z\s]+$/g);
    if (patt.test(texto.value)) {
        if (texto.value !== "") {
            ocultarMuneco();
            escribir(decodificarTexto(texto.value));
        } else {
            mostrarMuneco();
        }
    } else {
        escribir("Error! Solo se aceptan letras minúsculas, sin acentos ni caracteres especiales.");
    }
}

function copiar() {
    let areaResultado = document.getElementById("texto-desencriptado");
    let areaTexto = document.getElementById("input-area");

    areaTexto.value = areaResultado.innerHTML;
}

function ocultarMuneco() {
    let img = document.getElementById("img-hombresito");
    let txt = document.getElementById("ladera-contenedor-texto");
    let txtDecriptado = document.getElementById("contenedor-texto-desencriptado");
    let btn = document.getElementById("btn-copiar");

    txtDecriptado.removeAttribute("hidden");
    btn.removeAttribute("hidden");
    img.setAttribute("hidden", true);
    txt.setAttribute("hidden", true);
}

function mostrarMuneco() {
    escribir("")
    let img = document.getElementById("img-hombresito");
    let txt = document.getElementById("ladera-contenedor-texto");
    let txtDecriptado = document.getElementById("contenedor-texto-desencriptado");
    let btn = document.getElementById("btn-copiar");

    txtDecriptado.setAttribute("hidden", true);
    btn.setAttribute("hidden", true);
    img.removeAttribute("hidden");
    txt.removeAttribute("hidden");
}

function escribir(texto) {
    let txt = document.getElementById("texto-desencriptado");
    txt.innerHTML = texto;
}

function codificarTexto(texto) {
    return texto.replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
}

function decodificarTexto(texto) {
    return texto.replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");
}