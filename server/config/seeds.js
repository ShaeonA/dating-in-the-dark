const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();



  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Steve',
    lastName: 'Richards',
    email: 'steverichards@testmail.com',
    password: 'password12345',
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Apple',
    email: 'eapple@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
