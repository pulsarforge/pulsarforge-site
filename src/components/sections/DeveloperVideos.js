import React, { useState, useEffect } from "react";
import Pagetitle from "../elements/Pagetitle";
import Showcase from "../elements/Showcase";
import DevVideosJson from "../../data/dev-videos.json";
import DevVideosFiltersJson from "../../data/dev-videos-filters.json";

function DeveloperVideos() {
  const allData = DevVideosJson;
  const filters = DevVideosFiltersJson;
  const allDataLength = DevVideosJson.length;
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(allDataLength);
  const [dataIncrement] = useState(allDataLength);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 12));
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
          <a className="navigate-link" href="#making-the-difference">
            <Pagetitle title="Knowledge" />
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
        <div className="row portfolio-wrapper">
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
              "Real projects 🪐🪐🪐🪐 with great walkthroughs"
            ) : (
              <span>
                <i className="fas fa-spinner"></i> Hands On Dev Skills
              </span>
            )}
          </button>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </section>
  );
}

export default DeveloperVideos;
