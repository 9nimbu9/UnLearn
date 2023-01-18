const express = require("express")
const { signup, signupGet, signin, updateCart, deleteItem} = require("../controllers/signController")
const { companyProducts, showProducts } = require ("../controllers/cartItems")

const router = express.Router()

router.post("/signUp", signup) 
router.get("/signUp", signupGet)
 
router.post("/signIn", signin)

// router.get("/companyProducts", companyProducts)
router.get("/showProducts", showProducts)

router.post("/cart", updateCart)

router.post("/delete", deleteItem)

module.exports = router  