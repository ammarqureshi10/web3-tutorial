// connect with local Host to check balance in terminal
const Web3 = require('web3');
console.log(Web3);
 const rpcUrl = "HTTP://127.0.0.1:7545";

let web3 = new Web3(rpcUrl);

console.log("New Instance", web3);

var address = "0xB3Af85DDB7F55778965ebbc176104B8b74c4EaB5";

web3.eth.getBalance(address, function(err, wei){
    console.log("WEI",wei);
    let balance = web3.utils.fromWei(wei, "Ether");
    console.log(balance);
});