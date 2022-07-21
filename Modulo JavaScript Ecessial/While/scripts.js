let warpCount = 0
let chosenOption = " "

let nameSpaceShip = prompt("Lance o nome da Braba !")
chosenOption = prompt("Deseja entrar em dobra espacial na braba?\n1 - Sim\n2 - Não")

while (chosenOption == "1") {
    warpCount += 1
    chosenOption = prompt("Deseja realizar a proxima dobra na braba?\n1 - Sim\n2 - Não")
}

alert("A Braba: " + nameSpaceShip + "\nQuantidade de dobras: " + warpCount)
