
Tx = require('ethereumjs-tx');
const Web3 = require('web3');
web3 = new Web3('https://ropsten.infura.io/v3/0b293a89346f49939d411e2a44f94c65');
var account1 = "0x7Db6D1FBE5BF2f1EeB716e2C2982ddf6c65114A1";
const privateKey1 = "E7B22BD8F19464485AB68A98E02C1B47254EA5A33A3DD5406B034B10B33914E7";

const privateKey1Buffer = Buffer.from(privateKey1, 'hex');

//const contractAddress = "0x843a285FdF8AdC87bE460030Be4edba202105d14";


//const contract = new web3.eth.Contract(abi, contractAddress);

//console.log("Buffer 1 = ",privateKey1Buffer);

web3.eth.getTransactionCount(account1, (err, txCount)=>{
    const data = "608060405234801561001057600080fd5b506101ca806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063171755b114610051578063262a9dff146100d4578063967e6e65146100f2578063f193dc1d14610110575b600080fd5b61005961013e565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561009957808201518184015260208101905061007e565b50505050905090810190601f1680156100c65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100dc61017b565b6040518082815260200191505060405180910390f35b6100fa610181565b6040518082815260200191505060405180910390f35b61013c6004803603602081101561012657600080fd5b810190808035906020019092919050505061018a565b005b60606040518060400160405280600d81526020017f416d6d6172205175726573686900000000000000000000000000000000000000815250905090565b60005481565b60008054905090565b806000819055505056fea2646970667358221220727aa1dbdf2308afa8137f1232bea6cc5d095a6e6898521aa6c4f9206349e5cf64736f6c63430006060033";
    const bufferData = Buffer.from(data,'hex');

    const txObject = {
        nonce:    web3.utils.toHex(txCount),
        gasLimit: web3.utils.toHex(800000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
        data: bufferData
    //data: contract.methods.setAge(3).encodeABI()
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

/* contract.methods.getAge().call(function (err,result){
    console.log("Age = ",result);
});
*/
