import Web3 from 'web3';

declare global {
  interface Window {
    ethereum?: any;
  }
}

const getWeb3Provider = async (): Promise<any> => {
  console.log(window.ethereum); 
  try {
    if (window.ethereum) {
      await window.ethereum.enable();
      return window.ethereum;
    }
    return null;
  } catch (err) {
    console.error('Failed to get provider', err);
    return null;
  }
};

const getWeb3 = async (): Promise<Web3 | null> => {
  const provider = await getWeb3Provider();
  if (provider) {
    return new Web3(provider);
  }
  return null;
};

export default getWeb3;