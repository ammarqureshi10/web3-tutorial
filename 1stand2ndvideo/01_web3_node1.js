// connect with infura to check balance in terminal
const Web3 = require('web3');
const rpcUrl = "https://ropsten.infura.io/v3/0b293a89346f49939d411e2a44f94c65";

let web3 = new Web3(rpcUrl);

var address = "0x7Db6D1FBE5BF2f1EeB716e2C2982ddf6c65114A1";

web3.eth.getBalance(address, function(err, wei){

    console.log("WEI", wei);
    let balance = web3.utils.fromWei(wei, "gwei");
    console.log(balance);
});