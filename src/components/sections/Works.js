import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import Portfolio from "../elements/Portfolio";

const filters = [
  {
    id: 1,
    text: "Enjoy the Journey",
  }
];

const allData = [
  {
    id: 1,
    title: "Pulsarforge",
    category: "Coding / GitHub",
    description: "Shaping Environments",
    image: "images/works/pulsar-forge-v3.png",
    link: ["https://github.com/pulsarforge"],
  },
  {
    id: 2,
    title: "Inursites",
    category: "Services",
    description: "Web3 Team",
    image: "images/works/inursites-logo.png",
    link: ["https://inursites.io"],
  },
  {
    id: 3,
    title: "Cryptoracle",
    category: "Data Dapp, Dev.",
    description: "Analytics Dapp",
    image: "images/works/cryptoracle.png",
    link: ["https://app.cryptoracle.io/"],
  },
  {
    id: 4,
    title: "Strategic and Action",
    category: "Incoming ⌛?",
    description: "Playing on the Field",
    image: "images/works/strategic-and-action.png",
    link: ["https://pulsarforge.io/"],
  },
  {
    id: 5,
    title: "Smoothies House",
    category: "Tasty & Healthy",
    description: "Tasty Smoothies",
    image: "images/works/tasty-smoothies.png",
    link: ["https://tasty-smoothies.pages.dev/"],
  },
  {
    id: 6,
    title: "Knowledge Base",
    category: "Product & Service",
    description: "Digital Garden",
    image: "images/works/digital-garden.png",
    link: ["https://hqnotes.pulsarforge.io/"],
  },
  {
    id: 7,
    title: "Trends Web3 Radar",
    category: "Product & Service",
    description: "Web3 Radar",
    image: "images/works/trends-web3-radar.png",
    link: ["https://trends-web3-radar.pages.dev/"],
  },
  {
    id: 8,
    title: "Hackatons Board",
    category: "Product",
    description: "Board Hacks",
    image: "images/works/board-hacks.png",
    link: ["https://board-hacks.pages.dev/"],
  },
  {
    id: 9,
    title: "Hand Made Art",
    category: "Crafting Art",
    description: "C. V. Exoplanets",
    image: "images/works/voxelverse-exoplanets.png",
    link: ["https://pulsarforge.io/civilizations-voxelverse-nfts"],
  },
  {
    id: 10,
    title: "Newsletter and Podcast",
    category: "Writing & Speaking",
    description: "Blocks Labs",
    image: "images/works/blocks-labs-v.png",
    link: ["https://pulsarforge.substack.com/"],
  },
  {
    id: 11,
    title: "DAOs Board",
    category: "Product",
    description: "DAO It Board",
    image: "images/works/dao-it-board.png",
    link: ["https://dao-it-board.pages.dev"],
  },
  {
    id: 12,
    title: "Achievements on Chain",
    category: "Showcase your Profile",
    description: "Well Done Flow",
    image: "images/works/well-done-flow.png",
    link: ["https://well-done-flow.pages.dev/"],
  },

  {
    id: 13,
    title: "Trends Substack Radar",
    category: "Incoming Product & Service",
    description: "Substack Radar",
    image: "images/works/trends-substack-radar.png",
    link: ["https://pulsarforge.io/"],
  },
  {
    id: 14,
    title: "Startups Database Table",
    category: "Incoming Product",
    description: "Startup Stage",
    image: "images/works/startup-stage.png",
    link: ["https://pulsarforge.io/"],
  },  
  {
    id: 15,
    title: "NFTs Rarity Insider",
    category: "Incoming Product",
    description: "NFTs Rarity",
    image: "images/works/nfts-rarity-insider.png",
    link: ["https://pulsarforge.io/"],
  },
  {
    id: 16,
    title: "Web3 Connected Notifications",
    category: "Incoming Product",
    description: "Notify Rules",
    image: "images/works/notify-rules.png",
    link: ["https://pulsarforge.io/"],
  },
  {
    id: 17,
    title: "Take Screenshots",
    category: "Having Fun",
    description: "Mapping Earnings",
    image: "images/works/mapping-earnings.png",
    link: ["https://mapping-earnings.pages.dev/"],
  },
  {
    id: 18,
    title: "Curated Assets Creation",
    category: "Service",
    description: "AI Consistent Art",
    image: "images/works/ai-consistent-art.png",
    link: ["https://www.figma.com/file/WGsXFnz9kVSadSUeLPxXwX/AI-Consistent-Art---Service?node-id=0%3A1&t=SUtFATmVScTkxrvP-1"],
  }
];

function Works() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(8);
  const [dataIncrement] = useState(12);
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
    <section id="works" >
      <div className="container">
        <Pagetitle title="Code Garden" />
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
              "Coding in progress, wait for it"
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
