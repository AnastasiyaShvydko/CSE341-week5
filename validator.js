const {param, body, validationResult} = require ('express-validator');

const infoPlanetValidationRules = () => {
    return [
      body('name')
      .isString()
      .withMessage('Please provide name in String format'),
      body('mass')
      .exists()
      .withMessage('Please provide mass'),
      body('radius')
      .exists()
      .withMessage('Please provide radius'),
      body('period')
      .exists()
      .withMessage('Please provide period'),
      body('semi_major_axis')
      .exists()
      .withMessage('Please provide semi_major_axis'),
      body('temperature')
      .exists()
      .withMessage('Please provide temperature'),
      body('distance_light_year')
      .exists()
      .withMessage('Please provide distance_light_year'),
      body('host_star_mass')
      .exists()
      .withMessage('Please provide host_star_mass'),
      body('host_star_temperature')
      .exists()
      .withMessage('Please provide host_star_temperature'),

  
   
    ]
}

 const idValidationRules = () => {
        return [
          param('id')
          .isLength({min : 24 })
          .withMessage('Please provide id 24 character long'),
     
       
        ]
  }
  const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  
    return res.status(422).json({
      errors: extractedErrors,
    })
  }
  
  module.exports = {
    infoPlanetValidationRules,
    validate,
    idValidationRules
  }