// index.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
 //replace the link with your mongodb atlas link
mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
 
app.use(express.json());
app.use(cors()); // Use the cors middleware
 
const productSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  price: Number,
  image: String,
});
 
const Product = mongoose.model('Product', productSchema);
 
// Function to seed initial data into the database
const seedDatabase = async () => {
  try {
    await Product.deleteMany(); // Clear existing data
 
    const products = [
      {
        name: "Pointelle Striped Sleeve Sweater",
        type: 'Women',
        description: 'With Denim Easy Pants',
        price: 89,
        image: 
'https://www.uniqlo.com/jp/ja/contents/collaboration/ines/24ss/common/imgs/lookbookItems/lookbook-3.webp?1712224192811'
      },
      {
        name: 'Ribbed Polo Short Sleeve Cardigan',
        type: 'Women', 
        description: 'With Linen Cotton Gather Skirt',
        price: 250,
        image: 
'https://www.uniqlo.com/jp/ja/contents/collaboration/ines/24ss/common/imgs/lookbookItems/lookbook-1.webp?1712224193373'
      },
      {
        name: "Seersucker Long Sleeve Long Shirt",
        type: 'Women',
        description: 'With Linen Cotton Gather Skirt',
        price: 450,
        image: 
'https://www.uniqlo.com/jp/ja/contents/collaboration/ines/24ss/common/imgs/lookbookItems/lookbook-2.webp?1712224193373'
      },
      {
        name: 'Pintuck Printed Long Sleeve Blouse',
        type: 'Women', 
        description: 'With Denim Easy Pants',
        price: 120,
        image: 
'https://www.uniqlo.com/jp/ja/contents/collaboration/ines/24ss/common/imgs/lookbookItems/lookbook-4.webp?1712224192812'
      },
      {
        name: '3D Knit Ribbed Sleeveless Dress',
        type: 'Women',
        description: 'Perfect dress for dinner night .',
        price: 500,
        image: 
'https://www.uniqlo.com/jp/ja/contents/collaboration/ines/24ss/common/imgs/lookbookItems/lookbook-5.webp?1712224193373'
      },
      {
        name: 'Leather Weekend Bag',
        type: 'Men', 
        description: 'Stylish and durable Bag',
        price: 800,
        image: 
'https://cdn.webshopapp.com/shops/290194/themes/169154/v/1958310/assets/category-image-9700254.jpg?20230714134937'
      },
      {
        name: 'Leather Bagpack Cognac Acadia',
        type: 'Men',
        description: 'Stylish and elegant Bag',
        price: 450,
        image: 
'https://cdn.webshopapp.com/shops/290194/themes/169154/v/1958313/assets/category-image-9700255.jpg?20230714134956'
      },
      
      {
        name: 'Leather School Bag ',
        type: 'Men',
        description: 'Comfortable and supportive Bag ',
        price: 700,
        image: 
'https://cdn.webshopapp.com/shops/290194/themes/169154/v/1958290/assets/category-image-9700259.jpg?20230714134502'
      },
      {
        name: 'Leather Toiletry Bag ',
        type: 'Men',
        description: 'Made of high quality Wax Pull-up leather ',
        price: 500,
        image: 
'https://cdn.webshopapp.com/shops/290194/themes/169154/v/1958345/assets/category-image-9848444.jpg?20230714140338'
      },
      {
        name: 'Leather Phone Pouch Brown Malaga ',
        type: 'Men',
        description: ' Ideal for daily use, or on holidays ',
        price: 350,
        image: 
'https://cdn.webshopapp.com/shops/290194/themes/169154/v/1958293/assets/category-image-9848569.jpg?20230714134718'
      }
    ];

    
 
    await Product.insertMany(products);
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};
 
// Seed the database on server startup
seedDatabase();
 
// Define API endpoint for fetching all products
app.get('/api/products', async (req, res) => {
  try {
    // Fetch all products from the database
    const allProducts = await Product.find();
 
    // Send the entire products array as JSON response
    res.json(allProducts);
  } catch (error) {
    console.error(error);
    res.status(500)
      .json({ error: 'Internal Server Error' });
  }
});
 
app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT}`
  );
});
