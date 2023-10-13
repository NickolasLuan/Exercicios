import { pessoa, lista } from "./lista";

//A) CRIE UMA FUNÇÃO QUE RETORNE A BIO DO ID PASSADO.
function obterBio(id: number, listaPessoas: pessoa[]): string{
    const pessoa = listaPessoas.find((pessoa) => pessoa.id === id);
    return pessoa ? pessoa.bio : "ID Não encontrado."
}

console.log(obterBio(3,lista));


//B)CRIE UMA FUNÇÃO QUE RETORNE O NAME DO ID PASSADO
function obterName(id: number, listaPessoas: pessoa[]): string{
    const pessoa = listaPessoas.find((pessoa) => pessoa.id === id);
    return pessoa ? pessoa.name : "ID não encontrado."
}

console.log(obterName(3,lista));


//C)CRIE UMA FUNÇÃO QUE APAGUE UM ITEM DA LISTA A PARTIR DE UM ID PASSADO
function removePessoa(id: number, listaPessoas: pessoa[]): string {
    const removerPessoaIndex = listaPessoas.findIndex((pessoa) => pessoa.id === id);
  
    if (removerPessoaIndex !== -1) {
      const pessoaRemovida = listaPessoas.splice(removerPessoaIndex, 1)[0];
      return pessoaRemovida.name + " foi removido(a).";
    } else {
      return "Pessoa não encontrada.";
    }
  }

  console.log(removePessoa(1,lista))


//D)CRIE UMA FUNÇÃO QUE ALTERE A BIO OU O NAME A PARTIR DE UM ID PASSADO
function alterarBioOuNome(id: number, novaBio?: string, novoNome?: string): pessoa[] {
    const itemIndex = lista.findIndex((item) => item.id === id);
  
    if (itemIndex === -1) {
        console.log("ID não encontrado.");
        return lista;
      }
    
      const item = lista[itemIndex];
      if (novaBio !== undefined) item.bio = novaBio;
      if (novoNome !== undefined) item.name = novoNome;
    
      console.log("Alterações feitas.");
      return lista;
  }
  
  console.log(alterarBioOuNome(5, "Orion Bootcamp", "Nickolas Luan"));