import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.sol";
// import getWeb3 from "./getWeb3";
import { abi } from "./abi"
import "./App.css";
import Web3 from "web3"
// const App = () => {
//   const [storage]
// }

class App extends Component {
  
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    console.log(abi);
    try {
      // Get network provider and web3 instance.
      const web3 = new Web3("http://127.0.0.1:9545/");
      console.log(web3);
      

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      // const deployedNetwork = SimpleStorageContract.networks[networkId];
      const contract = new web3.eth.Contract(
        abi,
        "0x210d978fd91c1c75d4A5B3Fd1de73E015Fdd8d40",
      );
      console.log(contract);

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: contract }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.setName("555").send({ from: "0x53483e5B0D2e5B35732A97cb12e9585B75dEef21", gas: 3000000 });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.name().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p>
          Try changing the value stored on <strong>line 40</strong> of App.js.
        </p>
        <div>The stored value is: {this.state.storageValue}</div>
      </div>
    );
  }
}

export default App;
