function check() {
    let price = Number(document.getElementById("betrag").value)

    // select: netto to brutto or brutto to netto
    let zuBrutto = document.getElementById("brutto").checked ? true : false

    //select: prozentsatz
    let steuer = document.getElementById("satz1").checked ? 0.19 : 0.07

    let taxHigh = Number(steuer * price)
    let high = Number(taxHigh + price)

    let taxLow = Number(price - steuer)
    let low = Number(price / (taxLow + 1))


    //Die Berechnung
    if (zuBrutto) {
        document.getElementById("result1").innerHTML = 'Mehrwertsteuerbetrag: ' + taxHigh + "€"

        document.getElementById("result2").innerHTML = 'Endbetrag: ' + high + "€"
    } else {
        document.getElementById("result1").innerHTML = 'Mehrwertsteuerbetrag: ' + low + "€"

        document.getElementById("result2").innerHTML = 'Endbetrag: ' + taxLow + "€"
    }
}





    // switch (type) {
    //     case 'brutto':
    //         document.getElementById("result1").innerHTML = 'Mehrwertsteuerbetrag: ' + tax  + "€"


    //         document.getElementById("result2").innerHTML = 'Endbetrag: ' + end + "€"
    //         break;

    // case 'brutto':
    //     document.getElementById("result1").innerHTML = 'Mehrwertsteuerbetrag: ' + tax

    //     document.getElementById("result2").innerHTML = 'Endbetrag: ' + end
    //     break;
