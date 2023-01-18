const mongoose = require("mongoose")

const productScehma = new mongoose.Schema({
    productName: String,
    productPrice: Number
})

const Products = mongoose.model("product", productScehma)

exports.companyProducts = (req,res) => {
    const product = new Products({
        productName: "P4",
        productPrice: 4000
    })
    product.save()
    res.json(product)
}

exports.showProducts = (req,res) => {
    Products.find({}, (err, found) => {
        res.json(found)
    })
}