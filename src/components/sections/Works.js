import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import Portfolio from "../elements/Portfolio";

const filters = [
  {
    id: 1,
    text: "Highligthed",
  }
];

const allData = [
    {
    id: 1,
    title: "Inursites",
    category: "Services",
    description: "Web3 Team",
    image: "images/works/inursites-logo.png",
    link: ["https://inursites.io"],
  },
  {
    id: 2,
    title: "PulsarForge",
    category: "Coding",
    description: "GitHub",
    image: "images/works/pulsar-forge-v2.png",
    link: ["https://github.com/pulsarforge"],
  },
  {
    id: 3,
    title: "Cryptoracle",
    category: "Data Dapps",
    description: "Analytics Dapp",
    image: "images/works/cryptoracle.png",
    link: ["https://app.cryptoracle.io/"],
  },
  {
    id: 4,
    title: "Blocks Labs",
    category: "Writing & Speaking",
    description: "Newsletter & Podcast",
    image: "images/works/blocks-labs.png",
    link: ["https://pulsarforge.substack.com/"],
  },
  {
    id: 5,
    title: "Civilizations Voxelverse",
    category: "Crafting Art",
    description: "Hand Made Art",
    image: "images/works/the-gathering-v2.png",
    link: ["https://pulsarforge.io/civilizations-voxelverse-nfts"],
  },
  {
    id: 6,
    title: "Knowledge Base",
    category: "Product",
    description: "Digital Garden",
    image: "images/works/digital-garden.png",
    link: ["https://hqnotes.pulsarforge.io/"],
  },
  {
    id: 7,
    title: "Tech & Web3 Radar",
    category: "Product",
    description: "Trends Radar",
    image: "images/works/tech-radar.png",
    link: ["https://web3radar.pulsarforge.io/"],
  },
  {
    id: 8,
    title: "Board",
    category: "Incoming Product",
    description: "On the Board",
    image: "images/works/on-the-board-v1.png",
    link: ["https://pulsarforge.io/"],
  }
];

function Works() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(8);
  const [dataIncrement] = useState(3);
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
        console.log("they are same");
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
    <section id="works">
      <div className="container">
        <Pagetitle title="Highligthed Works" />
        {/* Start Portfolio Filters */}
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
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
              <Portfolio portfolio={item} />
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
              "No more items"
            ) : (
              <span>
                <i className="fas fa-spinner"></i> Load more
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Works;
