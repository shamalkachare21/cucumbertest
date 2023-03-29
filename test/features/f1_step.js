const assert = require('assert')
const { When, Then, Given } = require('@cucumber/cucumber')
const app = require('../..')


//Given('the below users exists in the system', async function (table) {
Given('the below users exists in the system {string} {string} {string}', async function (firstName, lastName, account) {
  
   // this.users = table.hashes();
   console.log(firstName, "lastName-- ", lastName, "account--", account )
    //console.log("given-----")
   //console.log(this.users);
  });

When('get users data request with account {string} has been sent', async function (aaccountname) {
    //console.log("accont name - ",aaccountname);
    this.returnData = "2";
});
  

Then('list of users is return {string} records', function (expectedResponse) {
    //console.log("---",expectedResponse)
  assert.equal(this.returnData, expectedResponse)
});
