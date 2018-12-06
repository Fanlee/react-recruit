const express = require('express')
const mongoose = require('mongoose')

// 连接mongo, 并且使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', () => {
  console.log('mongo connect success')
})
const User = mongoose.model('user', new mongoose.Schema({
  user: { type: String, require: true },
  age: { type: Number, require: true }
}))

// User.create({
//   user: 'huahua',
//   age: 23
// }, function(err, doc) {
//   if(!err) {
//     console.log(doc)
//   } else {
//     console.log(err)
//   }
// })

// User.remove({age: 18}, (err, doc) => {
//   if(!err) {
//     console.log(doc)
//   } else {
//     console.log(err)
//   }
// })
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello world node</h1>')
})

app.get('/data', (req, res) => {
  User.find({}, (err, doc) => {
    res.json(doc)
  })
})

app.listen(9093, () => {
  console.log('Node app')
})