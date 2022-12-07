const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', function (req, res) {
    res.send('about')
  })
  
  app.get('/random.text', function (req, res) {
    res.send('random.text')
  })

  //pattern like usually pattern 
  app.get('/ab?cd', function (req, res) {
    res.send('correct')
  })
  //regular expression
  //hna khase path ykun fih a
  /*app.get(/a/, function (req, res) {
    res.send('regular expression work')
  })*/
  
  app.get(/.*html$/, function (req, res) {
    res.send('kaysali b .html')
  })
  app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
  })
//ila bghina nkhdmo fonction hia lwla 3ad whda moraha
app.get('/example/b', (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from B!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})