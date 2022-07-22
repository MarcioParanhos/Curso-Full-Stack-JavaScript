let spaceShip = prompt ("Informe o nome da braba !")
let invertedSpaceShip = " "

for (let i = spaceShip.length -1; i >= 0; i--) { 
    if (spaceShip[i] == "e"){
        break
    }
    invertedSpaceShip += spaceShip[i]
}

alert (" O nome original da braba e: " + spaceShip + "\n E o nome invertido e: " + invertedSpaceShip)