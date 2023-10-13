//Alternativa A - Exemplo de uma palavra recebida via parâmetro da função
export function contarVogais(palavra: string): number {
    const palavraMinuscula : string = palavra.toLowerCase();
    const vogais: RegExp = /[aeiouáàâãéêíóôõúü]/gi; // Regex para vogais englobando vogais com acentos
    const vogaisEncontradas: string[] | null = palavraMinuscula.match(vogais);

    return vogaisEncontradas ? vogaisEncontradas.length : 0;

}

const palavra : string = "Bootcamp";
console.log(contarVogais(palavra))



//Alternativa B - Exemplo de uma palavra recebida via input do formulário.
const button = document.querySelector(".button") as HTMLButtonElement;
const palavraInput = document.querySelector("#palavra") as HTMLInputElement;
const resultado = document.querySelector(".resultado") as HTMLDivElement;

button.addEventListener('click', (index: Event) => {
    index.preventDefault();
    const palavra: string = palavraInput.value;
    let qtdVogais: number = contarVogais(palavra);
    resultado.textContent = `A palavra ${palavra} possui ${qtdVogais} vogais`;
});
