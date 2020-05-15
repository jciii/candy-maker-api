const manufacturers = (connections, Sequelize, Products) => {
  return connections.define('manufacturers', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING },
    country: { type: Sequelize.STRING, references: { model: Products, key: 'id' } },
  }, { paranoid: true })
}

module.exports = manufacturers