const vogels = require('vogels')
const Joi = require('joi')

module.exports.setup = (event, context, callback) => {

    let Account = vogels.define('Account', {
        hashKey: 'email',

        // add the timestamp attributes (updatedAt, createdAt)
        timestamps: true,

        schema: {
            email: Joi.string().email(),
            name: Joi.string().required(),
            age: Joi.number(),
        }
    });

    Account.create({ email: 'test@example.com', name: 'Test Account' }, function (err, acc) {
        console.log('created account at', acc.get('created')); // prints created Date

        acc.set({ age: 22 });

        acc.update(function (err) {
            console.log('updated account age');
        });

    });
    console.log("setup complete")
}
module.exports.create = (event, context, callback) => {

    let Account = vogels.define('Account', {
        hashKey: 'email',

        // add the timestamp attributes (updatedAt, createdAt)
        timestamps: true,

        schema: {
            email: Joi.string().email(),
            name: Joi.string().required(),
            age: Joi.number(),
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
module.exports.delete = (event, context, callback) => {
    Account.deleteTable(function(err) {
        if (err) {
          console.log('Error deleting table: ', err);
        } else {
          console.log('Table has been deleted');
        }
      });
    console.log("setup delete")
}
