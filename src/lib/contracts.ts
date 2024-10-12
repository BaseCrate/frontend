import { ethers } from 'ethers'
import CRATE_CONTRACT from './abi/Crate.json'

export const CRATE_CONTRACT_ADDRESS = '0x5C4c504CCFF2ad3c8EB24C916f22A96353625228';

export function getCrateContract(provider: ethers.providers.Web3Provider) {
    return new ethers.Contract(CRATE_CONTRACT_ADDRESS, CRATE_CONTRACT.abi, provider.getSigner());
}