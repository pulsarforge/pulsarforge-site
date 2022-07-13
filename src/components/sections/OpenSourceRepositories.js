import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import OpenSource from "../elements/OpenSource";

const filters = [
  {
    id: 1,
    text: "all",
  },
  {
    id: 2,
    text: "developers",
  },
  {
    id: 3,
    text: "react",
  },
  {
    id: 4,
    text: "rust",
  },
  {
    id: 5,
    text: "graphql",
  },
  {
    id: 6,
    text: "typescript",
  },
  {
    id: 7,
    text: "smart-contracts",
  },
  {
    id: 8,
    text: "near-protocol",
  },
  {
    id: 9,
    text: "docker",
  },
];

const allData = [
  {
    id: 1,
    title: "Reymlgz. Core team.",
    description: "Front-end developer at web3 space",
    category: "developers",
    image: "images/github.png",
    link: ["https://github.com/Reymlgz"],
  },
  {
    id: 2,
    title: "Daniel Bangs. Core team.",
    description: "Data analytics, trading, web3 developments",
    category: "developers",
    image: "images/github.png",
    link: ["https://github.com/RevoltPW"],
  },
  {
    id: 3,
    title: "Pulsarforge. Core team.",
    description: "Data way / DAO path",
    category: "developers",
    image: "images/github.png",
    link: ["https://github.com/pulsarforge"],
  },
  {
    id: 4,
    title: "Typescript path",
    description: "A set of resources to guide you through our tech stack",
    stars: "Stars :301",
    forks: "Forks: 120",
    contributors: "Contributors: 9",
    category: "typescript",
    image: "images/github.png",
    link: ["https://github.com/Inursites/start-here"],
  },  {
    id: 5,
    title: "Contributing Guidelines. README.",
    description: "Your travel in the web3 devs lab community start here",
    stars: "Stars :301",
    forks: "Forks: 120",
    contributors: "Contributors: 9",
    category: "Guidelines",
    image: "images/github.png",
    link: ["https://github.com/Inursites/start-here"],
  },
  {
    id: 6,
    title: "GraphQL API",
    description: "Playground with apollo",
    stars: "Stars :1262",
    forks: "Forks: 445",
    contributors: "Contributors: 33",
    category: "graphql",
    image: "images/github.png",
    link: ["https://github.com/Inursites/start-here"],
  },
  {
    id: 7,
    title: "Cli",
    description: "cli for deploy infrastructure as code",
    stars: "Stars :55",
    forks: "Forks: 12",
    contributors: "Contributors: 16",
    category: "rust",
    image: "images/github.png",
    link: ["https://github.com/Inursites/start-here"],
  },
  {
    id: 8,
    title: "Set of Smart Contracts",
    description: "NEAR Protocol",
    stars: "Stars :98",
    forks: "Forks: 36",
    contributors: "Contributors: 22",
    category: "smart-contracts",
    image: "images/github.png",
    link: ["https://github.com/Inursites/start-here"],
  },
  {
    id: 9,
    title: "Front-End Website",
    description: "Contribute to the core website of the DAO",
    stars: "Stars :20",
    forks: "Forks: 115",
    contributors: "Contributors: 19",
    category: "react",
    image: "images/github.png",
    link: ["https://github.com/Inursites/start-here"],
  },
];

function OpenSourceRepositories() {
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
        <Pagetitle title="Developers, and Open source repositories" />
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
              <OpenSource portfolio={item} />
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

export default OpenSourceRepositories;
