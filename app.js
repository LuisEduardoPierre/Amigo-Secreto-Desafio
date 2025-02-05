//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let friends = [];
let maxNumber = 20;

function insertFriends() {
    let friend = document.querySelector('input').value;

    if (friend == null || friend == undefined || friend == '') {
        alert('Invalid input! Please inform a valid name');
    } 

    if (friends.includes(friend)) {
        alert('The friend is already on this list! Please inform another name that doesnt exists yet');
    } else {
        friends.push(friend);
    }
    cleanInput();
}

function cleanInput() {
    friend = document.querySelector('input');
    friend.value = '';
}

function printFriends(friends) {
    let print = document.getElementById('listaAmigos');
    let quantityOfFriends = friends.length;

    for (let i = 0; i < quantityOfFriends; i++) {
        let friend = document.createElement('li');
        friend.textContent = friends[i];
        print.appendChild(friend);
        
    }

}

function updateFriends(friends) {
    // 1. Obter o elemento da lista
    const lista = document.getElementById('listaAmigos'); // ou document.querySelector('#lista-de-amigos');

    // 2. Limpar a lista existente
    lista.innerHTML = "";

    // 3. Percorrer o array e adicionar cada nome como um elemento <li>
    for (let i = 0; i < friends.length; i++) {
        // Cria um novo elemento <li>
        const itemLista = document.createElement('li');
        
        // Define o conteúdo do <li> como o nome do amigo
        itemLista.textContent = friends[i];

        // 4. Adicionar o elemento <li> à lista
        lista.appendChild(itemLista);
    }
}

    function sortFriend(friends) {
        // 2. Gerar um índice aleatório
        const indiceAleatorio = Math.floor(Math.random() * friends.length);
    
        // 3. Obter o nome sorteado
        const nomeSorteado = friends[indiceAleatorio];
    
        // 4. Mostrar o resultado
        const elementoResultado = document.getElementById('resultado-sorteio');
        elementoResultado.innerHTML = `O amigo sorteado é: <strong>${nomeSorteado}</strong>`;
    }


    

