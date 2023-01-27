// import { contractABI } from "/utils";
require("dotenv").config();
const ethers = require("ethers");

const contractABI = [
	{
		inputs: [],
		name: "count",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "dec",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "get",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "inc",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];
// new ethers.providers.AlchemyProvider([(network = "homestead"), [apiKey]]);
// Contract Source Code (Goerli Testnet)
// https://goerli.etherscan.io/address/0x5F91eCd82b662D645b15Fd7D2e20E5e5701CCB7A#code
const provider = new ethers.providers.AlchemyProvider(
	"goerli",
	process.env.TEST_API_KEY
);

async function main() {
	// new ethers.Contract(address, abi, signerOrProvider);
	const counterContract = new ethers.Contract(
		"0x5F91eCd82b662D645b15Fd7D2e20E5e5701CCB7A",
		contractABI,
		provider
	);

	const currentCounterValue = await counterContract.count();
	console.log("Current Counter Value: ", currentCounterValue);
}

main();
