require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom solution mansion creek stick mad hidden arena fog symbol'; 
let testAccounts = [
"0x0cede2a25d3efac7f21a555627c0b823d976d2d1521a3275c3d3aa4ec767847e",
"0xf6527e08de4554d56719c02d73603398b6fad325c27563acdedf8c5c5cdc2395",
"0x4df95590894ef151515267d98a07417eb9696a8e78b76cdf0a7f986e2b938edf",
"0xca577ae0be8cb3cb4372ddacc42174f813d1214868fce9cdc94174958709c026",
"0x6610ab36184b7098d7977fbfc1309dc3f79f90d4616016f8935eae7869845fdb",
"0x4d2c00f6fe3d95cb65f8c694e1491293e16a0f9d52938d3aaf8b985b81da6722",
"0x8e0199f5bbe1b83ea75e01bc2031d3d3da964ca1dc4ba1cd375014bcbca30584",
"0x36ff45f12b8a92bd01df526ef4dd38ba1738dd4cbfef1bb33025856fcf3f32eb",
"0xcb5575b3b06c41efdda74db7952edd9264da5e75cd8ba02fd20040e718ef3a60",
"0xe6d5c63763a367fc33810beddde17a19459ad11df42d5d3fcbdd8669b2607a22"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
