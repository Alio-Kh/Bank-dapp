var contract

web3 = new Web3(web3.currentProvider);
$(document).ready(function() {

    var address = "0x9D05A6814e19C0df05F08319e6BF74e9D5800ea1";
    var abi = [{
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }, {
        "constant": false,
        "inputs": [{
            "internalType": "int256",
            "name": "amount",
            "type": "int256"
        }],
        "name": "deposit",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "getBalance",
        "outputs": [{
            "internalType": "int256",
            "name": "",
            "type": "int256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
            "internalType": "int256",
            "name": "amount",
            "type": "int256"
        }],
        "name": "withdraw",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }];

    contract = new web3.eth.Contract(abi, address)

    contract.methods.getBalance().call().then((bal) => {
        $("#balance").html(bal)
    })
})

$("#deposit").click(async() => {
    var amount = 0;
    amount = parseInt($("#amount").val());
    const accounts = await ethereum.request({
        method: 'eth_accounts'
    });

    var acc = accounts[0];
    console.log(accounts);
    contract.methods.deposit(amount).send({
        from: acc
    }).then((tx) => {
        console.log(tx);
    }).catch((tx) => {
        console.log(tx);
    })
})

$("#withdraw").click(async() => {
    var amount = 0;
    amount = parseInt($("#amount").val());
    const accounts = await ethereum.request({
        method: 'eth_accounts'
    });

    var acc = accounts[0];
    console.log(accounts);
    contract.methods.withdraw(amount).send({
        from: acc
    }).then((tx) => {
        console.log(tx);
    }).catch((tx) => {
        console.log(tx);
    })
})