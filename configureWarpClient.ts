import { WarpFactory, Warp } from "warp-contracts";
import { transactionId } from "./transactionid";
import wallet from "./testwallet.json";
/*
 *  environment can be 'local' | 'testnet' | 'mainnet' | 'custom';
 */
const environment = process.env.NEXT_PUBLIC_WARPENV || "testnet";
let warp: Warp;
let contract;

async function getContract() {
  if (environment == "testnet") {
    warp = WarpFactory.forTestnet();
    contract = warp.contract(transactionId).connect(wallet);
  } else if (environment == "mainnet") {
    warp = WarpFactory.forMainnet();
    // @ts-ignore
    contract = warp.contract(transactionId).connect();
  } else {
    throw new Error("Environment configured improperly...");
  }
  return contract;
}

export { getContract };
