'use strict';

// const uuid = require('uuid');
// const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const vogels = require('vogels')
const Joi = require('joi')

// const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {
  const data = JSON.parse(event.body);

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

  AWSflood.create({
    chainname: data.chainname,
    height: data.height
  },
    function (err, acc) {
      if (err) {
        console.log(err)
        callback(null, {
          statusCode: error.statusCode || 501,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not create the mylo item',
        })
        return
      }
      console.log('created item at', acc.get('created')); // prints created Date
      const response = {
        statusCode: 200,
        body: JSON.stringify(acc.get('created'))
      }
      callback(null, response)
    });
};
