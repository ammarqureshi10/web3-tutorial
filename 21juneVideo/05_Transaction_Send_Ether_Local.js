//Connect with ganache to transfer ether account to another account
var Tx = require('ethereumjs-tx');
const Web3 = require('web3')
const web3 = new Web3('http://127.0.0.1:7545');

const account1 = "0xbC55dE7e619D61E37A98Ab143c1f36Eab6013dAD"; //sender
const account2 = "0x1dE2346368077E1dE20abE5e962d4Fb8dF27D516";// receiver

const privateKey1 = "f7cac035bdb7e60ab0225374a0bffa420e51e4b08acc4d6bc2b1a3f2d825b4ea";
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

    const tx = new Tx.Transaction(txObject);
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