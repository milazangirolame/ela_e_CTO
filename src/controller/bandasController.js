const bandas = require('../model/bandas.json');

const listarTodasBandas = (request, response) => {
  response.send(bandas);
};

const retornaBandaPreferida = (request, response) => {
  response.send(bandas[1]);
};

module.exports = { listarTodasBandas };
module.exports = { retornaBandaPreferida };
