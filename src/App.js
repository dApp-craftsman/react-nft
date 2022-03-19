import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import CollectionCard from "./components/CollectionCard";
import { useState, useEffect } from "react";
import axios from "axios";
import PunkList from "./components/PunkList";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getmyNfts = async () => {
      const openSeaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xdd5E5B6EE0C23946845FFd36a1F03587CfC57BFB&order_direction=asc"
      );

      setPunkListData(openSeaData.data.assets);
     
    };

    return getmyNfts();
  }, []);
  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
          )
        </>
      )}
    </div>
  );
}
export default App;
