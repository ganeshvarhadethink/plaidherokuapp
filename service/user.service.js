const plaid = require('plaid')
const user = require('../models/user');
const plaidClient = new plaid.Client("5e3d6f0727beb40012a88730", "efed9995108b998c9088cc00c7b991", "e7991d8e59f080a182f5c7c4f161ea", plaid.environments.sandbox, {
  version: '2018-05-22'
});

exports.plaidBalance = function (options) {

  return new Promise((resolve, reject) => {
     plaidClient.getBalance("access-sandbox-e617c141-d3e8-40d2-b483-65227331f6c3", options, function (err, res) {
        if (err) {
           resp = err;
           statusCode = err.statusCode;
           console.log("Error1", err);
           reject(resp);
        } else {
           console.log("response1", res)
           resp = res.accounts[0];
           statusCode = 200;
           resolve(resp);
        }

     });
  });


}
exports.finalData = function (resp) {

     return new Promise((resolve, reject) => {
       user.create(resp, function (error, results) {
           if (error) {
              console.log("Error3", resp);
              reject(error);
           } else {
              console.log("Success:.........", results);
              results.message = "Record stored Successfully";
              resolve(response = {
                 statusCode: 200,
                 headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "*",
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Headers": "*",
                    "Access-Control-Allow-Credentials": true,
                    "preflightContinue": true
                 },

                 body: results,
              });
           }
        });
     })
  }

