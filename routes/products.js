const express= require("express") ;
const asyncHandler = require("express-async-handler") ;
const Product = require('../models/product')
// import protect from "../Middleware/AuthMiddleware.js";

const productRoute = express.Router();

// GET ALL PRODUCT
productRoute.get(
    "/",
    async(req, res) => {
        const products = await Product.find()
        if (products) {
            res.send(products)
        } else {
            res.status(404)
            throw new Error('An error occured')
        }
    }
  );
  
  // GET SINGLE PRODUCT
  productRoute.get(
    "/:id",
    asyncHandler(async (req, res) => {
      const product = await Product.findById(req.params.id);
      if (product) {
        res.json(product);
      } else {
        res.status(404);
        throw new Error("Product not found");
      }
    })
  );

  module.exports = productRoute