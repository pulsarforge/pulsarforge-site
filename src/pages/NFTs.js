import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../components/elements/Pagetitle";
import Portfolio from "../components/elements/Portfolio";
import Header3 from "../components/layouts/Header3";
import Footer from "../components/layouts/Footer";

const filters = [
    {
      id: 1,
      text: "Voxelverse All In",
    },
    {
      id: 2,
      text: "1 to 108",
    },
    {
      id: 3,
      text: "109 to 217",
    },
    {
      id: 4,
      text: "218 to 326",
    },
    {
      id: 5,
      text: "327 to 435",
    },
    {
      id: 6,
      text: "436 to 544",
    },
    {
      id: 7,
      text: "545 to 653",
    },
    {
      id: 8,
      text: "654 to 762",
    },
    {
      id: 9,
      text: "763 to 871",
    }
  ];
  
  const allData = [
    {
      id: 1,
      title: "The Gathering",
      category: "1 to 108",
      image: "images/works/The-Gathering.png",
      popupLink: ["images/works/The-Gathering.png"],
    },
    {
      id: 2,
      title: "Cube Growth Chamber",
      category: "1 to 108",
      image: "images/works/Cube-Growth-Chamber.png",
      popupLink: ["images/works/Cube-Growth-Chamber.png"],
    },
    {
      id: 3,
      title: "Spring",
      category: "1 to 108",
      image: "images/works/Spring.png",
      popupLink: ["images/works/Spring.png"],
    },
    {
      id: 4,
      title: "Claws",
      category: "1 to 108",
      image: "images/works/Bio-Portal.png",
      popupLink: ["images/works/Bio-Portal.png"],
    },
    {
      id: 5,
      title: "Magnetical Landing",
      category: "1 to 108",
      image: "images/works/Magnetical-Landing.png",
      popupLink: ["images/works/Magnetical-Landing.png"],
    },
    {
      id: 6,
      title: "Energy Integrator",
      category: "1 to 108",
      image: "images/works/Energy-Integrator.png",
      popupLink: ["images/works/Energy-Integrator.png"],
    },
    {
      id: 7,
      title: "Claws",
      category: "1 to 108",
      image: "images/works/Claws.png",
      popupLink: ["images/works/Claws.png"],
    },
    {
      id: 8,
      title: "Concentration",
      category: "1 to 108",
      image: "images/works/Concentration.png",
      popupLink: ["images/works/Concentration.png"],
    },
    {
      id: 9,
      title: "Risks",
      category: "1 to 108",
      image: "images/works/Risks.png",
      popupLink: ["images/works/Risks.png"],
    },
    {
      id: 10,
      title: "Vitamins Receptor",
      category: "1 to 108",
      image: "images/works/Vitamins-Receptor.png",
      popupLink: ["images/works/Vitamins-Receptor.png"],
    },
    {
      id: 11,
      title: "The Ascension",
      category: "1 to 108",
      image: "images/works/The-Ascension.png",
      popupLink: ["images/works/The-Ascension.png"],
    },
    {
      id: 12,
      title: "Union Motor",
      category: "1 to 108",
      image: "images/works/Union-Motor.png",
      popupLink: ["images/works/Union-Motor.png"],
    },
    {
      id: 13,
      title: "Max Security",
      category: "1 to 108",
      image: "images/works/Max-Security.png",
      popupLink: ["images/works/Max-Security.png"],
    },
    {
      id: 14,
      title: "Energy Spreader",
      category: "1 to 108",
      image: "images/works/Energy-Spreader.png",
      popupLink: ["images/works/Energy-Spreader.png"],
    },
    {
      id: 15,
      title: "Getting Sun",
      category: "1 to 108",
      image: "images/works/Getting-Sun.png",
      popupLink: ["images/works/Getting-Sun.png"],
    },
    {
      id: 16,
      title: "Volcano Phase",
      category: "1 to 108",
      image: "images/works/V0016-Volcano-Phase.png",
      popupLink: ["images/works/V0016-Volcano-Phase.png"],
    },
    {
      id: 17,
      title: "Growth Diet",
      category: "1 to 108",
      image: "images/works/V0017-Growth-Diet.png",
      popupLink: ["images/works/V0017-Growth-Diet.png"],
    },
    {
      id: 18,
      title: "Electrical-Way",
      category: "1 to 108",
      image: "images/works/V0018-Electrical-Way.png",
      popupLink: ["images/works/V0018-Electrical-Way.png"],
    },
  ];
  
  
  
function NFTs() {
    const [getAllItems] = useState(allData);
    const [dataVisibleCount, setDataVisibleCount] = useState(9);
    const [dataIncrement] = useState(9);
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
      <>
        <Header3 logoSource="/images/PulsarForge-1.png" />
        <section id="works">
          <div className="container">
            <Pagetitle title="NFTs Collections" />
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
          <div className="container">
            
          </div>
        </section>
        <Footer />
      </>
    );
  }

export default NFTs;