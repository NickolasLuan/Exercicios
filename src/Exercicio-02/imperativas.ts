import { pessoa, lista } from "./lista";

//A) CRIE UMA FUNÇÃO QUE RETORNE A BIO DO ID PASSADO.
function obterBioPeloId(id: number): string | undefined {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].id === id) {
        return lista[i].bio;
      }
    }
    // Se o ID não for encontrado, retorne uma mensagem de erro ou um valor padrão
    console.log("Bio não encontrada.");
  }

  console.log(obterBioPeloId(2)) // Exemplo de id passado



//B) CRIE UMA FUNÇÃO QUE RETORNE O NAME DO ID PASSADO
function obterNamePeloId(id: number): string | undefined {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].id === id) {
        return lista[i].name;
      }
    }
    // Se a bio não for encontrada.
    console.log("Bio não encontrada.");
  }

  console.log(obterNamePeloId(2)) // Exemplo de id passado


//C) CRIE UMA FUNÇÃO QUE APAGUE UM ITEM DA LISTA A PARTIR DE UM ID PASSADO
function deletarItem(id: number): void{
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].id === id) {
        lista.splice(i, 1);
        console.log("Item deletado.");
        return;
      }
    }
    // Se o item não for encontrado.
    console.log("Item não encontrado");
  }

 (deletarItem(2)) // Exemplo de id passado
 

 //D)CRIE UMA FUNÇÃO QUE ALTERE A BIO OU O NAME A PARTIR DE UM ID PASSADO
 function alterarBioOuNome(id: number, novaBio?: string, novoNome?: string): void {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].id === id) {
        if (novaBio !== undefined) {
          lista[i].bio = novaBio;
        }
        if (novoNome !== undefined) {
          lista[i].name = novoNome;
        }
        console.log("Alterações feitas.");
        return;
      }
    }
    console.log("ID não encontrado.");
  }

  alterarBioOuNome(3, "New Rizon Bootcamp", "Nickolas Luan"); 
