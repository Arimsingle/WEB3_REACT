// pragma solidity ^0.5.0;
pragma solidity >=0.4.21 <0.7.0;
contract Person {
    // data type public private internal constant
    // struct User{
    //     string person_name;
    //     string password1;
    // }
    uint256 public id;
    string public name;
    mapping(address => string) nickname;
    constructor(uint256 _id,string memory _name) public {
        id = _id;
        name = _name;
    }
    // calldata external
    function setName(string memory _name) public {
        name = _name;
    }
    // function setSingleStatus(bool _single) public {
    //     single = _single;
    // }
    // function setTelno(uint256 _telno) public {
    //     telno = _telno;
    // }
    // function getPassword() public view returns (string memory){
    //     return password;
    // }
    // function getSender() public view returns(address) {
    //     return msg.sender;
    // }
    // function getValue() public payable returns (uint256){
    //     return msg.value;
    // }
    // function setNickname(string memory _nickname) public{
    //     nickname[msg.sender] = _nickname;
    // }
    // function getNickname() public view returns (string memory){
    //     return nickname[msg.sender];
    // }
    
}