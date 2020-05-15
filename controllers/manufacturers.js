const models = require('../models')

const getAllManufacturers = async (request, response) => {
  const manufacturers = await models.Manufacturers.findAll({
    include: [{ model: models.Products }]
  })

  return response.send(manufacturers)
}

const getManufacturerByName = async (request, response) => {
  const { name } = request.params

  const manufacturer = await models.Manufacturers.findOne({
    attributes: ['id', 'name', 'country'],
    where: { name: { [models.Op.like]: `%${name}%` } },
    include: [{
      attributes: ['id', 'name', 'yearIntroduced'],
      model: models.Products
    }]
  })

  return manufacturer
    ? response.send(manufacturer)
    : response.sendStatus(404)
}

module.exports = { getAllManufacturers, getManufacturerByName }