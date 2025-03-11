require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    bsctestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [`0x8b47c499d3db7f06ca82152785175c353094899d32b5fee8b39c36cf353ab1b6`],
    },
  },
};
