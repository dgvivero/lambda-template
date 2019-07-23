const express          = require('express');
const entityController = require('./entityController');
const router           = express.Router();

/**
 *  @api {GET} /entity  
 *  @apiName list 
 *  @apiGroup Entity
 *  @apiSuccess OK 200 { lis of entity}
 */
router.get('/', entityController.list, (req, res)=>{ 
    res.status(200).send(res.locals.entities);
});

router.post('/', entityController.add,(req, res)=>{ 
    res.status(201).send("OK")
 });


module.exports = router;