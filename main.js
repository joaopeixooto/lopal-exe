alert("Captive Portal da Padaria");
const PASSWORD = "pao123";
let attempts = 0;
while (attempts < 3) {
    let enter_password = prompt("Digite a senha:");
    if (enter_password === PASSWORD) {
        alert("Conectado, bom café!");
        break;
    } else {
        alert("Senha incorreta!");
    }
    if (attempts === 2) {
    alert("Bloquado!");
    }
    attempts++;
}

let meter = 10;
while (meter > 0) {
    console.log(`${meter}`);
    meter--
}
console.log("Feliz Ano Novo!");

let weeks = 0;
let caddy = 0;
let need = 300;
while (caddy < 300){
    let some = Number(prompt("Digite o valor."));
    if (some > 0){
    need -= some;
    caddy += some;
    alert(`Continue juntando, ainda faltam R$${need}.`);
    weeks++;
    console.log(`${weeks} semanas.`);
    } else {
        alert("Valor inválido!");
    }
}
alert(`Parabéns, você juntou ${caddy} em ${weeks} semana(s), agora já pode comprar sua bicicleta. :)`);

let candyNumber = Math.floor(Math.random() * 50) + 1;
let attempt = undefined
if (isNaN(attempt)){
    alert("Número inválido!")
}
while (attempt !== candyNumber) {
    let attempt = parseInt(prompt("Digite um número:"))
    if (attempt === candyNumber){
        alert("Parabéns! Você acertou o número.")
        break
    } else if (attempt > candyNumber){
        alert("Muito alto, tente um número menor.")
    } else if (attempt < candyNumber){
        alert("Muito baixo, tente um número maior.")
    }
}