const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
      },
      details: {
        type: String,
        required: true,
      },
      category : {
        type: String,
        required: true
      },
      productNumber: {
        type: String,
        required: true
      },
    //   reviews: [reviewSchema],
    //   rating: {
    //     type: Number,
    //     required: true,
    //     default: 0,
    //   },
    //   numReviews: {
    //     type: Number,
    //     required: true,
    //     default: 0,
    //   },
      price: {
        type: Number,
        required: true,
        default: 0,
      },
    //   countInStock: {
    //     type: Number,
    //     required: true,
    //     default: 0,
    //   },
    },
    {
      timestamps: true,
    }
  );
  
  const Product = mongoose.model("Product", productSchema);
  
  module.exports = Product;
  