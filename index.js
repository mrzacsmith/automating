const express = require('express')

const app = express()

app.get('/', (req, res) => {
  console.log(`API was successing requested!`)
  res.send(serverMessage)
})

const PORT = process.env.PORT || 4005
const serverMessage = `\n** Server is running on port ${PORT} **\n`

app.listen(PORT, () => {
  console.log(serverMessage)
})
