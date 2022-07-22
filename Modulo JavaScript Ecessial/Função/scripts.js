let spaceShipName = prompt("Lance o nome da braba !")
let velocity = 0
let chosenOption

function showMenu() {
    let option
    while (option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("Oque deseja fazer?\n" +
            "1 - Acelerar 5km/s\n" +
            "2 - Desacelerar 5km/s\n" +
            "3 - Imprimir dados de bordo\n" +
            "4 - Sair do programa")
    }
    return option
}

function speedUp(velocity) {
    let newVelocity = velocity + 5
    return newVelocity
}

function slowDown(velocity) {
    let newVelocity = velocity - 5
    if (newVelocity < 0) {
        newVelocity = 0
    }
    return newVelocity
}

function printData(name, velocity) {
    alert("Espaçonave " + name + "\nVelocidade: " + velocity + " km/s")
}

do {
    chosenOption = showMenu()
    switch (chosenOption) {
        case "1":
            velocity = speedUp(velocity)
            break
        case "2":
            velocity = slowDown(velocity)
            break
        case "3":
            printData(spaceShipName, velocity)
            break
        default:
            alert("Encerrando programa de bordo")
    }
} while (chosenOption != "4")
