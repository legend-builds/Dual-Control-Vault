import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  const owner2 = "0x45D14185CD12D92ca15158B73f1C02f61F26E834"; // آدرس دوم

  console.log("Deploying contract with:", deployer.address);

  const DualControlVault = await ethers.getContractFactory("DualControlVault");
  const vault = await DualControlVault.deploy(owner2);

  await vault.waitForDeployment();

  console.log("DualControlVault deployed to:", await vault.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});