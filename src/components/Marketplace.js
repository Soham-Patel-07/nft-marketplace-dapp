import Navbar from "./Navbar";
import NFTTile from "./NFTTile";
import MarketplaceJSON from "../Marketplace.json";
import axios from "axios";
import { useState, useEffect } from "react";
import { GetIpfsUrlFromPinata } from "../utils";

export default function Marketplace() {
const sampleData = [
    {
        "name": "NFT#1",
        "description": "First NFT on Marketplace",
        "website":"http://axieinfinity.io",
        "image":"https://gateway.pinata.cloud/ipfs/QmTsRJX7r5gyubjkdmzFrKQhHv74p5wT9LdeF1m3RTqrE5",
        "price":"0.03ETH",
        "currentlySelling":"True",
        "address":"0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
    },
    {
        "name": "NFT#2",
        "description": "Second NFT on Marketplace",
        "website":"http://axieinfinity.io",
        "image":"https://gateway.pinata.cloud/ipfs/QmdhoL9K8my2vi3fej97foiqGmJ389SMs55oC5EdkrxF2M",
        "price":"0.03ETH",
        "currentlySelling":"True",
        "address":"0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
    },
    {
        "name": "NFT#3",
        "description": "Third NFT on Marketplace",
        "website":"http://axieinfinity.io",
        "image":"https://gateway.pinata.cloud/ipfs/QmTsRJX7r5gyubjkdmzFrKQhHv74p5wT9LdeF1m3RTqrE5",
        "price":"0.03ETH",
        "currentlySelling":"True",
        "address":"0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
    },
];
const [data, updateData] = useState(sampleData);
const [dataFetched, updateFetched] = useState(false);

useEffect(() => {
    getAllNFTs();
}, []);

async function getAllNFTs() {
    try {
        const ethers = require("ethers");
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        
        // Check network
        const network = await provider.getNetwork();
        console.log("Connected network chainId:", network.chainId);
        
        // Check if contract exists
        const code = await provider.getCode(MarketplaceJSON.address);
        console.log("Contract code at address:", code);
        
        if(code === '0x') {
            console.log("Contract NOT deployed at address:", MarketplaceJSON.address);
            alert("Contract not found! Please deploy: npm run deploy");
            updateFetched(true);
            return;
        }
        
        console.log("Contract found! Address:", MarketplaceJSON.address);
        
        let contract = new ethers.Contract(MarketplaceJSON.address, MarketplaceJSON.abi, signer)
        
        let totalCount = await contract.getCurrentToken();
        console.log("Total tokens:", totalCount.toString());
        
        let transaction = await contract.getAllNFTs()
        console.log("Raw transaction result:", transaction);
        
        if(transaction.length === 0) {
            console.log("No NFTs found - array is empty");
            updateFetched(true);
            return;
        }

        const items = await Promise.all(transaction.map(async i => {
            try {
                var tokenURI = await contract.tokenURI(i.tokenId);
                console.log("tokenURI for token", i.tokenId.toString(), ":", tokenURI);
                
                if(!tokenURI) {
                    console.log("No tokenURI for token", i.tokenId.toString());
                    return null;
                }
                
                tokenURI = GetIpfsUrlFromPinata(tokenURI);
                let meta = await axios.get(tokenURI);
                meta = meta.data;

                let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
                let item = {
                    price,
                    tokenId: i.tokenId.toNumber(),
                    seller: i.seller,
                    owner: i.owner,
                    image: meta.image,
                    name: meta.name,
                    description: meta.description,
                }
                console.log("NFT item:", item);
                return item;
            } catch(err) {
                console.log("Error fetching NFT:", err.message);
                return null;
            }
        }))

        const validItems = items.filter(item => item !== null);
        console.log("Valid items:", validItems);
        updateFetched(true);
        updateData(validItems);
    } catch (error) {
        console.log("Error fetching NFTs:", error);
        if(error.message.includes("call revert exception")) {
            alert("Contract not found! Make sure MetaMask is on Hardhat network (chain 1337)");
        }
        updateFetched(true);
    }
}

return (
    <div>
        <Navbar></Navbar>
        <div className="flex flex-col place-items-center mt-20">
                <div className="md:text-xl font-bold text-white">
                NFTs on Sale
            </div>
            <div className="flex mt-5 justify-between flex-wrap max-w-screen-xl text-center">
                {data.map((value, index) => {
                    return <NFTTile data={value} key={index}></NFTTile>;
                })}
            </div>
        </div>            
    </div>
);

}