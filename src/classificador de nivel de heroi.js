const readline = require('readline-sync');

const heroi = [];
let nomeDoHeroi = "";
let xpDoHeroi;

while (nomeDoHeroi != "fim") {
  nomeDoHeroi = readline.question("Digite o nome do heroi: digite 'fim' para encerrar: ");
  if (nomeDoHeroi === "fim") {
    break;
  }
  xpDoHeroi = parseInt(readline.question("Digite a quantidade de XP do heroi: o valor deve ser um número inteiro positivo: "));
  heroi.push({ nome: nomeDoHeroi, xp: xpDoHeroi });
}

heroi.forEach(function(heroi) {
  if (heroi.xp < 1000) {
    console.log(`O heroi de nome ${heroi.nome} é um heroi de nível Ferro.`);
  } else if (heroi.xp >= 1000 && heroi.xp < 2000) {
    console.log(`O heroi de nome ${heroi.nome} é um heroi de nível Bronze.`);
  } else if (heroi.xp >= 2000 && heroi.xp < 5000) {
    console.log(`O heroi de nome ${heroi.nome} é um heroi de nível Prata.`);
  } else if (heroi.xp >= 5000 && heroi.xp < 7000) {
    console.log(`O heroi de nome ${heroi.nome} é um heroi de nível Ouro.`);
  } else if (heroi.xp >= 7000 && heroi.xp < 8000) {
    console.log(`O heroi de nome ${heroi.nome} é um heroi de nível Platina.`);
  } else if (heroi.xp >= 8000 && heroi.xp < 9000) {
    console.log(`O heroi de nome ${heroi.nome} é um heroi de nível Ascendente.`);
  } else if (heroi.xp >= 9000 && heroi.xp < 10000) {
    console.log(`O heroi de nome ${heroi.nome} é um heroi de nível Imortal.`);
  } else if (heroi.xp >= 10000) {
    console.log(`O heroi de nome ${heroi.nome} é um heroi de nível Radiante.`);
  } else {
    console.log("XP inválido.");
  }
});