pragma solidity ^0.8.0;

contract ImageUpload {

    mapping(bytes32 => string) public images;

    function uploadImage(string memory _cid) public {
        bytes32 imageHash = keccak256(abi.encodePacked(_cid));
        images[imageHash] = _cid;
    }

    function getImage(bytes32 _hash) public view returns (string memory) {
        return images[_hash];
    }

}

