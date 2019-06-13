const faker = require('faker')

// random generator
const generator = (schema, min = 1, max) => {
  max = max || min
  return Array.from({ length: faker.random.number({ min, max }) }).map(() => Object.keys(schema).reduce((entity, key) => {
    entity[key] = faker.fake(schema[key])
    return entity
  }, {}))
}

// your schema
const clientsSchema = {
  id: '{{random.number}}',
  name: '{{company.companyName}} {{company.companySuffix}}',
  address: '{{address.streetAddress}}',
  email: '{{internet.email}}'
}

// generate random clients between 5 and 20 units, based on client schema defined above
const data = generator(clientsSchema, 5, 20)

// const User = {
//   name: faker.name.findName(),
//   email: faker.internet.email(),
//   website: faker.internet.url(),
//   address: faker.address.streetAddress() + faker.address.city() + faker.address.country(),
//   bio: faker.lorem.sentences(),
//   image: faker.image.avatar()
// }

module.exports = data