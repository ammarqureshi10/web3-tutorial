const rpcUrl = "https://ropsten.infura.io/v3/0b293a89346f49939d411e2a44f94c65";
let web3  = new Web3(rpcUrl);

var address = "0xd424B3fdD6009a8797044f55935F71D087120138";
var abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "logString",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "age",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			}
		],
		"name": "setAge",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
let contract = new web3.eth.Contract(abi,address);

// Events 
 contract.getPastEvents(
    'AllEvents',
    {
      fromBlock: 0,
      toBlock: 'latest'
    },
    (err, events) => { 
      console.log("events = ",events)
      console.log("error = "+err) 
    }
  )

//var subscribtion = 