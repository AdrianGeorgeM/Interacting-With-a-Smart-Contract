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
// new ethers.Wallet(privateKey,[ ,provider]);
const wallet = new ethers.Wallet(process.env.TEST_PRIVATE_KEY, provider);

async function main() {
	// new ethers.Contract(address, abi, signerOrProvider);
	const counterContract = new ethers.Contract(
		"0x5F91eCd82b662D645b15Fd7D2e20E5e5701CCB7A",
		contractABI,
		wallet
	);

	// check on etherscan for the contract address Transactions
	// https://goerli.etherscan.io/address/0x5F91eCd82b662D645b15Fd7D2e20E5e5701CCB7A
	//Call the increment and decrement functions to prove that my scripts is working correctly
	// by checking the last Method ID on the contract address Transactions

	const decrementCounterValue = await counterContract.dec();
	const incrementCounterValue = await counterContract.inc();
	let currentCount = await counterContract.get();

	console.log("Current Counter Value: ", currentCount.toString());
	console.log("decrementCounterValue: ", decrementCounterValu.hash);
	console.log("incrementCounterValue: ", incrementCounterValue.hash);
}

main();
