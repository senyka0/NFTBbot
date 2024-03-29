const fs = require("fs");
const { JsonRpcProvider } = require("@ethersproject/providers");
const ethers = require("ethers");

const node = "https://bsc-dataseed.binance.org/";
const tokenIn = ""; // Paste address of ido contract. For example (const tokenIn = "0x38317B963408a0dCa9bc1b88482eE8Afe47b21c9")
const amountIn1 = "" + "000000000000000000"; // paste ammout in BUSD that you want to spend. For example(const amountIn1 = "5" + "000000000000000000")
const d = new Date(2022, 0, 0, 0, 0, 0); // set date when puplic sale start. For example(const d =  new Date(2022, 0, 11, 15, 0, 1);)
const myGasLimit = 200000;
const mygasPrice = ethers.utils.parseUnits("25", "gwei");

let file = fs.readFileSync("key.txt", "utf8"); // we import private key from key.txt
let sp = file.split("\n");
let a = sp.length;
console.log(d);
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function main() {
  const r = new Date();
  if (d < r) {
    let o = 0;
    var p = a;
    start();
    function start() {
      console.log(p);
      console.log(o);

      if (p > o) {
        console.log(sp[o]);
        s = sp[o].replace("\r", "");
        const wallet = new ethers.Wallet(s);
        const wsProvider = new ethers.providers.JsonRpcProvider(node);
        const account = wallet.connect(wsProvider);
        let abi = [
          "function deposit(uint256 _amount) public returns (bool success)",
        ];
        let contract = new ethers.Contract(tokenIn, abi, account);

        main();
        async function main() {
          var approve = contract.deposit(amountIn1, {
            gasPrice: mygasPrice,
            gasLimit: myGasLimit,
          });

          appr = approve;
          console.log(appr);
          o++;
          start();
        }
      } else {
        console.log("done");
      }
    }
  } else {
    console.log(r);
    await sleep(1000);
    main();
  }
}

main();
