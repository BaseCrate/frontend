import { ethers } from 'ethers';
import ContractJson from '@/lib/abi/Crate.json';
import { CRATE_CONTRACT_ADDRESS } from '@/lib/contracts';

export const getIDByAddress = async (address: string) => {
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(CRATE_CONTRACT_ADDRESS, ContractJson.abi, signer);

        const nft = await contract.getTokenIdByAddress(address);
        console.log("getNFTByAddress result:", nft);
        return nft;
    } catch (error) {
        console.error("getNFTByAddress error", error);
    }
}
