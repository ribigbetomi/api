const express= require("express") ;
const asyncHandler = require("express-async-handler") ;
const products= require("./data/Products") ;
const Product =require("./models/product") ;

const ImportData = express.Router();

// ImportData.post(
//   "/user",
//   asyncHandler(async (req, res) => {
//     await User.deleteMany({});
//     const importUser = await User.insertMany(users);
//     res.send({ importUser });
//   })
// );

ImportData.post(
  "/products",
  asyncHandler(async (req, res) => {
    await Product.deleteMany({});
    const importProducts = await Product.insertMany(products);
    res.send({ importProducts });
  })
);

module.exports = ImportData;
