import Web3 from 'web3';
import MyContract from './MyContract.json';

const web3 = new Web3('https://rinkeby.infura.io/v3/YOUR-PROJECT-ID');

const contract = new web3.eth.Contract(
  MyContract.abi,
  'CONTRACT-ADDRESS'
);

const sendTransaction = async () => {
  const accounts = await web3.eth.getAccounts();
  const result = await contract.methods.myFunction().send({
    from: accounts[0],
    gasPrice: web3.utils.toWei('10', 'gwei'),
    gas: 300000
  });
  console.log(result);
}

function App() {
  return (
    <div>
      <button onClick={sendTransaction}>Send Transaction</button>
    </div>
  );
}

export default App;
