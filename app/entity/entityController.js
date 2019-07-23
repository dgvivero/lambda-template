const Entity = require('./entityModel');

/** 
 * @sumary Call a service to access db
 * @returns {Array} roles list where onboarding is  TRUE.
*/
exports.list = async (req, res, next)=>{
    try{
        res.locals.entities = await Entity.findAll({where:{onboarding: true}, order: ['id']});
        next()
    } catch(err) {
        err.message += "Error db -  entity ";
        next(err)
    }
      
};

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