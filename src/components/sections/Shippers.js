import React, { useState, useEffect } from "react";
import Pagetitle from "../elements/Pagetitle";
import ScrollAnimation from "react-animate-on-scroll";
import Showcase from "../elements/Showcase";
import ShipperJson from "../../data/shippers.json";
import ShipperFiltersJson from "../../data/shippers-filters.json";

function Shippers() {
  const allData = ShipperJson;
  const filters = ShipperFiltersJson;
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(16); //NOTE! Important state for great visibility adjust to total number of items
  const [dataIncrement] = useState(12);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 8));
  }, [getAllItems, filters]);

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
    <section id="passion-projects">
      <div
        style={{
          paddingLeft: "30px",
          paddingRight: "30px",
          marginTop: "100px",
        }}
      >
        {/* Start Portfolio Filters */}
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <a className="navigate-link" href="#cool-services">
            <Pagetitle title="Be a shipper" />
          </a>
          <ul className="portfolio-filter list-inline">
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
        </ScrollAnimation>
        {/* End Portfolio Filters */}

        {/* Start Portfolio Items */}
        <div className="row portfolio-wrapper">
          {visibleItems.map((item) => (
            <div className="col-md-3 col-sm-6 grid-item" key={item.id}>
              <Showcase portfolio={item} />
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
              "Shipping code in progress 🥞🥞🥞🥞 wait for it"
            ) : (
              <span>
                <i className="fas fa-spinner"></i> Discover more
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Shippers;