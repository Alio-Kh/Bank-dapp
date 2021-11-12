pragma solidity 0.5.16;

contract Bank {
    int balance;
    
    constructor() public {
        balance = 1;
    }
    
    function getBalance() view public returns(int) {
        return balance;
    }
    
    function withdraw(int amount) public{
        balance = balance - amount;
        
    }
    
    function deposit(int amount) public {
        balance = balance + amount;
    } 
}