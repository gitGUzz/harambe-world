
function factorial(fact) {
    var a = 1;
    for (var i = 1; i <= fact; i++) {
        a = a * i;
    }
    return a;
}

function main() {
    x = Number(document.getElementById("X_VALUE").value);
    y = Number(document.getElementById("Y_VALUE").value);

    let chis = 0.0;
    let znam = 0.0;
    let a_2 = 0.0;

    chis = Math.pow(y, x) / factorial(x);

    for (var k = 0; k <= x; k++) {
        a_2 = Math.pow(y, k) / factorial(k);
        znam += a_2;
    }
    let Exy = chis / znam;

    // print in <tt>
    if (x == 0 && y == 0) {
        document.getElementById('results').innerHTML = "Empty values"
    }
    else {
        document.getElementById('results').innerHTML =
            "Results:<br>---------------<br>" +
            "Chislitel = " + chis.toPrecision(10) + "<br>" +
            "Znamenatel = " + znam.toPrecision(10) + "<br>" +
            'E' + x + '(' + y + ')' + ' = ' + Exy;
    }
}