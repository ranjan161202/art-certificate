pragma solidity 0.8.19;

contract image{
    struct Memo{
        string name;
        string imgHash;
        uint timestamp;
        address from;
    }

    Memo []memos;
    address payable owner;

    constructor()
    {
        owner=payable(msg.sender);
    }
    function buyImage(string memory name, string memory imgHash) public payable{
        require(msg.value>0,"Please pay greater than 0 ether");
        owner.transfer(msg.value);
        memos.push(Memo(name,imgHash,block.timestamp,msg.sender));
    }

    function getMemos() public view returns(Memo[] memory){
        return memos;
    }
}