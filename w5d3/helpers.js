const dbHelpers = (client) => {
  const secretValue = 20
  const fetchIslands = () => {
    return client
      .query("SELECT * FROM islands")
  }

  const fetchResidents = () => {
    return client
      .query("SELECT * FROM resident")
  }
  return { fetchIslands, fetchResidents }
}



module.exports = dbHelpers