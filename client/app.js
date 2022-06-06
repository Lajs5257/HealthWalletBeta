App = {
  contracts: {},
  init: async () => {
    await App.loadWeb3();
    await App.loadAccount();
    await App.loadContract();
    await App.render();
    await App.renderTasks();
  },
  loadWeb3: async () => {
    if (window.ethereum) {
      App.web3Provider = window.ethereum;
      await window.ethereum.request({ method: "eth_requestAccounts" });
    } else if (web3) {
      web3 = new Web3(window.web3.currentProvider);
    } else {
      console.log(
        "No ethereum browser is installed. Try it installing MetaMask "
      );
    }
  },
  loadAccount: async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    App.account = accounts[0];
  },
  loadContract: async () => {
    try {
      const res = await fetch("RecordsContract.json");
      const recordsContractJSON = await res.json();
      App.contracts.RecordsContract =
        TruffleContract(recordsContractJSON);
      App.contracts.RecordsContract.setProvider(App.web3Provider);

      App.recordsContract =
        await App.contracts.RecordsContract.deployed();
    } catch (error) {
      console.error(error);
    }
  },
  render: async () => {
    //document.getElementById("account").innerText = App.account;
    console.log("Account: " + App.account);
  },
};