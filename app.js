// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const nameInput = document.getElementById('amigo');
const addButton = document.querySelector('.button-add');
const friendsList = document.getElementById('listaAmigos');
const resultList = document.getElementById('resultado');
const drawButton = document.querySelector('.button-draw');

function agregarAmigo() {
    const nombre = nameInput.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    nameInput.value = "";
    actualizarLista();
}

function actualizarLista() {
    friendsList.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        friendsList.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Por favor, agrega al menos un nombre.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    resultList.innerHTML = `El amigo secreto es: ${amigoSorteado}`;
}

addButton.addEventListener('click', agregarAmigo);
drawButton.addEventListener('click', sortearAmigo);