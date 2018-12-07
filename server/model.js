const mongoose = require('mongoose')
// 连接mongo, 并且使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017/react-recruit'
mongoose.connect(DB_URL)

const models = {
  user: {
    'user': { type: String, require: true },
    'pwd': { type: String, require: true },
    'type': { type: String, require: true },
    'avatar': { type: String },
    'desc': { type: String },
    // 职位名
    'title': { type: String },
    // boss多下面两字段
    'company': { type: String },
    'money': { type: String }
  },
  chat: {}
}

for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  getModel: function (name) {
    return mongoose.model(name)
  }
}