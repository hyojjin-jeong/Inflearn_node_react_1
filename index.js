const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hyojin:1233@inflearn1.vfc2i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {}).then(() => console.log('MongoDB Connected...')) .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!~드디어 성공')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})