import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../components/elements/Pagetitle";
import PortfolioVoxelverse from "../components/elements/PortfolioVoxelverse";
import Header3 from "../components/layouts/Header3";
import Footer from "../components/layouts/Footer";
import { Helmet } from "react-helmet";
import CivilizationsFiltersJson from "../data/civilizations-filters.json";
import CivilizationsTraitsJson from "../data/civilizations-traits.json"
import CivilizationsJson from "../data/civilizations.json"

const filters = CivilizationsFiltersJson;

const traits = CivilizationsTraitsJson;

const allData = CivilizationsJson;
  
  
  
function CivilizationsVoxelverse() {
    const [getAllItems] = useState(allData);
    const [dataVisibleCount, setDataVisibleCount] = useState(8);
    const [dataIncrement] = useState(16);
    const [activeFilter, setActiveFilter] = useState("");
    const [visibleItems, setVisibleItems] = useState([]);
    const [noMorePost, setNoMorePost] = useState(false);

    useEffect(() => {
      setActiveFilter(filters[0].text.toLowerCase());
      setVisibleItems(getAllItems.filter((item) => item.id <= 8));
    }, [getAllItems]);

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
        <Helmet>
          <title>Explore the Voxelverse</title>
          <meta name="description" content="Each dimension was living in their own space and time, until the portals were opened, breaking the Voxelverse peace and, starting the party" />
        </Helmet>
        <Header3 logoSource="/images/PulsarForge-1.png" />
        <main style={{backgroundColor: "rgb(24, 24, 24)"}}>
          <div style={{marginTop: 40, textAlign: "center"}}>
              <Pagetitle title="Voxelverse Exoplanets" />
          </div>
          {/* Start Portfolio Filters */}
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}
          >
            <ul className="portfolio-filter list-inline" style={{textAlign: "center"}}>
              {filters.map((filter) => (
                <li className="list-inline-item" key={filter.id}>
                  <button
                    onClick={handleChange}
                    className={
                      filter.text.toLowerCase() === activeFilter
                        ? "text-capitalize current"
                        : "text-capitalize"
                    }
                    style={{fontSize: 25}}
                  >
                    {filter.text}
                  </button>
                </li>
              ))}
            </ul>
          </ScrollAnimation>
          <ul className="portfolio-filter list-inline" style={{textAlign: "center"}}>
            <li className="list-inline-item">
              <p style={{color: "white", textShadow: "3px 3px 2px rgb(37, 37, 37)"}}>
                <strong>Traits Categories:</strong>
              </p>
            </li>
            {traits.map((trait) => (
              <li className="list-inline-item" key={trait.id}>
                <p style={{color: "white", textShadow: "3px 3px 2px rgb(37, 37, 37)"}}>
                  <strong>{trait.text}</strong>
                </p>
              </li>
            ))}
          </ul>
          {/* End Portfolio Filters */}
          {/* Start Portfolio Items */}
          <div className="row portfolio-wrapper">
            {visibleItems.map((item) => (
              <div className="col-md-3 col-sm-6 grid-item" key={item.id}>
                <PortfolioVoxelverse portfolio={item} />
              </div>
            ))}
          </div>
          {/* End Portfolio Items */}
          <div className="load-more text-center mt-4">
            <button
              className="btn btn-default"
              onClick={handleLoadmore}
              disabled={noMorePost ? "disabled" : null}
            >
              {noMorePost ? (
                "Crafting artworks, return in a few days"
              ) : (
                <span>
                  <i className="fas fa-spinner"></i> Explore more
                </span>
              )}
            </button>
          </div>
          <div className="container" style={{textAlign: "center"}}>
            <h2 style={{color: "white", width: "100%", marginTop: 40, marginBottom: 10}}>
             Civilizations Voxelverse for You<br />Discover, Explore, Build
            </h2>
            <br />
            <h4 style={{color: "white", width: "100%", marginTop: 20, marginBottom: 15}}>Each dimension was living in their own space and time<br /><br />Until the portals open new destinies and possibilities</h4>
            <h4 style={{color: "white", width: "100%", marginTop: 20, marginBottom: 15}}>Breaking the Voxelverse peace, and starting the party</h4>
            <br />
            <h4 style={{color: "white", width: "100%", marginTop: 10, marginBottom: 15}}>Discover the local celebrations<br /><br /> Explore exoplanets<br /><br />Build your home quarters<br />Incoming</h4>
            <h4 style={{color: "white", width: "100%", marginTop: 10, marginBottom: 15}}>Break the dance floor<br /><br />Next to your party animals<br />Incoming</h4>
            <div style={{paddingTop: 20}}></div>
            <div className="row">
              <h3 style={{color: "white", width: "100%", marginTop: 40, marginBottom: 100}}>
                Story Mode<br /><br /><br />Guide your party animals<br /><br />Through the Voxelverse<br /><br />Their fates are in your hands
              </h3>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

export default CivilizationsVoxelverse;