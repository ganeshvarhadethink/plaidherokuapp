const userService = require('../service/user.service')
var Client = require("dwolla-v2").Client;
var dwolla = new Client({
   key: "RKd3W3u7HrbnhxiEZkFAUbZQpQEK6bt5fBjvKsE2wNjbSiMDAX",
   secret: "uGOgVWHVvPIhcMTX54C0gbhb4nByaTEmOtqZEb8PGWx78Ykj87",
   environment: "sandbox" // defaults to 'production'
});
module.exports = {
   getBalance: async (req, res, next) => {

      let options = {
         account_ids: ['xjKB4KENA1ixn5XkjDVoUnK8RL5Ka3FnzVy65']
      };

      let balanceResponse = await userService.plaidBalance(options);
      console.log('balanceResponse: ', balanceResponse);
      let resultf = await userService.finalData(balanceResponse);
      console.log('balanceResponse: ', resultf);
      res.json({
         status: "success",
         message: "User added successfully!!!",
         data: resultf
      });

   },
   transfer: async (req, res, next) => {
      console.log("enter")
      if(!res.amount){
      req.sender = "90c03eb1-7b2f-4ae4-8f9b-a675d115644c"
      req.reciever = "a8c30bc8-fd4e-4ab5-b0de-e19c4364223f"
      req.amount = 100.00
      }
      var requestBody = {
         _links: {
            source: {
               href: 'https://api-sandbox.dwolla.com/funding-sources/' + req.sender
            },
            destination: {
               href: 'https://api-sandbox.dwolla.com/funding-sources/' + req.reciever
            }
         },
         amount: {
            currency: 'USD',
            value: req.amount
         }
      };
      var resp
      await dwolla.post('https://api-sandbox.dwolla.com/transfers', requestBody)
         .then(res => {
            console.log(res)
            resp=res
            
         })
         .catch(err => {
            console.log(err)
            resp=err
            
         })
         if(resp.status !==201){
            next(err)
         }else{
            res.json({
               status: "success",
               message: "successfully Transferd!!!",
               data: resp.headers.get('location')
            });
         }

      //   await dwolla.post('https://api-sandbox.dwolla.com/transfers', requestBody, function (err,res) {
      //       if (err) {
      //          console.log(err)
      //          next(err)
      //       } else {
      //          console.log(res.headers.get('location'))
      //          res(res)
      //       }
      //    })
   }
}