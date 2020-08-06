const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Post = require('./planModel');

const schema = new Schema({
    message : { type: String, required: true},
    likeCounts : { type: Number , default: 0 },
    user : { type: String, required: true},
    createdDate : { type: Date, default: Date.now },
    post : { type : Schema.Types.ObjectId, ref : 'Plan'},
    rating : {type : String, default :0, required: true}
},{
  collection: 'localguide_users'
});

const comment = mongoose.model('Comment', schema);

module.exports = comment;