import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../components/layouts/Header";
import Pagetitle from "../components/elements/Pagetitle";
import Showcase from "../components/elements/Showcase";
import CivilizationsFiltersJson from "../data/civilizations-filters.json";
import CivilizationsJson from "../data/civilizations.json";
import Footer from "../components/layouts/Footer";

function CivilizationsVoxelverse() {
  const filters = CivilizationsFiltersJson;
  const allData = CivilizationsJson;
  const allDataLength = CivilizationsJson.length;
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(allDataLength);
  const [dataIncrement] = useState(allDataLength);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 9));
  }, [filters, getAllItems]);

  const handleChange = (e) => {
    e.preventDefault();
    setActiveFilter(e.target.textContent.toLowerCase());
    let tempData;
    if (e.target.textContent.toLowerCase() === filters[0].text.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter(
        (data) =>
          data.category === e.target.textContent.toLowerCase() &&
          data.id <= dataVisibleCount
      );
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;
    if (dataVisibleCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].text.toLowerCase()) {
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        setVisibleItems(
          getAllItems.filter(
            (data) => data.category === activeFilter && data.id <= tempCount
          )
        );
      }
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Explore the Voxelverse 🛸</title>
          <meta name="description" content="Each dimension was living in their own space and time, until the portals were opened, breaking the Voxelverse peace and, starting the party"/>
        </Helmet>
      </HelmetProvider>
      <Header logoSource="/images/logo.png" />
      <main>
          <div className="page-title-center-maring-top">
            <Pagetitle title="Civilizations Voxelverse" />
            <Pagetitle title="Space adventures happening on gravity & quantum basics" />
            
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <ul className="portfolio-filter list-inline filters-voxelverse-position">
            {filters.map((filter) => (
              <li className="list-inline-item" key={filter.id}>
                <button
                  onClick={handleChange}
                  className={
                    filter.text.toLowerCase() === activeFilter
                      ? "text-capitalize current"
                      : "text-capitalize"
                  }
                  style={{ fontSize: 25 }}
                >
                  {filter.text}
                </button>
              </li>
            ))}
          </ul>
        <div
          className="row portfolio-wrapper"
          style={{ paddingLeft: "30px", paddingRight: "30px" }}
        >
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
              <Showcase portfolio={item} />
            </div>
          ))}
        </div>
        <div className="load-more text-center mt-4">
          <button
            className="btn btn-default"
            onClick={handleLoadmore}
            disabled={noMorePost ? "disabled" : null}
          >
            {noMorePost ? (
              "Crafting artworks 🎉🎉🎉🎉 return in a few days"
            ) : (
              <span>
                <i className="fas fa-spinner"></i> Explore further
              </span>
            )}
          </button>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="ontainer civilizations-position">
        
        </div>
        <div className="container civilizations-position">
          <h2 className="civilizations-h2" style={{fontSize: 45 }}>
            Civilizations Voxelverse
          </h2>
          <br />
          <br />
          <iframe
            src="https://ipfs-2.thirdwebcdn.com/ipfs/QmSmkcH3AzLPTcub173t7bCtTzQV3dRb4gwG3uU84J6YJq?contract=0xa284880Cbf48632a70E2f904e3E73364F8C01966&chain=%7B%22name%22%3A%22Polygon+Mainnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fpolygon.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22matic%22%2C%22chainId%22%3A137%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22polygon%22%7D&theme=light&primaryColor=red"
            width="1080px"
            height="700px"
            style={{maxWidth:"100%", borderRadius:"20px"}}
            frameborder="0"
            title="Exoplanets Beings"
          ></iframe>
          <br />
          <br />
          <br />
          <br />
          <h2 className="civilizations-h2" style={{fontSize: 45 }}>
            Discover, Explore, Build
          </h2>
          <h4 className="civilizations-h4" style={{fontSize: 30 }}>
            Each dimension was living in their own space and time
            <br />
            <br />
            Until the portals open new destinies and possibilities
          </h4>
          <h4 className="civilizations-h4" style={{fontSize: 30 }}>
            Breaking the Voxelverse peace, and starting the party
          </h4>
        </div>
        <br />
        <br />
        <br />
        <br />
      </main>
      <Footer />
    </>
  );
}

export default CivilizationsVoxelverse;
