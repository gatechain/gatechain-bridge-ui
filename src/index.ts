import {Core} from './core';
export * from "./themes";

// production
export default Core;

// @ts-ignore
// default dev
// new Core({
// 	assetApplyLink: 'https://www.gateio.pro',
// 	gateLink: 'https://www.gateio.pro',
//   //config
// 	chainRule: {
// 		'1->66': {
// 			tips: ''
// 		},
// 		'66->1': {
// 			tips:'Gate.io has supported asset exchange between different chains with lower service fees. Deposit your asset and withdraw what you want.'
// 		}
// 	},
// 	pairs: [
// 		{
// 			name: 'Ethereum',
// 			chainId: 1,
// 			symbol: 'ETH',
// 			logo: require('./images/eth.png'),
// 			bridgeAddress: '',
// 			handler: '0xcA306fc3c3b28d837bf65f026fE8bE1cd42c0f38',
// 			decimals: 18,
// 			assetList: [
// 				{
// 					symbol: "USDT",
// 					logo: '',
// 					name: "USDT",
// 					decimals: "10",
// 					address: '0x65B954882BDC6efEf3eF2027027d895201236671',
// 					balance: 0
// 				},
// 				{
// 					symbol: "BNB1",
// 					name: "BNB1",
// 					logo: '',
// 					decimals: "10",
// 					address: '0x65B954882BDC6efEf3eF2027027d895201236674',
// 					balance: 0
// 				},
// 				{
// 					symbol: "BNB2",
// 					name: "BNB2",
// 					logo: '',
// 					decimals: "10",
// 					address: '0x65B954882BDC6efEf3eF2027027d895201236673',
// 					balance: 0
// 				},
// 				{
// 					symbol: "B1B2",
// 					name: "B1B2",
// 					logo: '',
// 					decimals: "10",
// 					address: '0x65B954882BDC6efEf3eF2027027d895201236672',
// 					balance: 0
// 				},
// 			]
// 		},
// 		{
// 			name: 'GateChain',
// 			chainId: 1337,
// 			symbol: 'GT',
// 			logo: require('./images/gt.png'),
// 			decimals: 18,
// 			bridgeAddress: '0x1544ddC44daf23f9294396a5db1D302B88EFFFE8',
// 			handler: '0xcA306fc3c3b28d837bf65f026fE8bE1cd42c0f38',
// 			assetList: [
// 				{
// 					symbol: "GTTEST",
// 					name: "GTTEST",
// 					logo: '',
// 					decimals: "18",
// 					address: '0x65B954882BDC6efEf3eF2027027d895201236671',
// 					balance: 0
// 				},
// 			]
// 		}
// 	]
// })