const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;



const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxLength : 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        maxLength: 5
    },
    lastname: {
        type: String,
        maxLength : 50
    },
    role: {
        type : Number,
        default : 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }

})

userSchema.pre('save', function( next ){
    var user = this;

    //password만 변경될때만 동작
    if(user.isModified('password')){
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                
                if(err) return next(err)
                user.password = hash
                next()
                // Store hash in your password DB.
            })
        })
    }
    //비밀번호를 암호화 시킨다. 


})

const User = mongoose.model('User', userSchema)
module.exports = { User }