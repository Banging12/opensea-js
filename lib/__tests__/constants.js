import { OpenSeaAPI } from "../api";
import { CK_ADDRESS, CK_RINKEBY_ADDRESS } from "../constants";
import { Network } from "../types";
export var MAINNET_API_KEY = process.env.API_KEY;
export var RINKEBY_API_KEY = process.env.API_KEY;
export var mainApi = new OpenSeaAPI({
    apiKey: MAINNET_API_KEY,
    networkName: Network.Main,
}, console.info);
export var rinkebyApi = new OpenSeaAPI({
    apiKey: RINKEBY_API_KEY,
    networkName: Network.Rinkeby,
}, console.info);
export var apiToTest = rinkebyApi;
export { CK_ADDRESS, CK_RINKEBY_ADDRESS };
export var GODS_UNCHAINED_ADDRESS = "0x6ebeaf8e8e946f0716e6533a6f2cefc83f60e8ab";
export var DIGITAL_ART_CHAIN_ADDRESS = "0x323a3e1693e7a0959f65972f3bf2dfcb93239dfe";
export var MYTHEREUM_ADDRESS = "0xc70be5b7c19529ef642d16c10dfe91c58b5c3bf0";
export var MYTHEREUM_SLUG = "mythereum";
export var DIGITAL_ART_CHAIN_TOKEN_ID = 189;
export var GODS_UNCHAINED_TOKEN_ID = 76719;
export var MYTHEREUM_TOKEN_ID = 4367;
export var WETH_ADDRESS = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
export var ENS_RINKEBY_TOKEN_ADDRESS = "0x53ceb15b76023fbec5bb39450214926f6aa77d2e";
export var ENS_RINKEBY_SHORT_NAME_OWNER = "0xe0ee13cd5a45e7fa140409edfc9ce17c7b11e6d2";
export var ENS_HELLO_TOKEN_ID = "12910348618308260923200348219926901280687058984330794534952861439530514639560";
export var ENS_HELLO_NAME = "hello";
export var CK_RINKEBY_TOKEN_ID = 1068;
export var CK_TOKEN_ID = 637488;
export var CK_RINKEBY_SELLER_FEE = 250;
// Toasta Gun, NFT
export var CATS_IN_MECHS_ID = "11081664790290028159747096595969945056246807881612483124155840544084353614722";
// Bounty, FT
export var AGE_OF_RUST_TOKEN_ID = "10855508365998404086189256032722001339622921863551706494238735756561045520384";
export var CRYPTOVOXELS_WEARABLE_ADDRESS = "0xa58b5224e2fd94020cb2837231b2b0e4247301a6";
export var CRYPTOVOXELS_WEARABLE_ID = "908";
export var CRYPTOVOXELS_WEARABLE_2_ID = "693";
export var DECENTRALAND_ADDRESS = "0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d";
export var DECENTRALAND_ID = "115792089237316195423570985008687907840339254722644902427849348925505937604680";
export var DISSOLUTION_TOKEN_ID = "39803530675327460487158288219684256433559304725576879659134376004308812431360";
export var CRYPTOFLOWERS_CONTRACT_ADDRESS_WITH_BUYER_FEE = "0x8bc67d00253fd60b1afcce88b78820413139f4c6";
export var SANDBOX_RINKEBY_ADDRESS = "0xcdeadfb2caa81d8c16d2935f3e379dda61242be9";
export var SANDBOX_RINKEBY_ID = "44221324190444972628403853229966997983936414854632412290085204005353951330306";
export var SPIRIT_CLASH_TOKEN_ID = "10855508365998412378240648478527290366700749920879042165450277893550637056000";
export var SPIRIT_CLASH_OWNER = "0x6a846239658f5a16a0b5977e1c0d007bc13267f0";
export var BENZENE_ADDRESS = "0x6524b87960c2d573ae514fd4181777e7842435d4";
export var GODS_UNCHAINED_CHEST_ADDRESS = "0xee85966b4974d3c6f71a2779cc3b6f53afbc2b68";
export var ALEX_ADDRESS = "0xe96a1b303a1eb8d04fb973eb2b291b8d591c8f72";
export var RANDOM_ADDRESS = "0x196a1b303a1eb8d04fb973eb2b291b8d591c8f72";
export var ALEX_ADDRESS_2 = "0x431e44389a003f0ec6e83b3578db5075a44ac523";
export var DEVIN_ADDRESS = "0x0239769a1adf4def9f07da824b80b9c4fcb59593";
export var DAN_ADDRESS = "0x530cf036ed4fa58f7301a9c788c9806624cefd19";
export var DAN_DAPPER_ADDRESS = "0x4819352bd7fadcCFAA8A2cDA4b2825a9ec51417c";
//# sourceMappingURL=constants.js.map