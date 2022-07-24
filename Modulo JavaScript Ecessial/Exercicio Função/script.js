function slowdown (velocity, printer) {
    let desaceleration = 20
    while (velocity > 0 ) {
        printer (velocity)
        velocity -= desaceleration
    }
    alert ("Nave parada as comportas podem ser abertas")
}

let startVelocity = 150

slowdown (startVelocity, function(velocity){
    console.log ("velocidade atual: " + velocity)
})