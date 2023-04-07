import Web3 from 'web3';

declare global {
  interface Window {
    ethereum?: any;
  }
}

export interface IWeb3Context {
  web3: Web3 | null;
  account: string | null;
}