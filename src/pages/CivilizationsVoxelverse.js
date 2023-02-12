import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../components/layouts/Header";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../components/elements/Pagetitle";
import PortfolioVoxelverse from "../components/elements/PortfolioVoxelverse";
import CivilizationsFiltersJson from "../data/civilizations-filters.json";
import CivilizationsTraitsJson from "../data/civilizations-traits.json";
import CivilizationsJson from "../data/civilizations.json";
import Footer from "../components/layouts/Footer";

function CivilizationsVoxelverse() {
    const filters = CivilizationsFiltersJson;
    const traits = CivilizationsTraitsJson;
    const allData = CivilizationsJson;
    const [getAllItems] = useState(allData);
    const [dataVisibleCount, setDataVisibleCount] = useState(8);
    const [dataIncrement] = useState(16);
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
            <title>Explore the Voxelverse</title>
            <meta name="description" content="Each dimension was living in their own space and time, until the portals were opened, breaking the Voxelverse peace and, starting the party" />
          </Helmet>
        </HelmetProvider>
        <Header logoSource="/images/pulsarforge-logo-font.png" />
        <main>
          {/* Start Portfolio Filters */}
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}
          >
            <div className="page-title-center-maring-top">
              <Pagetitle title="Space adventure happening on quantum basics" />
            </div>

            <ul className="portfolio-filter list-inline filters-voxelverse-postion">
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
          <ul className="portfolio-filter list-inline filters-voxelverse-postion">
            <li className="list-inline-item">
              <p className="traits-categories-p">
                <strong>Traits Categories:</strong>
              </p>
            </li>
            {traits.map((trait) => (
              <li className="list-inline-item" key={trait.id}>
                <p className="traits-categories-p">
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
                "Crafting artworks, 🎉🎉🎉🎉, return in a few days"
              ) : (
                <span>
                  <i className="fas fa-spinner"></i> Explore more
                </span>
              )}
            </button>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="container civilizations-position">
            <h2 className="civilizations-h2">
             Civilizations Voxelverse for You<br />Discover, Explore, Build
            </h2>
            <br />
            <h4 className="civilizations-h4">Each dimension was living in their own space and time<br /><br />Until the portals open new destinies and possibilities</h4>
            <h4 className="civilizations-h4">Breaking the Voxelverse peace, and starting the party</h4>
            <div className="row">
              <h3 className="civilizations-h3">
                Guide your party animals<br /><br />Through the Voxelverse<br /><br />Their fates are in your hands
              </h3>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

export default CivilizationsVoxelverse;