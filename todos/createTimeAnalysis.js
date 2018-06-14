'use strict';

// const uuid = require('uuid');
// const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const vogels = require('vogels')
const Joi = require('joi')

// const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {
  const data = JSON.parse(event.body);

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

  Block.create({
    chainname: data.chainname,
    longestchainhash: data.longestchainhash,
    longestchainheight: data.longestchainheight,
    longestchaintime: data.longestchaintime,
    x10blockhash: data.x10blockhash,
    x10blockheight: data.x10blockheight,
    x10blocktime: data.x10blocktime,
    x10timesince: data.x10timesince,
    x20blockhash: data.x20blockhash,
    x20blockheight: data.x20blockheight,
    x20blocktime: data.x20blocktime,
    x20timesince: data.x20timesince,
    x30blockhash: data.x30blockhash,
    x30blockheight: data.x30blockheight,
    x30blocktime: data.x30blocktime,
    x30timesince: data.x30timesince,
    x50blockhash: data.x50blockhash,
    x50blockheight: data.x50blockheight,
    x50blocktime: data.x50blocktime,
    x50timesince: data.x50timesince,
    x100blockhash: data.x100blockhash,
    x100blockheight: data.x100blockheight,
    x100blocktime: data.x100blocktime,
    x100timesince: data.x100timesince
  },
    function (err, acc) {
      if (err) {
        console.log(err)
        callback(null, {
          statusCode: error.statusCode || 501,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not create the block history item',
        })
        return
      }
      console.log('created account at', acc.get('created')); // prints created Date
      const response = {
        statusCode: 200,
        body: JSON.stringify(acc.get('created'))
      }
      callback(null, response)
    });
};
