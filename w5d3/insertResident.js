// INSERT INTO residents (name, birthday, has_vehicle, island_id) VALUES ('Cadaei','1986-06-09',false,1);

const { Client } = require('pg')

const client = new Client({
  user: 'francis',
  host: 'localhost',
  database: 'animalcrossing',
  password: 'francis',
  port: 5432,
})

const extractUserValues = () => {
  const [, , name, birthday, has_vehicle, island_id] = process.argv

  return [name, birthday, has_vehicle, island_id]
}
// 
name = '); DROP TABLE islands;'

// JS WAY (INSECURE)
// const query = `INSERT INTO residents (name, birthday, has_vehicle, island_id) VALUES (${name},${birthday},${has_vehicle},${island_id});`

// SQL WAY (MORE SECURER)
const query = `INSERT INTO residents (name, birthday, has_vehicle, island_id) VALUES ($1,$2,$3,$4) RETURNING *`;
const values = extractUserValues() // [name => $1, birthday => $2, has_vehicle, island_id]

client
  .connect()
  .then(() => client.query(query, values))
  .then(dbRes => console.log(dbRes))
  .catch(err => console.log(err))