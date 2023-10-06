var elecciones = new Array();

elecciones[0] = new Array(" ", "Ayuntamiento", "Poliderportivo", "Instituto", "Mercado", "Colegio");
elecciones[1] = new Array("PV");
elecciones[2] = new Array("OV");
elecciones[3] = new Array("VpSI")
elecciones[4] = new Array("UPV")

function hacerTabla() {
    for (i = 0; i < elecciones.length; i++) {
        for (j = 0; j < elecciones[i].length; j++) {
            console.table(" " + elecciones)
        }
    }
}


function generarVotos(tabla) {

    for (var i = 1; i < 5; i++) {

        for (var j = 1; j < 6; j++) {

            tabla[i][j] = Math.round(Math.random()*5 + 5);
        }
    }
    return tabla;
}


console.table(generarVotos(elecciones));

