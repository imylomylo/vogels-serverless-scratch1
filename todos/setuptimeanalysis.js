const vogels = require('vogels')
const Joi = require('joi')
const util = require('util')
const _ = require('lodash')

module.exports.setup = (event, context, callback) => {

    let Block = vogels.define('BlockHistory', {
        hashKey: 'chainname',
        rangeKey: 'longestchainheight',

        // add the timestamp attributes (updatedAt, createdAt)
        timestamps: true,

        schema: {
            chainname: Joi.string().alphanum(),
            longestchainhash: Joi.string().alphanum(),
            longestchainheight: Joi.number().integer(),
            longestchaintime: Joi.number(),
            x10blockhash: Joi.string().alphanum(),
            x10blockheight: Joi.number(),
            x10blocktime: Joi.number(),
            x10timesince: Joi.number().precision(4),
            x20blockhash: Joi.string().alphanum(),
            x20blockheight: Joi.number(),
            x20blocktime: Joi.number(),
            x20timesince: Joi.number().precision(4),
            x30blockhash: Joi.string().alphanum(),
            x30blockheight: Joi.number(),
            x30blocktime: Joi.number(),
            x30timesince: Joi.number().precision(4),
            x50blockhash: Joi.string().alphanum(),
            x50blockheight: Joi.number(),
            x50blocktime: Joi.number(),
            x50timesince: Joi.number().precision(4),
            x100blockhash: Joi.string().alphanum(),
            x100blockheight: Joi.number(),
            x100blocktime: Joi.number(),
            x100timesince: Joi.number().precision(4)
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
    let Block = vogels.define('BlockHistory', {
        hashKey: 'chainname',
        rangeKey: 'longestchainheight',

        // add the timestamp attributes (updatedAt, createdAt)
        timestamps: true,

        schema: {
            chainname: Joi.string().alphanum(),
            longestchainhash: Joi.string().alphanum(),
            longestchainheight: Joi.number().integer(),
            longestchaintime: Joi.number(),
            x10blockhash: Joi.string().alphanum(),
            x10blockheight: Joi.number(),
            x10blocktime: Joi.number(),
            x10timesince: Joi.number().precision(4),
            x20blockhash: Joi.string().alphanum(),
            x20blockheight: Joi.number(),
            x20blocktime: Joi.number(),
            x20timesince: Joi.number().precision(4),
            x30blockhash: Joi.string().alphanum(),
            x30blockheight: Joi.number(),
            x30blocktime: Joi.number(),
            x30timesince: Joi.number().precision(4),
            x50blockhash: Joi.string().alphanum(),
            x50blockheight: Joi.number(),
            x50blocktime: Joi.number(),
            x50timesince: Joi.number().precision(4),
            x100blockhash: Joi.string().alphanum(),
            x100blockheight: Joi.number(),
            x100blocktime: Joi.number(),
            x100timesince: Joi.number().precision(4)
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
    let Block = vogels.define('BlockHistory', {
        hashKey: 'chainname',
        rangeKey: 'longestchainheight',

        // add the timestamp attributes (updatedAt, createdAt)
        timestamps: true,

        schema: {
            chainname: Joi.string().alphanum(),
            longestchainhash: Joi.string().alphanum(),
            longestchainheight: Joi.number().integer(),
            longestchaintime: Joi.number(),
            x10blockhash: Joi.string().alphanum(),
            x10blockheight: Joi.number(),
            x10blocktime: Joi.number(),
            x10timesince: Joi.number().precision(4),
            x20blockhash: Joi.string().alphanum(),
            x20blockheight: Joi.number(),
            x20blocktime: Joi.number(),
            x20timesince: Joi.number().precision(4),
            x30blockhash: Joi.string().alphanum(),
            x30blockheight: Joi.number(),
            x30blocktime: Joi.number(),
            x30timesince: Joi.number().precision(4),
            x50blockhash: Joi.string().alphanum(),
            x50blockheight: Joi.number(),
            x50blocktime: Joi.number(),
            x50timesince: Joi.number().precision(4),
            x100blockhash: Joi.string().alphanum(),
            x100blockheight: Joi.number(),
            x100blocktime: Joi.number(),
            x100timesince: Joi.number().precision(4)
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
    console.log(Block.query('KMD').where('longestchainheight').gt(864200).descending().exec(printResults('MYLO Results')))
}