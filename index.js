const express = require('express')
const app = express()
const port = 5000
const { User } = require('./models/User');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const config = require('./config/key');

//MongoDB연결
const  mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
  useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MognoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요. nodemon install')
})

app.post('/register',(req,res) =>{
  //회원가입할 때 필요한 정보들을 client에서 수신하면 DB에 Insert
  const user = new User(req.body)

  user.save((err,userInfo) => {
      if(err) return res.json({ success : false, err})
      return res.status(200).json({
        success: true
      })
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})