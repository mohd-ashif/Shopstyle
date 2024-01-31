const mongoose  = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,

    },
    cartData :{
        type:Object,

    },
    data:{
        type:Date,
        default:Date.now,

    },
    role:{
        type:String,
        default:'visitor'
    }

})

const Users = mongoose.model('users', UserSchema);
module.exports = Users