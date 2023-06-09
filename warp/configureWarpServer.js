import { WarpFactory } from "warp-contracts";
import fs from "fs";

/*
 * environment can be 'local' | 'testnet' | 'mainnet' | 'custom'
 */

const environment = process.env.WARPENV || "testnet";
let warp;

if (environment === "testnet") {
  warp = WarpFactory.forTestnet();
} else if (environment === "mainnet") {
  warp = WarpFactory.forMainnet();
} else {
  throw Error("environment not set properrly...");
}

async function configureWallet() {
  try {
    if (environment === "testnet") {
      /* for testing, generate a temporary wallet */
      try {
        return JSON.parse(fs.readFileSync("../testwallet.json", "utf-8"));
        // console.log("yes we got a result");
        // console.log(result);
        // return result;
      } catch (err) {
        const { jwk } = await warp.generateWallet();
        fs.writeFileSync("../testwallet.json", JSON.stringify(jwk));
        return jwk;
      }
    } else if (environment === "mainnet") {
      /* for mainnet, retrieve a local wallet */
      return JSON.parse(fs.readFileSync("../wallet.json", "utf-8"));
    } else {
      throw Error("Wallet not configured properly...");
    }
  } catch (err) {
    throw Error("Wallet not configured properly...", err);
  }
}

export { configureWallet, warp };
