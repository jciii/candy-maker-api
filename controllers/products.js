const models = require('../models')

const getAllProducts = async (request, response) => {
  const products = await models.Products.findAll({
    include: [{ model: models.Manufacturers }]
  })

  return response.send(products)
}

const getProductsByName = async (request, response) => {
  const { name } = request.params

  const product = await models.Products.findOne({
    attributes: ['id', 'name', 'yearIntroduced'],
    where: { name: { [models.Op.like]: `${name}%` } },
    include: [{
      attributes: ['id', 'name', 'country'],
      model: models.Manufacturers
    }]
  })


  return product
    ? response.send(product)
    : response.sendStatus(404)
}

module.exports = { getAllProducts, getProductsByName }
