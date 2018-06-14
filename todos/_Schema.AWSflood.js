const vogels = require('vogels')
const Joi = require('joi')


let AWSflood = vogels.define('AWSflood', {
    hashKey: 'chainname',
    rangeKey: 'height',

    // add the timestamp attributes (updatedAt, createdAt)
    timestamps: true,

    schema: {
        chainname: Joi.string().alphanum(),
        height: Joi.number().integer()
    }
});