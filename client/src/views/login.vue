<template>
  <v-container>
    <img id="logo" class="itemheader" :src="require('@/assets/img/logo.png')" />
    <div class="topright">
      Dont have an account?
      <v-btn rounded outlined><b>Sign Up</b> </v-btn>
    </div>
    <v-layout>
      <v-flex>
        <div class="centered">
          <h1>Welcome</h1>
          <v-text-field
            type=""
            label="Email"
            rounded
            single-line
            outlined
          ></v-text-field>
          <v-text-field
            type="password"
            label="Password"
            rounded
            single-line
            outlined
            class="shrink"
          >
          </v-text-field>
          <v-col align="center" justify="space-around">
            <v-btn id="logbtn" rounded color="#fff176"><b>Login</b></v-btn>
          </v-col>
          <div class="test">
            <hr class="solid" />
            Login with
          </div>
          <div>
            <v-col align="center">
              <div>
                <v-btn id="SocialMediabtn" rounded outlined @click="onClick">
                  <img src="@/assets/img/metamask.png" />
                  Login with Metamask
                </v-btn>
              </div>
            </v-col>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Example",
  data() {
    return {
      account: null,
      userType: null,
    };
  },
  methods: {
    onClick() {
      var App = {
        contracts: {},
        init: async () => {
          await App.loadWeb3();
          await App.loadAccount();
          await App.loadContract();
          //await App.render();
          //await App.renderTasks();
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
          console.log(App.account);
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
      console.log('hola perrras');

      App.init();
      
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: black;
  margin: 30px;
}

#logo {
  width: auto;
  height: 50px;
  margin: 10px;
  position: absolute;
  top: 8px;
  left: 0px;
}
.topright {
  position: absolute;
  top: 30px;
  right: 16px;
  font-size: 18px;
}
.topleft {
  position: absolute;
  top: 30px;
  left: 16px;
  font-size: 18px;
}
.centered {
  width: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#logbtn {
  width: 300px;
  height: 50px;
}
#vdivider {
  width: 50px;
}
.test {
  text-align: center;
  margin-bottom: 5px;
  margin-top: 32px;
}
#SocialMediabtn {
  width: 300px;
  height: 50px;
  margin: 10px;
}
hr.solid {
  border-top: 3px solid #bbb;
  margin: 10px;
}
</style>
