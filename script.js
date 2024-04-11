
const result = document.querySelector(".result") // mapeia a variavel result do html pra mostrar o resultado obtido.
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => { // escolha humana

    playTheGame(humanChoice, playMachine()) // chama a escolha humana e da maquina.


}

const playMachine = () => { // escolha maquina
    const choices = ['rock', 'paper', 'scissors'] // array de 3 posiçoes
    const randomNumber = Math.floor(Math.random() * 3) // multiplica o array por 3 e arredonda o valor pra baixo(math.floor)

    return choices[randomNumber] // retorna o numero aleatorio entre (0 e 2) * 3
}

const playTheGame = (human, machine) => { // condiçoes de escolha humana e da máquina
    
    console.log('Humano:' + human + 'Máquina: ' + machine) // mostra na tela a ecolha humana e da maquina e escreve qual foi.

    if (human === machine) { // condiçoes

        result.innerHTML = "Deu Empate!"
    }
    else if (

        (human === 'paper' && machine === 'pedra') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper') 

        ){
            humanScoreNumber++
            humanScore.innerHTML = humanScoreNumber
            result.innerHTML = "Vc Ganhou!"
    }
    else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "A máquina ganhou"
    }

}

/*
-Análise do jogo jokempô

papel-> pedra -> tesoura ->

. pedra ganha de tesoura, mas perde de papel.
. tesoura perde pra pedra , mas ganha de papel.
. papel ganha da pedra, mas perde pra tesoura.

 */