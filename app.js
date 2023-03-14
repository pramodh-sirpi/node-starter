const express = require('express')
const PORT = 3000
const HOST = '0.0.0.0'

// App
const app = express()
app.get('/', (req, res) => {
  res.send('Hello World NODE Starter Kit')
});

app.listen(PORT, HOST)
console.log(`Our app running on http://${HOST}:${PORT}`)
