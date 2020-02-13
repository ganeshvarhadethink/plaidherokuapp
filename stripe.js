const stripe = require("stripe")("sk_test_i1JVDSqz00mdrJzyVPLfG6b4");
// const stripe = require('stripe')('sk_test_i1JVDSqz00mdrJzyVPLfG6b4');
var plaid = require('plaid');

const plaidClient = new plaid.Client("5e3d6f0727beb40012a88730", "efed9995108b998c9088cc00c7b991", "e7991d8e59f080a182f5c7c4f161ea", plaid.environments.sandbox, {
    version: '2018-05-22'
});
// plaidClient.exchangePublicToken('public-sandbox-65edff53-5a14-4fb3-a1da-621a4e28c46b', function(err, res) {
//     if(err){
//         console.log(err)
//     }else{
//   var accessToken = res.access_token;
//   var requestId =res.request_id
//   console.log("accessToken",accessToken)
// }
//   // Generate a bank account token  q3AXrANzLPuXDjWlymweIEXgxPMXRzSdj76gL
//   plaidClient.createStripeToken(accessToken, "KoPaqPpx1vfvb7p9mKjaF64VBpz4J8FV9AER5", function(err, res) {
//     if(err){
//         console.log(err)
//     }else{

//     var bankAccountToken = res.stripe_bank_account_token;
//     stripe.customers.verifySource(
//         "cus_GimIQiPw0ZvSoR",
//         "ba_1GBKkIJPbsW2oGlFiWl4uEif",
//             {
//               amounts: [32, 45],
//             }
//           );
//     console.log(bankAccountToken)
// stripe.customers.create({
//     description: 'CUstomer 1',
//     source: bankAccountToken,
//   },function(err, res){
//         if(err){
//             console.log(err);
//         }else{
//         console.log(res)
//         }
//       });
//     }
//   });
// });
// accessToken access-sandbox-e617c141-d3e8-40d2-b483-65227331f6c3
// btok_1GBJT6JPbsW2oGlFdNUryhqQ
//btok_1GBKfiJPbsW2oGlFoZP0fPEN
//btok_1GBKkIJPbsW2oGlFNaBrUxwE
// WlZhRfMP3N8E1hG
// cus_Gim5k9N0Ip3ynQ
//cus_GimEFTeRP8aGqi
// cus_GimIQiPw0ZvSoR

 stripe.charges.create({
    amount: 200,
    currency: 'usd',
    customer: 'cus_Gim5k9N0Ip3ynQ',
    transfer_data: {
        amount: 850,
        destination: 'ba_1GBKXIJPbsW2oGlFPPNRUCU1',
      }
      
  });
// stripe.transfers.create(
//     {
//       amount: 400,
//       currency: 'usd',
//       destination: 'ba_1GBKkIJPbsW2oGlFiWl4uEif',
//       transfer_group: 'ORDER_95',
//     },
//     function(err, res) {
//         if(err){
//                         console.log(err);
//                     }else{
//                     console.log(res)
//                     }
//                   });
  
