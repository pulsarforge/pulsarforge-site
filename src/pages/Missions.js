import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../components/layouts/Header";
import Pagetitle from "../components/elements/Pagetitle";
import Showcase from "../components/elements/Showcase";
import CivilizationsFiltersJson from "../data/missions-filters.json";
import CivilizationsJson from "../data/missions.json";
import Footer from "../components/layouts/Footer";

function Missions() {
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
    setVisibleItems(getAllItems.filter((item) => item.id <= 8));
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
          <title>Life Events ✨</title>
          <meta name="description" content="Complete a life event, join the community, proof and claim"/>
        </Helmet>
      </HelmetProvider>
      <Header logoSource="/images/logo.png" />
      <main>
          <div className="page-title-center-maring-top">
            <Pagetitle title="Missions, NFTs Memories, and Life Events" />
            <Pagetitle title="Join the community, proof and claim your Life Events, on chain" />
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
          style={{ paddingLeft: "15px", paddingRight: "15px" }}
        >
          {visibleItems.map((item) => (
            <div className="col-md-3 col-sm-6 grid-item" key={item.id}>
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
              "That's how we do 🤠🤠🤠🤠"
            ) : (
              <span>
                <i className="fas fa-spinner"></i> Complete them and Claim them on NEAR
              </span>
            )}
          </button>
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

export default Missions;
