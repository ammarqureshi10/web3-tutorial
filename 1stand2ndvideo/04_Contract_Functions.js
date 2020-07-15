let web3 = new Web3('https://ropsten.infura.io/v3/0b293a89346f49939d411e2a44f94c65');

var abi = [
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
	},
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
	}
];
var address = "0x32557501aE2A68a39C3727996Faa31F1f9616c47";
const contract = new web3.eth.Contract(abi,address);
console.log("Contract",contract);

contract.methods.getAge().call(function(err,result){
    console.log("Result = ",result);
})
contract.methods.getQuote().call(function(err,String){
	console.log("string = ",String);
})