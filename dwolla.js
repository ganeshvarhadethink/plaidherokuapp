const plaid = require('plaid');
var Client = require("dwolla-v2").Client;
var public_token
// Initialize client
// PLAID_CLIENT_ID=5e3d6f0727beb40012a88730 \
// PLAID_SECRET=efed9995108b998c9088cc00c7b991 \
// PLAID_PUBLIC_KEY=e7991d8e59f080a182f5c7c4f161ea \
const plaidClient = new plaid.Client("5e3d6f0727beb40012a88730", "efed9995108b998c9088cc00c7b991", "e7991d8e59f080a182f5c7c4f161ea", plaid.environments.sandbox, {
    version: '2018-05-22'
});

var dwolla = new Client({
    key: "RKd3W3u7HrbnhxiEZkFAUbZQpQEK6bt5fBjvKsE2wNjbSiMDAX",
    secret: "uGOgVWHVvPIhcMTX54C0gbhb4nByaTEmOtqZEb8PGWx78Ykj87",
    environment: "sandbox" // defaults to 'production'
});

//   dwolla
//   .post("customers", {
//     firstName: 'Jane',
//     lastName: 'Merchant',
//     email: 'solePropBusiness@email.com',
//     ipAddress: '143.156.7.8',
//     type: 'business',
//     dateOfBirth: '1980-01-31',
//     ssn: '6789',
//     address1: '99-99 33rd St',
//     city: 'Some City',
//     state: 'NY',
//     postalCode: '11101',
//     businessClassification: '9ed3f670-7d6f-11e3-b1ce-5404a6144203',
//     businessType: 'soleProprietorship',
//     businessName: 'Jane Corp',
//     ein: '00-0000000',
//   })
//   .then(res => console.log(res.headers.get("location")));
// dwolla.post("https://api-sandbox.dwolla.com/customers/67a1ac0a-c666-47b6-8d24-bf4e17c48f12/iav-token").then(res => console.log(res.body.token));

// dwolla.iav.start("fYKH5PETwfXkkaDyGM9X8YcJopBbW5tQycl6v8VgvbCyYjxYQk", function(err,res){
//     if(err){
//         console.log(err)
//     }else{
//     console.log(res)
//     }
// })

// var requestBody = {
//     'plaidToken': 'processor-sandbox-39d93467-1eb5-4348-95f6-120e302b7996',
//     'name': 'jane savings'
//   };
  
  
//     dwolla.post('https://api-sandbox.dwolla.com/customers/67b3af18-9cb4-4ad4-9d37-d46489db9df4/funding-sources', requestBody)
//     .then(res => console.log(res.headers.get('location')));

//   https://api-sandbox.dwolla.com/customers/ef53f3f7-dea8-4904-9abc-94d42447468c
// https://api-sandbox.dwolla.com/customers/67a1ac0a-c666-47b6-8d24-bf4e17c48f12
// https://api-sandbox.dwolla.com/customers/5f5f3c80-e19d-4059-9202-cdd3487b0c38


// DuExNQiV3ncoWDHK4QFRmFTI7DhuyajG4QIyMlsgSsPKOLCWFk

// plaidClient.createPublicToken("access-sandbox-4a2a7ab4-3814-4d0e-8c3e-7b1bbf50666e",
//     function(err,res) {
//       // The Link module finished loading.
//       if (err) {
//           console.log(err)
//         // The user encountered a Plaid API error prior to exiting.
//       }else{
//       console.log('Public Token: ' + JSON.stringify(res));
//        public_token = res.public_token
//        plaidClient.exchangePublicToken(public_token, function(err, res) {
//         const accessToken = res.access_token;
//         // Create a processor token for a specific account id.
//         plaidClient.createProcessorToken(
//           accessToken,
//           "Rmrym9rlvjcZZ3pMb64AS7BLlvwJNgTR9gLkn",
//           'dwolla',
//           function(err, res) {
//             if (err) {
//                     console.log("Error", err)
//                     } else {console.log("response", JSON.stringify(res))
//             const processorToken = res.processor_token;
//           }
//         }
//         );
//       });
//       }
//     })


// processor-sandbox-94ea3a5a-68f2-4539-ac2c-e0e1ef2b9ad8"
//KoPaqPpx1vfvb7p9mKjaF64VBpz4J8FV9AER5

//processor-sandbox-22488446-4163-4094-a860-75d5fc9d3c32
//WdrrrVX7ZQF7X1mjpwqGh1AqW6PM96tlmJ7Mk
//https://api-sandbox.dwolla.com/customers/67a1ac0a-c666-47b6-8d24-bf4e17c48f12
//https://api-sandbox.dwolla.com/funding-sources/90c03eb1-7b2f-4ae4-8f9b-a675d115644c
//fYKH5PETwfXkkaDyGM9X8YcJopBbW5tQycl6v8VgvbCyYjxYQk

//access-sandbox-4a2a7ab4-3814-4d0e-8c3e-7b1bbf50666e
//Rmrym9rlvjcZZ3pMb64AS7BLlvwJNgTR9gLkn
//processor-sandbox-39d93467-1eb5-4348-95f6-120e302b7996
//https://api-sandbox.dwolla.com/customers/5f5f3c80-e19d-4059-9202-cdd3487b0c38
//https://api-sandbox.dwolla.com/funding-sources/7c7806b5-e5cd-4b10-b23d-487af39f233f

// https://api-sandbox.dwolla.com/customers/67b3af18-9cb4-4ad4-9d37-d46489db9df4
// https://api-sandbox.dwolla.com/funding-sources/a8c30bc8-fd4e-4ab5-b0de-e19c4364223f


var requestBody = {
    _links: {
      source: {
        href: 'https://api-sandbox.dwolla.com/funding-sources/a8c30bc8-fd4e-4ab5-b0de-e19c4364223f'
      },
      destination: {
       
        href: 'https://api-sandbox.dwolla.com/funding-sources/90c03eb1-7b2f-4ae4-8f9b-a675d115644c'
      }
    },
    amount: {
      currency: 'USD',
      value: '225.00'
    }
  };
  
  // For Dwolla API applications, an appToken can be used for this endpoint. (https://docs.dwolla.com/#application-authorization)
  dwolla.post('https://api-sandbox.dwolla.com/transfers', requestBody)
  .then(res => console.log(res.headers.get('location')))


//   dwolla.get('https://api.dwolla.com/accounts/9c2e40fc-6486-4896-ac6d-9fb5e83d4c2f/funding-sources')
//   .then(res => console.log(res.body))