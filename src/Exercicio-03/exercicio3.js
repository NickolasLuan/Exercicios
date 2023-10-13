"use strict";
let lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
function contarVogais(palavra) {
    const palavraMinuscula = palavra.toLowerCase();
    const vogais = /[aeiouáàâãéêíóôõúü]/gi; // Regex para vogais englobando vogais com acentos
    const vogaisEncontradas = palavraMinuscula.match(vogais);
    return vogaisEncontradas ? vogaisEncontradas.length : 0;
}
const button = document.querySelector(".button");
const palavraInput = document.querySelector("#palavra");
const resultado = document.querySelector(".resultado");
button.addEventListener('click', (index) => {
    index.preventDefault();
    const palavra = palavraInput.value;
    let qtdVogais = contarVogais(palavra);
    if (palavra === "") {
        resultado.textContent = "Por favor, insira uma palavra!";
    }
    else {
        resultado.textContent = `A palavra ${palavra} possui ${qtdVogais} vogais.`;
    }
});
function exibirPessoas() {
    const pessoasList = document.getElementById("pessoasList");
    if (pessoasList) {
        lista.forEach((pessoa) => {
            const pessoaCard = document.createElement("div");
            pessoaCard.classList.add("pessoa-card");
            pessoaCard.innerHTML = `
                <h3>ID: ${pessoa.id}</h3>
                <h4>${pessoa.name}</h4>
                <p>Biografia: ${pessoa.bio}</p>
            `;
            pessoasList.appendChild(pessoaCard);
        });
    }
}
// Chame a função para exibir as pessoas
exibirPessoas();
const buttonName = document.querySelector("#buttonName");
const buttonData = document.querySelector("#buttonData");
const buttonBio = document.querySelector("#buttonBio");
const resultExercise2 = document.querySelector(".resultExercise2");
const idlist = document.querySelector("#idlist");
//Função para exibir o name a partir de um id
function obterNamePeloId(id) {
    const pessoaEncontrada = lista.find((pessoa) => pessoa.id === id);
    if (pessoaEncontrada) {
        resultExercise2.textContent = pessoaEncontrada.name;
    }
    else {
        resultExercise2.textContent = "ID não encontrado.";
    }
}
buttonName.addEventListener('click', (index) => {
    index.preventDefault();
    const id = parseInt(idlist.value, 10);
    obterNamePeloId(id);
});
//Função para exibir a Bio a partir de um id
function obterBioPeloId(id) {
    const pessoaEncontrada = lista.find((pessoa) => pessoa.id === id);
    if (pessoaEncontrada) {
        resultExercise2.textContent = pessoaEncontrada.bio;
    }
    else {
        resultExercise2.textContent = "ID não encontrado.";
    }
}
buttonBio.addEventListener('click', (index) => {
    index.preventDefault();
    const id = parseInt(idlist.value, 10);
    obterBioPeloId(id);
});
//Função para remover uma pessoa da lista
function removePessoaPorID(id) {
    const pessoaCard = document.querySelectorAll(".pessoa-card");
    const removerPessoaIndex = lista.findIndex((pessoa) => pessoa.id === id);
    if (removerPessoaIndex !== -1) {
        pessoaCard[removerPessoaIndex].remove();
        // Remove a pessoa da lista
        lista.splice(removerPessoaIndex, 1);
        resultExercise2.textContent = `Pessoa com ID ${id} foi removido(a).`;
    }
    else {
        resultExercise2.textContent = "Pessoa não encontrada.";
    }
}
buttonData.addEventListener('click', (event) => {
    event.preventDefault();
    const id = parseInt(idlist.value, 10);
    removePessoaPorID(id);
});
const buttonChange = document.querySelector("#buttonChange");
const changeList = document.querySelector("#changeList");
const nameOrBio = document.querySelector("#nameOrBio");
const newContent = document.querySelector("#newContent");
const resultExercise = document.querySelector(".resultExercise");
const pessoaCard = document.querySelectorAll(".pessoa-card");
function alterarBioOuNome(id, propriedade, novoConteudo) {
    const itemIndex = lista.findIndex((item) => item.id === id);
    if (itemIndex === -1) {
        resultExercise.textContent = "ID não encontrado.";
        return;
    }
    const item = lista[itemIndex];
    const pessoaCardElement = pessoaCard[itemIndex];
    if (propriedade === "name") {
        item.name = novoConteudo;
        pessoaCardElement.querySelector("h4").textContent = novoConteudo;
    }
    else if (propriedade === "bio") {
        item.bio = novoConteudo;
        const paragrafoBiografia = pessoaCardElement.querySelector("p");
        if (paragrafoBiografia) {
            paragrafoBiografia.textContent = `Biografia: ${novoConteudo}`;
        }
    }
    resultExercise.textContent = "Alterações feitas.";
}
buttonChange.addEventListener('click', (event) => {
    event.preventDefault();
    const id = parseInt(changeList.value, 10);
    const propriedade = nameOrBio.value;
    const novoConteudo = newContent.value;
    alterarBioOuNome(id, propriedade, novoConteudo);
});
