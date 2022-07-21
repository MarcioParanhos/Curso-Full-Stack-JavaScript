let entradaDoUsuario = prompt ("Digite a data de partida (formato DD/MM/YYYY)")

let entradaDate = moment (entradaDoUsuario, "DD/MM/YYYY")

let today = moment()

let dateDiference = hoje - entradaDate

let chosenOption = prompt ("Escolha como gostaria de exibir o tempo de partida\n1 - Segundos\n2 - Minutos\n3 - Horas\n4 - Dias")

if (chosenOption == "1") {
    let secounds = Math.round(dateDiference / 1000)
    alert("Tempo de vôo: " + secounds + " Segundos")
} else if (chosenOption == "2") {
    let minutes = Math.round(dateDiference / 1000 / 60)
    alert("Tempo de vôo: " + minutes + " Minutos")
} else if (chosenOption == "3") {
    let hours = Math.round(dateDiference / 1000 / 3600)
    alert("Tempo de vôo: " + hours + " Horas")
} else if (chosenOption == "4") {
    let days = Math.round(dateDiference / 1000 / 3600 / 24)
    alert("Tempo de vôo: " + days + " Dias")
} else {
    alert("Opção Invalida")
}