const express = require(express);
const router = express.Router();
const modelController = require('../controllers/modelController');



// delete a model
// router.delete('/products/:id', productsController.deleteProduct);
router.delete('/models/:id', modelController.deleteModel );

// retreive a single data
router.get('/model/:id', modelController.getModelById);

// find a data
router.get('/model', modelController.findById);

module.exports = router;