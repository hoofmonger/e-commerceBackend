// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Driver, {
  foreignKey: 'driver_id',
});
// Categories have many Products
Reader.hasMany(Book, {
  foreignKey: 'reader_id',
  onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag)
Traveller.belongsToMany(Location, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Trip,
    unique: false
  }
  
  
});
// Tags belongToMany Products (through ProductTag)
Traveller.belongsToMany(Location, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Trip,
    unique: false,
    foreignKey: 'tag_id'
  }
  
  
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
