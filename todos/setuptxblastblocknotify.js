const vogels = require('vogels')
const Joi = require('joi')

module.exports.setup = (event, context, callback) => {

    let Block = vogels.define('Block', {
        hashKey: 'hash',

        // add the timestamp attributes (updatedAt, createdAt)
        timestamps: true,

        schema: {
            hash: Joi.string().alphanum(),
            height: Joi.number().integer(),
            tx: Joi.number().integer(),
            size: Joi.number(),
            ac: Joi.string().alphanum(),
            time: Joi.number(),
            mempoolMB: Joi.number().integer(),
            mempooltx: Joi.number(),
        }
    });

    vogels.createTables(function(err) {
        if (err) {
          console.log('Error creating tables: ', err);
        } else {
          console.log('Tables has been created');
        }
      });
    console.log("setup create")
}