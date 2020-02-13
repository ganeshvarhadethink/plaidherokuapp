const plaid = require('plaid');

// Initialize client
// PLAID_CLIENT_ID=5e3d6f0727beb40012a88730 \
// PLAID_SECRET=efed9995108b998c9088cc00c7b991 \
// PLAID_PUBLIC_KEY=e7991d8e59f080a182f5c7c4f161ea \
const plaidClient = new plaid.Client("5e3d6f0727beb40012a88730", "efed9995108b998c9088cc00c7b991", "e7991d8e59f080a182f5c7c4f161ea", plaid.environments.sandbox, {
    version: '2018-05-22'
});

// plaidClient.createStripeToken("access-sandbox-e617c141-d3e8-40d2-b483-65227331f6c3", "xjKB4KENA1ixn5XkjDVoUnK8RL5Ka3FnzVy65",function(err,res){
// if(err){
//     console.log("Error",err)
// }else console.log("response",res)
// })



// plaidClient.getItem("access-sandbox-e617c141-d3e8-40d2-b483-65227331f6c3", function(err,res){
// if(err){
//     console.log("Error",err)
// }else console.log("response",res)
// })
// options = {
//     account_ids: ['xjKB4KENA1ixn5XkjDVoUnK8RL5Ka3FnzVy65']
// };
// plaidClient.getBalance("access-sandbox-4a2a7ab4-3814-4d0e-8c3e-7b1bbf50666e", function (err, res) {
//     if (err) {
//         console.log("Error", err)
//     } else console.log("response", JSON.stringify(res.accounts[1].balances))
// })
account_id: 'Rmrym9rlvjcZZ3pMb64AS7BLlvwJNgTR9gLkn'
plaidClient.getTransactions("access-sandbox-4a2a7ab4-3814-4d0e-8c3e-7b1bbf50666e",'2020-02-01', '2020-02-13', function(err,res){
  if(err){
    console.log(err);
  }else{
    console.log(res)
  }
});
// options = {"amount": {
//     "value":"5.00",
//     "currency": "USD"
// }}
// plaidClient.createDepositSwitch("xjKB4KENA1ixn5XkjDVoUnK8RL5Ka3FnzVy65", "access-sandbox-07644515-3a49-4558-a599-07980b565ef7", options,function (err, res) {
//     if (err) {
//         console.log("Error", err)
//     } else console.log("response", res)
// })

// plaidClient.createProcessorToken(
//     "access-sandbox-e617c141-d3e8-40d2-b483-65227331f6c3",
//     "KoPaqPpx1vfvb7p9mKjaF64VBpz4J8FV9AER5",
//     'dwolla',
//     function(err, res) {
//         if (err) {
//                     console.log("Error", err)
//                 } else console.log("response", JSON.stringify(res))
           
//       const processorToken = res.processor_token;
//     //   processor-sandbox-94ea3a5a-68f2-4539-ac2c-e0e1ef2b9ad8
//     }
//   );
// plaidClient.createPublicToken("access-sandbox-e617c141-d3e8-40d2-b483-65227331f6c3",
//     function(err,res) {
//       // The Link module finished loading.
//       if (err) {
//           console.log(err)
//         // The user encountered a Plaid API error prior to exiting.
//       }else{
//       console.log('Public Token: ' + JSON.stringify(res));
//       }
//     })
  
