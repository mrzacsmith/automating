const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.resolve(`${__dirname}`, './')))

app.get('/', (req, res) => {
  console.log(`API was successing requested!`)
  res.send(serverMessage)
})

const PORT = process.env.PORT || 4005
const serverMessage = `\n** Server is running on port ${PORT} **\n`

app.listen(PORT, () => {
  console.log(serverMessage)
})
