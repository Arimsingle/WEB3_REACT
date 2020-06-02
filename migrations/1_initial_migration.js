const Migrations = artifacts.require("Migrations");
const Person = artifacts.require("Person");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Person,"001","EIEI");
};
//0x210d978fd91c1c75d4A5B3Fd1de73E015Fdd8d40