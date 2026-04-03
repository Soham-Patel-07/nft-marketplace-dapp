

export const GetIpfsUrlFromPinata = (pinataUrl) => {
    if(!pinataUrl) return "";
    // Handle both ipfs:// and https:// URLs
    if(pinataUrl.startsWith("ipfs://")) {
        const ipfsHash = pinataUrl.replace("ipfs://", "");
        return "https://gateway.pinata.cloud/ipfs/" + ipfsHash;
    }
    if(pinataUrl.includes("gateway.pinata.cloud")) {
        return pinataUrl;
    }
    var IPFSUrl = pinataUrl.split("/");
    const lastIndex = IPFSUrl.length;
    IPFSUrl = "https://gateway.pinata.cloud/ipfs/"+IPFSUrl[lastIndex-1];
    return IPFSUrl;
};