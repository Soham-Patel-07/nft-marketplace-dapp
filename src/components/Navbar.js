import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

function Navbar() {

const [connected, toggleConnect] = useState(false);
const location = useLocation();
const [currAddress, updateAddress] = useState('0x');

useEffect(() => {
    // Check if already connected on page load
    async function checkConnection() {
        if(window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_accounts' });
                if(accounts.length > 0) {
                    updateAddress(accounts[0]);
                    toggleConnect(true);
                    const ethereumButton = document.querySelector('.enableEthereumButton');
                    if(ethereumButton) {
                        ethereumButton.textContent = "Connected";
                        ethereumButton.classList.remove("bg-blue-500", "hover:bg-blue-700");
                        ethereumButton.classList.add("bg-green-500", "hover:bg-green-700");
                    }
                }
            } catch(e) {
                console.log(e);
            }
        }
    }
    checkConnection();

    // Listen for account changes
    if(window.ethereum) {
        window.ethereum.on('accountsChanged', (accounts) => {
            if(accounts.length > 0) {
                updateAddress(accounts[0]);
                toggleConnect(true);
            } else {
                updateAddress('0x');
                toggleConnect(false);
                const ethereumButton = document.querySelector('.enableEthereumButton');
                if(ethereumButton) {
                    ethereumButton.textContent = "Connect Wallet";
                    ethereumButton.classList.remove("bg-green-500", "hover:bg-green-700");
                    ethereumButton.classList.add("bg-blue-500", "hover:bg-blue-700");
                }
            }
        });
    }
}, []);

async function connectWebsite() {
    if(!window.ethereum) {
      alert("MetaMask not installed!");
      return;
    }
    
    await window.ethereum.request({ method: 'eth_requestAccounts' })
      .then((accounts) => {
        if(accounts.length > 0) {
          updateAddress(accounts[0]);
          toggleConnect(true);
          
          const ethereumButton = document.querySelector('.enableEthereumButton');
          if(ethereumButton) {
            ethereumButton.textContent = "Connected";
            ethereumButton.classList.remove("bg-blue-500", "hover:bg-blue-700");
            ethereumButton.classList.add("bg-green-500", "hover:bg-green-700");
          }
        }
      })
      .catch((err) => {
        console.error("Connection error:", err);
      });
}

  return (
      <div className="">
        <nav className="w-screen">
          <ul className='flex items-end justify-between py-3 bg-transparent text-white pr-5'>
          <li className='flex items-end ml-5 pb-2'>
            <Link to="/">
            <div className='inline-block font-bold text-xl'>
              NFT Marketplace
            </div>
            </Link>
          </li>
          <li className='w-2/6'>
            <ul className='lg:flex justify-between font-bold mr-10 text-lg'>
              {location.pathname === "/" ? 
              <li className='border-b-2 hover:pb-0 p-2'>
                <Link to="/">Marketplace</Link>
              </li>
              :
              <li className='hover:border-b-2 hover:pb-0 p-2'>
                <Link to="/">Marketplace</Link>
              </li>              
              }
              {location.pathname === "/sellNFT" ? 
              <li className='border-b-2 hover:pb-0 p-2'>
                <Link to="/sellNFT">List My NFT</Link>
              </li>
              :
              <li className='hover:border-b-2 hover:pb-0 p-2'>
                <Link to="/sellNFT">List My NFT</Link>
              </li>              
              }              
              {location.pathname === "/profile" ? 
              <li className='border-b-2 hover:pb-0 p-2'>
                <Link to="/profile">Profile</Link>
              </li>
              :
              <li className='hover:border-b-2 hover:pb-0 p-2'>
                <Link to="/profile">Profile</Link>
              </li>              
              }  
              <li>
                <button className="enableEthereumButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm" onClick={connectWebsite}>
                    {connected ? "Connected" : "Connect Wallet"}
                </button>
              </li>
            </ul>
          </li>
          </ul>
        </nav>
        <div className='text-white text-bold text-right mr-10 text-sm'>
          {currAddress !== "0x" ? "Connected to":"Not Connected. Please login to view NFTs"} {currAddress !== "0x" ? (currAddress.substring(0,15)+'...'):""}
        </div>
      </div>
    );
  }

  export default Navbar;