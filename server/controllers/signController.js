const mongoose = require("mongoose")
const bcrypt = require ("bcrypt")

const saltround = 10
var regPassword = " "

const signSchema = new mongoose.Schema({
    name:String,
    email: String,
    password: String,
    cart: [{
        productName: String,
        productPrice: Number,
        quantity: Number
    }]
})
const Signs = new mongoose.model("Sign", signSchema)    

exports.signup = (req,res) => {
    console.log(req.body)
    bcrypt.hash(req.body.password, saltround, function(err, hash){
        regPassword = hash
        const Sign = new Signs({
            name: req.body.name,
            email: req.body.email,
            password: hash,
        }) 
        Sign.save() 
        res.json(Sign._id)
    })     
    
} 
exports.signupGet = (req,res) => {
    Signs.find({}, (err, userData) => {
        res.json(userData)
    })
}

exports.signin = (req, res) => {
    Signs.findOne({email: req.body.email}, function(err, foundUser){
        if(foundUser){
            bcrypt.compare(req.body.password, foundUser.password, function(err, result){
                if(result==true){
                    res.json(foundUser._id)
                }else{
                    res.json(404)
                }
            })
        }else{
            res.json(404)
        }
    })
}

exports.updateCart = (req,res) => {
    console.log(req.body)
    Signs.findByIdAndUpdate({_id: req.body.addedBy}, {$push: {cart: {productName: req.body.name, productPrice: req.body.price*req.body.quantity, quantity: req.body.quantity}}}, function(err, update){
        console.log(update)
    })
}

exports.deleteItem = (req,res) => {
    Signs.findByIdAndUpdate({_id: req.body.userId}, {$pull: {cart: {_id: req.body.deleteId}}}, function(err, update){})
}