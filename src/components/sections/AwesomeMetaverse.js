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
    text: "metaverse",
  },
  {
    id: 3,
    text: "near-nfts",
  },
  {
    id: 4,
    text: "solana-nfts",
  },
  {
    id: 5,
    text: "ethereum-nfts",
  },
  {
    id: 6,
    text: "flow-nfts",
  }

];

const allData = [
  {
    id: 1,
    title: "The Sandbox",
    category: "metaverse",
    description: "The Sandbox",
    text: "Game & Experiences",
    link: ["https://www.sandbox.game/en/"],
  },
  {
    id: 2,
    title: "SkyWeaver",
    category: "metaverse",
    description: "SkyWeaver",
    text: "Game & Experiences",
    link: ["https://www.skyweaver.net/"],
  },
  {
    id: 3,
    title: "MetaArchitects sHub",
    category: "metaverse",
    description: "MetaArchitects Hub",
    text: "Community & Discord",
    link: ["https://linktr.ee/metaarchitectshub"],
  },
  {
    id: 4,
    title: "Blankos",
    category: "metaverse",
    description: "Blankos",
    text: "Game & Experiences",
    link: ["https://blankos.com/"],
  },
  {
    id: 5,
    title: "Illuvium",
    category: "metaverse",
    description: "Illuvium",
    text: "Game & Experiences",
    link: ["https://www.illuvium.io/"],
  },
  {
    id: 6,
    title: "Nomad Club",
    category: "near-nfts",
    description: "Nomad Club",
    text: "Long time building, on NEAR",
    link: ["https://linktr.ee/nearnomad"],
  },
  {
    id: 7,
    title: "Alien Bear Crew",
    category: "near-nfts",
    description: "Alien Bear Crew",
    text: "Long time building, on NEAR",
    link: ["https://alienbearcrew.com/"],
  },
  {
    id: 8,
    title: "N1NGENz",
    category: "near-nfts",
    description: "N1NGENz",
    text: "Medium time building, on NEAR",
    link: ["https://twitter.com/N1NGENz"],
  },
  {
    id: 9,
    title: "Gimme fooooood!!",
    category: "near-nfts",
    description: "Gimme fooooood!!",
    text: "Medium time building, on NEAR",
    link: ["https://twitter.com/mp_artlady"],
  }
];

function AwesomeMetaverese() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(9);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 9));
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
        <Pagetitle title="Metaverse & NFTs" />
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

        <div className="load-more text-center mt-4" style={{paddingBottom: '100px'}}>
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

export default AwesomeMetaverese;
