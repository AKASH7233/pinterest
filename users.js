const mongoose = require('mongoose');
const plg = require('passport-local-mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/pro1');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: [{
    type : mongoose.Schema.Types.ObjectId,
    ref:'Post'
  }],
  dp:{
    type : String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  email : {
    type: String,
    required :true,
  }
});

mongoose.plugin(plg);

module.exports = mongoose.model('User', userSchema);

