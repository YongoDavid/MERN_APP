const router = require('express').Router();

const authRoutes = require('./auth');
const userRoutes = require('./user');
const addressRoutes = require('./address');
const newsletterRoutes = require('./newsletter');
const productRoutes = require('./product');
const categoryRoutes = require('./category');
const brandRoutes = require('./brand');
const contactRoutes = require('./contact');
const merchantRoutes = require('./merchant');
const cartRoutes = require('./cart');
const orderRoutes = require('./order');
const reviewRoutes = require('./review');
const wishlistRoutes = require('./wishlist');

// auth routes
router.use('/auth', authRoutes);
console.log('Mounting /auth routes...');

// user routes
router.use('/user', userRoutes);
console.log('Mounting /auth routes...');

// address routes
router.use('/address', addressRoutes);
console.log('Mounting /auth routes...');

// newsletter routes
router.use('/newsletter', newsletterRoutes);
console.log('Mounting /auth routes...');

// product routes
router.use('/product', productRoutes);
console.log('Mounting /auth routes...');

// category routes
router.use('/category', categoryRoutes);
console.log('Mounting /auth routes...');

// brand routes
router.use('/brand', brandRoutes);
console.log('Mounting /auth routes...');

// contact routes
router.use('/contact', contactRoutes);
console.log('Mounting /auth routes...');

// merchant routes
router.use('/merchant', merchantRoutes);
console.log('Mounting /auth routes...');

// cart routes
router.use('/cart', cartRoutes);
console.log('Mounting /auth routes...');

// order routes
router.use('/order', orderRoutes);
console.log('Mounting /auth routes...');

// Review routes
router.use('/review', reviewRoutes);
console.log('Mounting /auth routes...');

// Wishlist routes
router.use('/wishlist', wishlistRoutes);
console.log('Mounting /auth routes...');


module.exports = router;
