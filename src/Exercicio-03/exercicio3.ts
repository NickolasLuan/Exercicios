 type pessoa = {
    id:number,
    name:string,
    bio:string
}

let lista: pessoa[] = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];
    

function contarVogais(palavra: string): number {
    const palavraMinuscula : string = palavra.toLowerCase();
    const vogais: RegExp = /[aeiouáàâãéêíóôõúü]/gi; // Regex para vogais englobando vogais com acentos
    const vogaisEncontradas: string[] | null = palavraMinuscula.match(vogais);
    return vogaisEncontradas ? vogaisEncontradas.length : 0;
}

const button = document.querySelector(".button") as HTMLButtonElement;
const palavraInput = document.querySelector("#palavra") as HTMLInputElement;
const resultado = document.querySelector(".resultado") as HTMLDivElement;

button.addEventListener('click', (index: Event) => {
    index.preventDefault();
    const palavra: string = palavraInput.value;
    let qtdVogais: number = contarVogais(palavra);
    
    if(palavra === "") {
        resultado.textContent = "Por favor, insira uma palavra!";
    } else {
        resultado.textContent = `A palavra ${palavra} possui ${qtdVogais} vogais.`
    }
});

function exibirPessoas() {
    const pessoasList = document.getElementById("pessoasList");
    if (pessoasList) {
        lista.forEach((pessoa) => {
            const pessoaCard = document.createElement("div");
            pessoaCard.classList.add("pessoa-card");
            pessoaCard.innerHTML = `
                <p>ID: ${pessoa.id}</p>
                <h4>${pessoa.name}</h4>
                <p>Biografia: ${pessoa.bio}</p>
            `;
            pessoasList.appendChild(pessoaCard);
        });
    }
}

// Chame a função para exibir as pessoas
exibirPessoas();

const buttonName = document.querySelector("#buttonName") as HTMLButtonElement;
const buttonData = document.querySelector("#buttonData") as HTMLButtonElement;
const buttonBio = document.querySelector("#buttonBio") as HTMLButtonElement;
const resultExercise2 = document.querySelector(".resultExercise2") as HTMLParagraphElement;
const idlist = document.querySelector("#idlist") as HTMLInputElement;

//Função para exibir o name a partir de um id
function obterNamePeloId(id: number): void {
    const pessoaEncontrada = lista.find((pessoa) => pessoa.id === id);

    if (pessoaEncontrada) {
        resultExercise2.textContent = pessoaEncontrada.name;
    } else {
        resultExercise2.textContent = "ID não encontrado.";
    }
}

buttonName.addEventListener('click', (index:Event) => {
    index.preventDefault();
    const id: number = parseInt(idlist.value, 10);
    obterNamePeloId(id)
})


//Função para exibir a Bio a partir de um id
function obterBioPeloId(id: number): void {
    const pessoaEncontrada = lista.find((pessoa) => pessoa.id === id);

    if (pessoaEncontrada) {
        resultExercise2.textContent = pessoaEncontrada.bio;
    } else {
        resultExercise2.textContent = "ID não encontrado.";
    }
}

buttonBio.addEventListener('click', (index:Event) => {
    index.preventDefault();
    const id: number = parseInt(idlist.value, 10);
    obterBioPeloId(id)
})

//Função para remover uma pessoa da lista
function removePessoaPorID(id: number): void {
    const pessoaCard = document.querySelectorAll(".pessoa-card");

    const removerPessoaIndex = lista.findIndex((pessoa) => pessoa.id === id);

    if (removerPessoaIndex !== -1) {
        pessoaCard[removerPessoaIndex].remove();

        // Remove a pessoa da lista
        lista.splice(removerPessoaIndex, 1);
        resultExercise2.textContent = `Pessoa com ID ${id} foi removido(a).`;
    } else {
        resultExercise2.textContent = "Pessoa não encontrada.";
    }
}

buttonData.addEventListener('click', (event: Event) => {
    event.preventDefault();
    const id: number = parseInt(idlist.value, 10);
    removePessoaPorID(id);
});



