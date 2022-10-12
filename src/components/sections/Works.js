import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import Portfolio from "../elements/Portfolio";

const filters = [
  {
    id: 1,
    text: "all",
  },
  {
    id: 2,
    text: "projects",
  },
  {
    id: 3,
    text: "partnerships",
  },
  {
    id: 4,
    text: "collabs",
  },
  {
    id: 5,
    text: "bounties",
  },
  {
    id: 6,
    text: "completed",
  },
];

const allData = [
  {
    id: 1,
    title: "World Wiki Code",
    category: "projects",
    description: "Software Engineering Notes",
    image: "images/works/space-walk.jpg",
    link: ["https://hqnotes.pulsarforge.io/"],
  },
  {
    id: 2,
    title: "Civilizations Voxelverse",
    category: "projects",
    description: "Hand Made Art, Collectibles NFTs",
    image: "images/works/The_Gathering_V_1.jpg",
    link: ["https://pulsarforge.io/civilizations-voxelverse-nfts"],
  },
  {
    id: 3,
    title: "Inursites",
    category: "projects",
    description: "Web3 Development Agency",
    image: "images/works/inursites-logo.png",
    link: ["https://inursites.pages.dev"],
  },
  {
    id: 4,
    title: "Blocks Labs",
    category: "projects",
    description: "Newsletter & Podcast, High signal content",
    image: "images/works/BlocksLabs.jpg",
    link: ["https://pulsarforge.substack.com/"],
  },
  {
    id: 5,
    title: "PulsarForge",
    category: "projects",
    description: "GitHub, Leveling Mind Abstractions",
    image: "images/works/PulsarForge.png",
    link: ["https://github.com/pulsarforge"],
  },
  {
    id: 6,
    title: "BlockverseKit",
    category: "projects",
    description: "Multi Chain Analytics Dapp",
    image: "images/works/blockversekitv1.png",
    link: ["https://blockversekit.io/"],
  }
];

function Works() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
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
        <Pagetitle title="Works, previous and on going" />
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
            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
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
