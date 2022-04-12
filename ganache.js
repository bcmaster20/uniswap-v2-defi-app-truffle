const Web3 = require("web3");
require("dotenv").config();

const ganache = require("ganache-cli");
const options = {
    fork: `https://mainnet.infura.io/v3/${process.env.INFUEA_MAINNET}`,
    unlocked_accounts : ["0x"],
    account_keys_path: "keys.json",
    host: "127.0.0.1",
    port: 7545,
    seed: 1306,

};

