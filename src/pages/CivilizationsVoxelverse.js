import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../components/elements/Pagetitle";
import PortfolioVoxelverse from "../components/elements/PortfolioVoxelverse";
import Header3 from "../components/layouts/Header3";
import Footer from "../components/layouts/Footer";
import { Helmet } from "react-helmet";

const filters = [
    {
      id: 1,
      text: "Exoplanets",
      rarity: "All",
      status: "Level:"
    },
    {
      id: 2,
      text: "common",
      rarity: "Level I",
      status: "Common",
    },
    {
      id: 3,
      text: "Uncommon",
      rarity: "Level II",
      status: "Uncommon",
    },
    {
      id: 4,
      text: "Rare",
      rarity: "Level III",
      status: "Rare",
    },
    {
      id: 5,
      text: "Epic",
      rarity: "Level IV",
      status: "Epic",
    },
    {
      id: 6,
      text: "Legendary",
      rarity: "Dimensional",
      status: "Legendary",
    }
  ];

  const allData = [
    {
      id: 1,
      title: "Blocks Labs",
      category: "epic",
      image: "images/works/block-labs-9.jpg",
      popupLink: ["images/works/block-labs-9.jpg"],
    },
    {
      id: 2,
      title: "Energy integrator",
      category: "rare",
      image: "images/works/00002-energy-integrator.jpg",
      popupLink: ["images/works/00002-energy-integrator.jpg"],
    },
    {
      id: 3,
      title: "Concentration",
      category: "rare",
      image: "images/works/00003-concentration.jpg",
      popupLink: ["images/works/00003-concentration.jpg"],
    },
    {
      id: 4,
      title: "Bio Portal",
      category: "uncommon",
      image: "images/works/00004-bio-portal-4.jpg",
      popupLink: ["images/works/00004-bio-portal-4.jpg"],
    },
    {
      id: 5,
      title: "The Gathering",
      category: "uncommon",
      image: "images/works/The_Gathering_V_1.jpg",
      popupLink: ["images/works/The_Gathering_V_1.jpg"],
    },
    {
      id: 6,
      title: "Tribal",
      category: "common",
      image: "images/works/00005-tribal.jpg",
      popupLink: ["images/works/00005-tribal.jpg"],
    },
    {
      id: 7,
      title: "Light Notebook",
      category: "epic",
      image: "images/works/00008-light-notebook.jpg",
      popupLink: ["images/works/00008-light-notebook.jpg"],
    },
    {
      id: 8,
      title: "Honey Ice",
      category: "common",
      image: "images/works/00007-honey-ice.jpg",
      popupLink: ["images/works/00007-honey-ice.jpg"],
    },
    {
      id: 9,
      title: "One Stop Shot",
      category: "common",
      image: "images/works/one-stop-shot.jpg",
      popupLink: ["images/works/one-stop-shot.jpg"],
    },
    {
      id: 10,
      title: "Motor growth",
      category: "rare",
      image: "images/works/motor-growth-9.jpg",
      popupLink: ["images/works/motor-growth-9.jpg"],
    },
    {
      id: 11,
      title: "Entry Point",
      category: "uncommon",
      image: "images/works/entry-point.jpg",
      popupLink: ["images/works/entry-point.jpg"],
    },
    {
      id: 12,
      title: "Once a Time",
      category: "common",
      image: "images/works/once-a-time.jpg",
      popupLink: ["images/works/once-a-time.jpg"],
    },
    {
      id: 13,
      title: "Laser Flower",
      category: "Epic",
      image: "images/works/laser-flower-13.jpg",
      popupLink: ["images/works/laser-flower-13.jpg"],
    },
    {
      id: 14,
      title: "Energy Travel",
      category: "common",
      image: "images/works/energy-travel-14.jpg",
      popupLink: ["images/works/energy-travel-14.jpg"],
    },
    {
      id: 15,
      title: "Magnetical Landing",
      category: "uncommon",
      image: "images/works/0015-magnetical-landing.jpg",
      popupLink: ["images/works/0015-magnetical-landing.jpg"],
    },
    {
      id: 16,
      title: "Fountain Raw",
      category: "common",
      image: "images/works/fountain-raw.jpg",
      popupLink: ["images/works/fountain-raw.jpg"],
    },
    {
      id: 17,
      title: "Beauty Rose",
      category: "uncommon",
      image: "images/works/beauty-rose.jpg",
      popupLink: ["images/works/beauty-rose.jpg"],
    },
    {
      id: 18,
      title: "Rock Face",
      category: "common",
      image: "images/works/rock-face.jpg",
      popupLink: ["images/works/rock-face.jpg"],
    },
    {
      id: 19,
      title: "Rising Hammer",
      category: "rare",
      image: "images/works/rising-hammer.jpg",
      popupLink: ["images/works/rising-hammer.jpg"],
    },    
    {
      id: 20,
      title: "Light Travel",
      category: "legendary",
      image: "images/works/light-travel.jpg",
      popupLink: ["images/works/light-travel.jpg"],
    },
  ];
  
  
  
function CivilizationsVoxelverse() {
    const [getAllItems] = useState(allData);
    const [dataVisibleCount, setDataVisibleCount] = useState(8);
    const [dataIncrement] = useState(16);
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
      <>
        <Helmet>
          <title>Explore the Voxelverse</title>
          <meta name="description" content="Each dimension was living in their own space and time, until the portals were opened, breaking the Voxelverse peace and, starting the party" />
        </Helmet>
        <Header3 logoSource="/images/PulsarForge-1.png" />
        <section id="Voxelverse" style={{backgroundColor: "rgb(24, 24, 24)"}}>
          
          <div style={{marginTop: 40, textAlign: "center"}}>
              <Pagetitle title="Voxelverse Exoplanets" />
            </div>{/* Start Portfolio Filters */}
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInOut"
              animateOnce={true}
            >
              
              <ul className="portfolio-filter list-inline" style={{textAlign: "center"}}>
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
                  "Crafting artworks, return in a few days"
                ) : (
                  <span>
                    <i className="fas fa-spinner"></i> Explore more
                  </span>
                )}
              </button>
            </div>
            <div className="container" style={{textAlign: "center"}}>
              <h2 style={{color: "white", width: "100%", marginTop: 40, marginBottom: 10}}>
               Civilizations Voxelverse for You<br />Discover, Explore, Build
              </h2>
              <br />
              <h4 style={{color: "white", width: "100%", marginTop: 20, marginBottom: 15}}>Each dimension was living in their own space and time<br /><br />Until the portals open new destinies and possibilities</h4>
              <h4 style={{color: "white", width: "100%", marginTop: 20, marginBottom: 15}}>Breaking the Voxelverse peace, and starting the party</h4>
              <br />
              <h4 style={{color: "white", width: "100%", marginTop: 10, marginBottom: 15}}>Discover the local celebrations<br /><br /> Explore exoplanets<br /><br />Build your home quarters<br />Incoming</h4>
              <h4 style={{color: "white", width: "100%", marginTop: 10, marginBottom: 15}}>Break the dance floor<br /><br />Next to your party animals<br />Incoming</h4>
              <div style={{paddingTop: 20}}></div>
            <div className="row">
            <h3 style={{color: "white", width: "100%", marginTop: 40, marginBottom: 100}}>
              Story Mode<br /><br /><br />Guide your party animals<br /><br />Through the Voxelverse<br /><br />Their fates are in your hands
            </h3>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

export default CivilizationsVoxelverse;