require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture strong dash script horn harvest hero force genre'; 
let testAccounts = [
"0x6b9add5234a091a9f64e7b06f5a59ba99992c02825108fc499da22fd62846036",
"0xf230f9cfbd89243cea217e62fab19a2237d449a649435ef7ada1edf04f180e36",
"0x28d3fdf1977c60b1b845c14ed86474f09ffe443e0ce994acc0889224344a7845",
"0x4779d0a29c5a220dd68398b0dd48b5d40ce279306b97c7edd1506690378039fb",
"0x07fa2f4b9fc64f5825b385b1a78382028b30ee5b5a4d011fd12f640b67f1a1a9",
"0x8f2b9a461707fc26cc43b4bd37096c16c6597c3dcbe929fe0a8961a87b64a03a",
"0x4122022579cdff224ef738f04b0c69f063a3a6de99f0934c6a7f4419fd62894e",
"0x91b6f06c523c98531dcede1a047b7595cc1249d5b3de702d8b704f1a798ec002",
"0x970942f709fd6ed5ea48cb622bb0a4ab1423ee384c6850490fba8e6cb27df083",
"0x17c13702636f7550f9be63e02d7411a3c6ce946c47849cc07b1c45b660692910"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

