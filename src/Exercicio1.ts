
//Alternativa A - Exemplo de uma palavra recebida via parâmetro da função
function ContarVogais(palavra: string){
    let qtdVogais = 0;
    const vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    for (let i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i])) {
            qtdVogais++;
        }
    }
    return qtdVogais;
}
console.log(ContarVogais("Orion Bootcamp")); // Palavra passada por parâmetro da função



//Alternativa B - Exemplo de uma palavra recebida via input do formulário.
const button = document.querySelector(".button") as HTMLButtonElement;
const palavraInput = document.querySelector("#palavra") as HTMLInputElement;
const resultado = document.querySelector(".resultado") as HTMLDivElement;

button.addEventListener('click', (index: Event) => {
    index.preventDefault();
    const palavra = palavraInput.value;
    let qtdVogais = ContarVogais(palavra);
    resultado.textContent = `A palavra ${palavra} possui ${qtdVogais} vogais`;
});