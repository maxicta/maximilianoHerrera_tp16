const bicis = require("./datosBici")

function buscarBici (id) {
    const resultado = bicis.filter((bici) => bici.id == id)
    if (resultado.length > 0) {
        return resultado
    }
    else {
        return null
    }
}

console.log(buscarBici(11));
