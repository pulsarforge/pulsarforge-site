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
    text: "bounty-boards",
  },
  {
    id: 3,
    text: "daos",
  },
  {
    id: 4,
    text: "web3-jobs",
  },
  {
    id: 5,
    text: "learn-ship",
  }
];

const allData = [
  {
    id: 1,
    title: "Gitcoin",
    category: "bounty-boards",
    description: "Gitcoin",
    text: "Bounties",
    link: ["https://gitcoin.co/"],
  },
  {
    id: 2,
    title: "Code4rena",
    category: "bounty-boards",
    description: "Code4rena",
    text: "Bounties",
    link: ["https://code4rena.com/"],
  },
  {
    id: 3,
    title: "Dework",
    category: "bounty-boards",
    description: "Dework",
    text: "Bounties",
    link: ["https://dework.xyz/"],
  },
  {
    id: 4,
    title: "AstroDAO",
    category: "daos",
    description: "AstroDAO",
    text: "Infrastructure / NEAR",
    link: ["https://astrodao.com/"],
  },
  {
    id: 5,
    title: "Aragon DAO",
    category: "daos",
    description: "Aragon DAO",
    text: "Infrastructure / Ethereum",
    link: ["https://aragon.org/"],
  },
  {
    id: 6,
    title: "Tribeca",
    category: "daos",
    description: "Tribeca",
    text: "Infrastructure / Solana",
    link: ["https://tribeca.so/"],
  },
  {
    id: 7,
    title: "Web3 Career",
    category: "web3-jobs",
    description: "Web3 Career",
    text: "Jobs",
    link: ["https://web3.career/"],
  },
  {
    id: 8,
    title: "Crypto Jobs",
    category: "web3-jobs",
    description: "Crypto Jobs",
    text: "Jobs",
    link: ["https://crypto.jobs/"],
  },
  {
    id: 9,
    title: "Crypto Jobs List",
    category: "web3-jobs",
    description: "Crypto Jobs List",
    text: "Jobs",
    link: ["https://cryptojobslist.com/"],
  },
  {
    id: 10,
    title: "Buildspace",
    category: "learn-ship",
    description: "Buildspace",
    text: "Coding",
    link: ["https://buildspace.so/"],
  },
  {
    id: 11,
    title: "Figment",
    category: "learn-ship",
    description: "Figment",
    text: "Coding",
    link: ["https://learn.figment.io/"],
  },
  {
    id: 12,
    title: "Encode Club",
    category: "learn-ship",
    description: "Encode Club",
    text: "Coding",
    link: ["https://www.encode.club/"],
  }
];

function AwesomeWeb3() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(12);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 12));
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
    <section id="works">
      <div className="container">
        <Pagetitle title="Web3" />
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

export default AwesomeWeb3;
