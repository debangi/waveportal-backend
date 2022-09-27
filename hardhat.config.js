require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL;
const PRIVATE_RINKEBY_ACCOUNT_KEY = process.env.PRIVATE_RINKEBY_ACCOUNT_KEY;

module.exports = {
  solidity: '0.8.0',
  defaultNetwork: 'hardhat',
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_API_URL,
      accounts: [process.env.PRIVATE_RINKEBY_ACCOUNT_KEY],
    },
  },
};
