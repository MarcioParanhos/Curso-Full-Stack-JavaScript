alert ("As informações a seguir são relacionadas a nave TheHeels!")
let distance = prompt (" Informe a distancia da nave em anos luz !")
let medida = prompt ("Em qual medida de distancia você deseja essa informação?\n1 - Parsec.\n2 - Unidade Astronomica.\n3 - Quilometros.")

switch (medida) {
    case "1":
        valueUnity = "Parsec"
        valueConversion = Math.round(distance / 3,262) 
        alert("A nave esta a uma distancia de " + valueConversion + " Parsec.")
    break
    case "2":
        valueUnity = "Unidade Astronomica"
        valueConversion = Math.round(distance * 63240)
        alert("A nave esta a uma distancia de " + valueConversion + " Unidades Astronomicas")
    break
    case "3":
        valueUnity = "Quilometros"
        valueConversion = Math.round(distance * 9,461e+12)
        alert("Unidade de conversão escolhilha: " + valueUnity + "\nA nave esta a uma distancia de " + valueConversion + " Quilometros")
    break
    default:
    alert("Opção invalida")
}
alert("Encerrando Sistema...")
alert("Aperte F5 para reiniciar o Sistema")