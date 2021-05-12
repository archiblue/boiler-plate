const express = require('express')
const app = express()
const port = 5000

//MongoDB연결
const  mongoose = require('mongoose')
mongoose.connect('mongodb+srv://cylim:dlacodud77B@cluster0.h2ypo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MognoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})