//Connect with ganache to transfer ether account to another account
var Tx = require('ethereumjs-tx');
const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/0b293a89346f49939d411e2a44f94c65');

const account1 = "0x5FCD504f196B989B728Bf05B02Ac16314d523b89"; //sender
const account2 = "0x7Db6D1FBE5BF2f1EeB716e2C2982ddf6c65114A1";// receiver

const privateKey1 = "E06A307692616FC8AB67BAB630199991403FC0E0A5C148A4FF40855685A627AA";
//const privateKey2 = "60bb5c77eb1fae02bacb6d88e982f16feced788f10a019b630085e30f85b0ae5";

const privateKey1Buffer = Buffer.from(privateKey1,'hex');
//const privateKey2Buffer = Buffer.from(privateKey2, 'hex');

//console.log("Buffer 1 = ",privateKey1Buffer);
//console.log("Buffer 2 = ",privateKey2Buffer);

 web3.eth.getTransactionCount(account1, (err, txCount)=>{

    const txObject = {
        nonce:    web3.utils.toHex(txCount),
        to:       account2,
        value:    web3.utils.toHex(web3.utils.toWei('9', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }

    const tx = new Tx.Transaction(txObject, { chain: 'ropsten' });
    tx.sign(privateKey1Buffer);

    const serializedTx = tx.serialize();
    const raw = '0x' + serializedTx.toString('hex');

    //console.log("tx = ",tx);
    //console.log("serializedTx = ",serializedTx);
    //console.log("raw = ",raw);

    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log("Error ",err);
        console.log('txHash:', txHash)
    });

});