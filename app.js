let listaNomes = [];
let numeroLimite = 10;

function adicionarAmigo() {
    let name = document.getElementById("amigo").value;
    if (name == '') {
        alert('Por favor, insira um nome válido');
    }else{
        listaNomes.push(name);
        console.log(listaNomes);
        exibirListaAmigos();
    }
    limpaCampo();
}

function limpaCampo() {
    let limpa = document.querySelector('input');
    limpa.value = '';
}

function exibirListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    listaNomes.forEach(listaNomes => {
        let li = document.createElement('li');
        li.textContent = listaNomes;
        lista.appendChild(li);
    });
}

function sortearAmigo() {

    if (listaNomes == '') {
    alert('Escreva uma lista de nomes valida');
    }else{
        let aleatorio = Math.floor(Math.random() * listaNomes.length);
        let nomeSorteado = listaNomes[aleatorio];
    
        let resultado = document.querySelector("#resultado");
    
        listaNomes = [];
        document.getElementById('listaAmigos').innerHTML = '';
        
        return resultado.innerHTML = `O amigo secreto sorteado é: <strong>${nomeSorteado}</strong>`;
    }
    resultado.innerHTML = '';
}