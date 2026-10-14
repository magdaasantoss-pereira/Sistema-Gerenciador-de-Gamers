const prompt = require ("prompt-sync") ();

let time = [];
let continuar = true;

function mostrarMenu(){
   console.log("\n============================");
   console.log("-----------SISTEMA DE GAMERS-------------")
   console.log("1 - Cadastrar");
   console.log("2 - Deletar");
   console.log("3 - Mostrar equipe");
   console.log("4 - Cálculo da Média da Equipe: ");
   console.log("5 - Buscar Jogador");
   console.log("6 - Sair");
}

function mostraEquipe(){
    if (time.length === 0) {
      return;    
   }
   for(let i = 0; i < time.length; i++ ){
      let jogador = time[i];
      console.log((i+ 1) + ". " + jogador.nome + " | Função: " + jogador.funcao + " | Pontuação: " + jogador.pontuacao);
   }
}

function cadastrarJogador() {
   let nomeJogador = prompt("Digite o nome do Jogador: ");
   let funcaoJogador = prompt("Digite a função no time: ");
   let pontuacaoJogador = Number(prompt("Digite a pontuação: "));
  
   if(isNaN(pontuacaoJogador)){
      console.log("Pontuação Inválida!");
      return;
   }else {
      let recruta = {
         nome: nomeJogador,
         funcao: funcaoJogador,
         pontuacao: pontuacaoJogador,
      }
         time.push(recruta);
         console.log("Jogador " + nomeJogador + " foi cadastrado com sucesso!");
         console.log("-------------------------- ");
   }
        
}

function deletarJogador(){
   if (time.length === 0) {
      console.log("Nenhum jogador cadastrado. ");
      return;    
   }
   
   let  nomeDeletado = prompt("Digite o nome a ser deletado: ");
   let indexDeletado = -1;

    for(let i = 0; i < time.length; i++ ){

      if(time[i].nome === nomeDeletado){
         indexDeletado = i;
         break;
      }
    }

   let index = time.indexOf(nomeDeletado);

   if (indexDeletado === -1){
       console.log("Jogador não encontrado. ");
       return;
   } 

   time.splice(indexDeletado, 1);
   console.log("Jogador deletado com sucesso! ");
}
  
function calculodaMedia(){
   if(time.length ===0){
      console.log("Nenhum Jogador cadastrado. ");
      return;
   }
   
   let totalPontos = 0;
   
   for (let i =0; i < time.length; i++){
      totalPontos = totalPontos + time[i].pontuacao;
   }

   let mediaPontos = totalPontos / time.length;

   console.log("o time possui um pontuação média de: ", mediaPontos);
}

// O Desafio Final: Função de Busca 

function buscarJogador() { 
 
   let nomeDesejado = prompt("Digite o nome do Jogador Desejado: ");
   console.log("Buscando por: " + nomeDesejado + "...");

   let encontrou = false; // Começamos assumindo que não encontramos ninguém 

   // O loop passa por todas as gavetas (posições) do nosso Array 

   for (let i = 0; i < time.length; i++) { 

      let jogadorAtual = time[i]; // Pegamos a ficha atual para ler 

      // Comparamos o nome da ficha com o nome procurado 

      if (jogadorAtual.nome === nomeDesejado) { 

         console.log("JOGADOR ENCONTRADO!");

          console.log("Nome: " + jogadorAtual.nome + " | Pontos: " + jogadorAtual.pontuacao); 

         encontrou = true; // Mudamos o status! 

         break; // Já achamos quem queríamos, podemos parar o loop 

      } 

   } 

   // Se o loop terminar e a variável 'encontrou' continuar falsa... 

   if (encontrou === false) { 

      console.log("O jogador " + nomeDesejado + " não faz parte da nossa equipe."); 

   } 

} 

while(continuar === true){
   mostrarMenu();
   let opcao = prompt("Digitar sua opcao: ")
     
   if (opcao === "1"){
      cadastrarJogador();
     
   } else if (opcao === "2"){
      deletarJogador();

   } else if (opcao === "3"){
      mostraEquipe();

   } else if (opcao === "4"){
      calculodaMedia();

   } else if (opcao === "5"){
     buscarJogador();

   }else if (opcao === "6"){
     continuar = false;

   }   
   
   else {
      console.log("Opção inválida, digite outra opção... ");
   }
}