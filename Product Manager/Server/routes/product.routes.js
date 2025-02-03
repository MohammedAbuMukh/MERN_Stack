import ProductController from '../controllers/product.controller.js';

export default (app) => {
    app.get('/api/products', ProductController.findAllProducts);

    app.post('/api/products', ProductController.createProduct);

    app.get('/api/products/:id', ProductController.findProduct);

    app.patch('/api/product/:id', ProductController.updateProduct);

    app.delete('/api/products/:id', ProductController.deleteProduct);
};