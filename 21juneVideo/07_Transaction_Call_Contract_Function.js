// Calling deployed contract function setAge to change age
Tx = require('ethereumjs-tx');
const Web3 = require('web3');
web3 = new Web3('https://ropsten.infura.io/v3/0b293a89346f49939d411e2a44f94c65');
var account1 = "0x7Db6D1FBE5BF2f1EeB716e2C2982ddf6c65114A1";
const privateKey1 = "E7B22BD8F19464485AB68A98E02C1B47254EA5A33A3DD5406B034B10B33914E7";

const privateKey1Buffer = Buffer.from(privateKey1, 'hex');

const contractAddress = "0x7643d6831D755d58DecA6ddF02deC5b447baF1D1";

const abi = [
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "_age",
				"type": "int256"
			}
		],
		"name": "setAge",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "age",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAge",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getQuote",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	}
];

const contract = new web3.eth.Contract(abi, contractAddress);

//console.log("Buffer 1 = ",privateKey1Buffer);

web3.eth.getTransactionCount(account1, (err, txCount)=>{

    const txObject = {
        nonce:    web3.utils.toHex(txCount),
        gasLimit: web3.utils.toHex(800000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
        to: contractAddress,
    data: contract.methods.setAge(3).encodeABI()
      }

    const tx = new Tx.Transaction(txObject, { chain: 'ropsten' });
    tx.sign(privateKey1Buffer);

    const serializedTx = tx.serialize();
    const raw = '0x' + serializedTx.toString('hex');

    //console.log("tx = ",tx);
    //console.log("serializedTx = ",serializedTx);
    //console.log("raw = ",raw);

    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log('txHash:', txHash)
    });

});
/*
contract.methods.getAge().call(function (err,result){
    console.log("Age = ",result);
});
*/