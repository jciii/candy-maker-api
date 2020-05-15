const products = (connections, Sequelize) => {
  return connections.define('products', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    yearIntroduced: { type: Sequelize.STRING },
    manufacturerId: { type: Sequelize.STRING },

  }, { paranoid: true })
}

module.exports = products