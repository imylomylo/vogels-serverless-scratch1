const vogels = require('vogels')
const Joi = require('joi')
const util = require('util')
const _ = require('lodash')

module.exports.setup = (event, context, callback) => {

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

    vogels.createTables(function (err) {
        if (err) {
            console.log('Error creating tables: ', err);
        } else {
            console.log('Tables has been created');
        }
    });
    console.log("setup create")
}

module.exports.delete = (event, context, callback) => {
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



    Block.deleteTable(function (err) {
        if (err) {
            console.log('Error deleting table: ', err);
        } else {
            console.log('Table has been deleted');
        }
    });
    console.log("setup delete")
}

module.exports.scangt = (event, context, callback) => {
    console.log("scangt")
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

    // Block.scan().where('longestchainheight').gte(700000).exec(function (err,data) {
    //     console.log(_.map(data.Items, JSON.stringify))
    // })

    // console.log(Block.scan().where('longestblockheight').notNull().select('COUNT').exec())
    // console.log(Block.query('KMD').where('longestchainheight').gt(864200).exec(printResults('MYLO Results')))
    let printResults = function (msg) {
        return function (err, resp) {

            console.log('----------------------------------------------------------------------');
            if (err) {
                console.log(msg + ' - Error running query', err);
            } else {
                console.log(msg + ' - Found', resp.Count, 'items');
                console.log(util.inspect(_.map(resp.Items, 'attrs')));

                if (resp.ConsumedCapacity) {
                    console.log('----------------------------------------------------------------------');
                    console.log('Query consumed: ', resp.ConsumedCapacity);
                }
            }

            console.log('----------------------------------------------------------------------');
        };
    };
    console.log(AWSflood.query('MYLO').where('height').gt(1).descending().exec(printResults('MYLO Results')))
}