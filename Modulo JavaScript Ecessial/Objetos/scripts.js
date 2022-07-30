let spaceShip = {
    velocidade: 0,
    speedUp: function (aceleração) {
        this.velocidade += aceleração
    }
}

function registrarNave() {
    nave.nome = prompt ("Informe o nome da nave")
    nave.tipo = prompt ("informe o tipo da nave")
    nave.maximaVelocidade = Number(prompt ("Informe a velocidade maxima da nave (Km/s)"))
}

function aceleracao() {
    let aceleracao = Number(prompt ("Quanto voce quer acelerar? (km/s"))
    spaceShip.speedUp(aceleracao)
    if (spaceShip.velocidade > spaceShip.maximaVelocidade) {
        alert("Velocidade maxima ultrapassada!\n Velocidade da nave: " + spaceShip.velocidade + " Km/s")
    }
}

function parar () {
    alert ("Nome: " + spaceShip.nome + "\nTipo: " + spaceShip.tipo + "\nVelocidade da nave: " + spaceShip.velocidade)
    spaceShip.velocidade = 0
}