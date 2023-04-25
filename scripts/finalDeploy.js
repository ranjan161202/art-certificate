const hre = require("hardhat");

async function main()
{
    const image= await hre.ethers.getContractFactory("image");
    const contract = await image.deploy();//instance of contract

    await contract.deployed();
    console.log("Addresss of contract:", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });