const express = require('express')
const app = express()
const port = 80; // Port exposed to docker. Probably change this if you're not using docker.

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))