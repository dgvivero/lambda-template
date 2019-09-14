const Entity = require('./entityModel');

/** 
 * @sumary Call a service to access db
 * @returns {Array} Entity.
*/
exports.list = async (req, res, next)=>{
    try{
        res.locals.entities = await Entity.findAll();
        next()
    } catch(err) {
        err.message += "Error db -  entity ";
        next(err)
    }
      
};

/** 
 * @sumary Create an entity
 * 
*/
exports.add = async (req, res, next)=>{
    try{
      let entity = req.body;
      await Entity.create(entity);
      next()
    } catch(error) {
      error.message += "Error db -  entity ";
      next(error)
    }
  }