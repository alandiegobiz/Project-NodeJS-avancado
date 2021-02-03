const fetch = require('node-fetch');

module.exports = async function buscaCep(siglaestado, estado, nomedarua){
    const response = await fetch(`https://viacep.com.br/ws/${siglaestado}/${estado}/${nomedarua}/json/`)
    const json = await response.json()

    return json
}