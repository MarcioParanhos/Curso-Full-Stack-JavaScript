let spaceShip = prompt ("Lance o nome da Braba !")
let chosenOption = prompt ("Qual caracter do nome da sua Espaçonave voce desaja subistituir?")
let updateCharacter = prompt ("Por qual caracter voce deseja subistituir?")
let newSpaceship = " "

for(let i = 0; i < spaceShip.length; i++){
    
    if(spaceShip[i] == chosenOption){
        newSpaceship += updateCharacter
    } else {
        newSpaceship += spaceShip[i]
    }
}

alert ("O novo nome da braba é: " + newSpaceship)
alert ("Encerrando o sistema...")
alert ("Press F5 to restart !")