let friends = [];

function insertFriends() {
    let friend = document.querySelector('input').value;

    if (friend == null || friend == undefined || friend == '') {
        alert('Invalid input! Please inform a valid name');
        return;
    } 

    if (friends.includes(friend)) {
        alert('The friend is already on this list! Please inform another name that doesnt exists yet');
    } else {
        friends.push(friend);
        updateFriends(friends);
    }

    cleanInput();
}

function cleanInput() {
    let input = document.querySelector('input');
    input.value = '';
}


function updateFriends(friends) {

    const lista = document.getElementById('listaAmigos');

    lista.innerHTML = "";

    for (let i = 0; i < friends.length; i++) {
        const itemLista = document.createElement('li');
        
        itemLista.textContent = friends[i];

        lista.appendChild(itemLista);
    }
}

    function sortFriend() {

        if (friends.length === 0) {
            alert("Não há amigos disponíveis para sortear!");
            return; // Encerra a função se o array estiver vazio
        }

        // 2. Gerar um índice aleatório
        const indiceAleatorio = Math.floor(Math.random() * friends.length);
    
        // 3. Obter o nome sorteado
        const nomeSorteado = friends[indiceAleatorio];
    
        // 4. Mostrar o resultado
        const elementoResultado = document.getElementById('resultado');
        elementoResultado.innerHTML = `O amigo sorteado é: <strong>${nomeSorteado}</strong>`;
    }


    

