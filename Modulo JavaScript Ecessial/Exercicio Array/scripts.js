const hitchedSpaceships = [
    ["Fênix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let maisQnove = hitchedSpaceships.filter (spaceShip => {
    return spaceShi[1] > 9
}).map (spaceShip => {
    return spaceShip[0]
})

let engatePendente = hitchedSpaceships.findIndex(spaceShip => {
    return spaceShip[2] = false
})

let caixaAlta = hitchedSpaceships.map (spaceShip => {
    return spaceShip[0].toUpperCase
})

// var with9trip = hitchedSpaceships.filter(element => {return element[1] >= 9})
// console.log(with9trip);

// var findSpace = hitchedSpaceships.findIndex(find => {return find[2] == false})
// console.log(findSpace);

// var upcased = hitchedSpaceships.map(upcase => {return upcase[0].toUpperCase()})
// console.log(upcased);

// var alerta = ("Nave com 9 ou mais tripulantes: \n" + with9trip.join("\n") + 
// "\n\nNaves não engatadas: \n" + findSpace + "\n\nNomes destacados: \n" 
// + upcased.join("\n"))

// alert (alerta)