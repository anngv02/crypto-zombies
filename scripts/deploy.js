const hre = require("hardhat");

async function main() {
  // Compile smart contract trước khi deploy
  await hre.run("compile");

  console.log("Deploying ZombieFactory contract...");

  // Lấy contract factory
  const ZombieFactory = await hre.ethers.getContractFactory("ZombieFactory");

  // Triển khai contract
  const zombieFactory = await ZombieFactory.deploy();

  // Chờ contract được deploy
  await zombieFactory.deployed();

  console.log(`ZombieFactory deployed at: ${zombieFactory.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
