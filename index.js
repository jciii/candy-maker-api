
const express = require('express')
const { getAllManufacturers, getManufacturerByName } = require('./controllers/manufacturers')
const { getAllProducts, getProductsByName } = require('./controllers/products')

const app = express()

app.get('/manufacturers', getAllManufacturers)

app.get('/manufacturers/:name', getManufacturerByName)

app.get('/products', getAllProducts)

app.get('/products/:name', getProductsByName)

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})