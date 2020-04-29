const { Client } = require('pg')

const client = new Client({
  user: 'francis',
  host: 'localhost',
  database: 'animalcrossing',
  password: 'francis',
  port: 5432,
})

const showBestIsland = (island) => {
  if (island) {
    console.log(`The best island is ${island.name} with a price of ${island.turnip_price}`)
  }
  else {
    console.log('There is no island')
  }
}

client
  .connect()
  .then(() => console.log("HEY I'm connected !"))
  .then(() => client.query("SELECT * FROM islands ORDER BY turnip_price DESC LIMIT 1"))
  .then(dbRes => {
    console.log(dbRes)
    return dbRes
  })
  .then(dbRes => showBestIsland(dbRes.rows[0]))
  .then(() => client.end())
  .catch(err => console.log(err))
