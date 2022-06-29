import React, { useState, useEffect } from "react";
import Header3 from "../components/layouts/Header3";
import Footer from "../components/layouts/Footer";
import { Helmet } from "react-helmet";
import * as fcl from "@onflow/fcl";
import * as types from "@onflow/types";
import { mintNFT } from "../cadence/transactions/mintNFT_tx";
import { getTotalSupply } from "../cadence/scripts/getTotalSupply_script";
import { getMetadata } from "../cadence/scripts/getMetadata_script";
import { getIDs } from "../cadence/scripts/getID_script";

fcl.config({
  "flow.network": "testnet",
  "app.detail.title": "Civilizations Voxelverse",
  "accessNode.api": "https://rest-testnet.onflow.org",
  "app.detail.icon": "https://pulsarforge.io/images/works/V00001-The-Gathering-V1.png",
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",
});

  
function NFTsOnFlow() {
    const [ user, setUser ] = useState();
    const [ images, setImages ] = useState([])

    const fetchNFTs = async () => {
      // Empty the images array
      setImages([]);
      let IDs = [];
      
      // Fetch the IDs with our script (no fees or signers necessary)
      try {
        IDs = await fcl.query({
          cadence: `${getIDs}`,
          args: (arg, t) => [
            arg(user.addr, types.Address), 
          ],
        })
      } catch(err) {
        console.log("No NFTs Owned")
      }
      
      let _imageSrc = []
      try{
        for(let i=0; i<IDs.length; i++) {
          const result = await fcl.query({
            cadence: `${getMetadata}`,
            args: (arg, t) => [
              arg(user.addr, types.Address), 
              arg(IDs[i].toString(), types.UInt64),
            ],
          })
          // If the source is an IPFS link, remove the "ipfs://" prefix
          if (result["thumbnail"].startsWith("ipfs://")) {
            _imageSrc.push(result["thumbnail"].substring(7))
            // Add a gateway prefix
            _imageSrc[i] = "https://nftstorage.link/ipfs/" + _imageSrc[i]
          }
          else {
            _imageSrc.push(result["thumbnail"])
          }
        }
      } catch(err) {
        console.log(err)
      }
      
      if(images.length < _imageSrc.length) {
        setImages((Array.from({length: _imageSrc.length}, (_, i) => i).map((number, index)=>
          <img style={{margin:"10px", height: "540px"}} src={_imageSrc[index]} key={number} alt={"NFT #"+number}
          />
        )))
      }
    }


    const logIn = () => {
      fcl.authenticate();
    };

    const logOut = () => {
      setImages([]);
      fcl.unauthenticate();
    };

    const mint = async() => {

      let _totalSupply;
      try {
        _totalSupply = await fcl.query({
          cadence: `${getTotalSupply}`
        })
      } catch(err) {console.log(err)}
      
      const _id = parseInt(_totalSupply) + 1;
      
      try {
        const transactionId = await fcl.mutate({
          cadence: `${mintNFT}`,
          args: (arg, t) => [
            arg(user.addr, types.Address), //address to which the NFT should be minted
            arg("Civilizations Voxelverse # "+_id.toString(), types.String), // Name
            arg("Civilizations Voxelverse onflow", types.String), // Description
            arg("ipfs://bafybeias36dk5wnaomqvvxqvrypj73xyhi7no3hlxi7dceoj4e2lkmqf6y/"+_id+".png", types.String),
          ],
          proposer: fcl.currentUser,
          payer: fcl.currentUser,
          limit: 99
        })
        console.log("Minting NFT now with transaction ID", transactionId);
        const transaction = await fcl.tx(transactionId).onceSealed();
        console.log("Testnet explorer link:", `https://testnet.flowscan.org/transaction/${transactionId}`);
        console.log(transaction);
        alert("NFT minted successfully!")
      } catch (error) {
        console.log(error);
        alert("Error minting NFT, please check the console for error details!")
      }
    }

    const RenderMint = () => {
      return (
        <div>
          <div className="button-container">
            <button className="btn btn-default" onClick={() => mint()}>
              Mint
            </button>
          </div>
          {images.length > 0 ? 
            <>
              <h2 style={{color: "white", width: "100%", marginTop: 40, marginBottom: 10}}>Your NFTs</h2>
                <div className="image-container">
                  {images}
                </ div>
            </> 
          : ""}
      </div>
      );
    }


    
    const RenderLogin = () => {
      return (
        <div>
          <button className="btn btn-default" onClick={() => logIn()}>
            Log In
          </button>
        </div>
      );
    };
  
    const RenderLogout = () => {
      if (user && user.addr) {
        return (
          <div className="logout-container">
            <button className="btn btn-default" onClick={() => logOut()}>
              ❎ {"  "}
              {user.addr.substring(0, 6)}...{user.addr.substring(user.addr.length - 4)}
            </button>
          </div>
        );
      }
      return undefined;
    };
  
    useEffect(() => {
      // This listens to changes in the user objects
      // and updates the connected user
        fcl.currentUser().subscribe(setUser);
      }, []);
      
    useEffect(() => {
      if (user && user.addr) {
        fetchNFTs();
      }
    }, [user]);

    return (
      <>
        <Helmet>
          <title>Civilizations Voxelverse NFTs Onflow</title>
          <meta name="description" content="Interdimensional NFTs connected to different blockchains and ecosystems. Exoplanets and Droid Squad Collections. Each dimension was living in their own space and time, until the portals were opened, breaking the Voxelverse peace" />
        </Helmet>
        <Header3 logoSource="/images/PulsarForge-1.png" />
        <section id="works">
          <div className="container">
          {user && user.addr ? <RenderLogout /> : <p>You should log in first</p>}
            <div className="row">
              <div>
                <div>
                  <h2 style={{color: "white", width: "100%", marginTop: 40, marginBottom: 10}}>Flow Collection Testnet</h2>
                  {user && user.addr ? <RenderMint /> : <RenderLogin />}
                  <h2 style={{color: "white", width: "100%"}}>Incoming integrations: NEAR</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

export default NFTsOnFlow;