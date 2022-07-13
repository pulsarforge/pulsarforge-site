import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../components/elements/Pagetitle";
import Portfolio from "../components/elements/Portfolio";
import Header3 from "../components/layouts/Header3";
import Experiences from "../components/sections/Experiences";
import Footer from "../components/layouts/Footer";
import { Helmet } from "react-helmet";
import BrandlogosDarkNFTs from "../components/sections/BrandlogosDarkNFTs";

const filters = [
    {
      id: 1,
      text: "All-In",
    },
    {
      id: 2,
      text: "voxelverse-exoplanets",
    },
    {
      id: 3,
      text: "head-quarters",
    },
    {
      id: 4,
      text: "droid-squads",
    },
    {
      id: 5,
      text: "space-pets",
    },
    {
      id: 6,
      text: "?",
    }
  ];
  const allData = [
    {
      id: 1,
      title: "Magnetical Landing",
      category: "voxelverse-exoplanets",
      image: "images/works/Magnetical-Landing.png",
      popupLink: ["images/works/Magnetical-Landing.png"],
    },
    {
      id: 2,
      title: "Cube Growth Chamber",
      category: "voxelverse-exoplanets",
      image: "images/works/Cube-Growth-Chamber.png",
      popupLink: ["images/works/Cube-Growth-Chamber.png"],
    },
    {
      id: 3,
      title: "Spring",
      category: "voxelverse-exoplanets",
      image: "images/works/Spring.png",
      popupLink: ["images/works/Spring.png"],
    },
    {
      id: 4,
      title: "Bio Portal",
      category: "voxelverse-exoplanets",
      image: "images/works/Bio-Portal.png",
      popupLink: ["images/works/Bio-Portal.png"],
    },
    {
      id: 5,
      title: "The Gathering",
      category: "voxelverse-exoplanets",
      image: "images/works/The_Gathering_V1.png",
      popupLink: ["images/works/The_Gathering_V1.png","images/works/The-Gathering.png"],
    },
    {
      id: 6,
      title: "Energy Integrator",
      category: "voxelverse-exoplanets",
      image: "images/works/Energy-Integrator.png",
      popupLink: ["images/works/Energy-Integrator.png"],
    },
    {
      id: 7,
      title: "Claws",
      category: "voxelverse-exoplanets",
      image: "images/works/Claws.png",
      popupLink: ["images/works/Claws.png"],
    },
    {
      id: 8,
      title: "Concentration",
      category: "voxelverse-exoplanets",
      image: "images/works/Concentration.png",
      popupLink: ["images/works/Concentration.png"],
    },
    {
      id: 9,
      title: "Risks",
      category: "voxelverse-exoplanets",
      image: "images/works/Risks.png",
      popupLink: ["images/works/Risks.png"],
    },
    {
      id: 10,
      title: "Energy Spreader",
      category: "voxelverse-exoplanets",
      image: "images/works/Energy-Spreader.png",
      popupLink: ["images/works/Energy-Spreader.png"],
    },
    {
      id: 11,
      title: "The Ascension",
      category: "voxelverse-exoplanets",
      image: "images/works/The-Ascension.png",
      popupLink: ["images/works/The-Ascension.png"],
    },
    {
      id: 12,
      title: "Union Motor",
      category: "voxelverse-exoplanets",
      image: "images/works/Union-Motor.png",
      popupLink: ["images/works/Union-Motor.png"],
    },
    {
      id: 13,
      title: "Max Security",
      category: "voxelverse-exoplanets",
      image: "images/works/Max-Security.png",
      popupLink: ["images/works/Max-Security.png"],
    },
    {
      id: 14,
      title: "Vitamins Receptor",
      category: "voxelverse-exoplanets",
      image: "images/works/Vitamins-Receptor.png",
      popupLink: ["images/works/Vitamins-Receptor.png"],
    },
    {
      id: 15,
      title: "Getting Sun",
      category: "voxelverse-exoplanets",
      image: "images/works/Getting-Sun.png",
      popupLink: ["images/works/Getting-Sun.png"],
    },
    {
      id: 16,
      title: "Volcano Phase",
      category: "voxelverse-exoplanets",
      image: "images/works/V0016-Volcano-Phase.png",
      popupLink: ["images/works/V0016-Volcano-Phase.png"],
    },
    {
      id: 17,
      title: "Growth Diet",
      category: "voxelverse-exoplanets",
      image: "images/works/V0017-Growth-Diet.png",
      popupLink: ["images/works/V0017-Growth-Diet.png"],
    },
    {
      id: 18,
      title: "Electrical Way",
      category: "voxelverse-exoplanets",
      image: "images/works/V0018-Electrical-Way.png",
      popupLink: ["images/works/V0018-Electrical-Way.png"],
    },    
    {
      id: 19,
      title: "Wise Tower Replicants",
      category: "head-quarters",
      image: "images/works/Head-Quarters.jpg",
      popupLink: ["images/works/Head-Quarters.jpg"],
    },
    {
      id: 20,
      title: "The Ceremony",
      category: "droid-squads",
      image: "images/works/Droid-Squads.jpg",
      popupLink: ["images/works/Droid-Squads.jpg"],
    },
    {
      id: 21,
      title: "Barking Dogs",
      category: "space-pets",
      image: "images/works/Space-Pets.jpg",
      popupLink: ["images/works/Space-Pets.jpg"],
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
        <Helmet>
          <title>Civilizations Voxelverse NFTs</title>
          <meta name="description" content="Interdimensional NFTs connected to different blockchains and ecosystems. Exoplanets and Droid Squad Collections. Each dimension was living in their own space and time, until the portals were opened, breaking the Voxelverse peace" />
        </Helmet>
        <Header3 logoSource="/images/PulsarForge-1.png" />
        <section id="works">
          <div className="container">
              <h2 style={{color: "white", width: "100%", marginTop: 40, marginBottom: 10}}>
               Voxelverse for You to: Earn, Collect, Discover, Build, Explore
              </h2>
              <ul className="social-icons light list-inline mb-0 mt-4">
                <li className="list-inline-item">
                  <a href="https://discord.com/invite/frYAsD2DjT">
                    Join to Civilizations Voxelverse Discord <i className="fab fa-discord"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://paras.id/es/collection/voxelverse-exoplanets-by-pulsarforgenear">
                    Voxelverse Exoplanets First Launch on NEAR / ParasID
                  </a>
                </li>
              </ul>
              <h3 style={{color: "white", width: "100%", marginTop: 30, marginBottom: 10}}> Interdimensional NFTs connected to different blockchains and ecosystems</h3>
              <h3 style={{color: "white", width: "100%", marginTop: 20, marginBottom: 15}}> Each dimension was living in their own space and time, until the portals were opened, breaking the Voxelverse peace </h3>
              <h4 style={{color: "white", width: "100%", marginTop: 10, marginBottom: 15}}> Phases: Own exoplanets conquer galaxies / Command droid squads, PFP NFTs, from your HQ </h4>
              <h4 style={{color: "white", width: "100%", marginTop: 10, marginBottom: 15}}> Clash of dimensions, cross the portals / Don't forget to feed your space pets! </h4>
              <BrandlogosDarkNFTs />
              <div style={{paddingTop: 100}}></div>
            <div style={{marginTop: 40}}>
              <Pagetitle title="Civilizations Voxelverse" />
            </div>{/* Start Portfolio Filters */}
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
            <div>
              <Experiences />
            </div>
            <div>
              <ul className="social-icons light list-inline mb-0 mt-4">
                <li className="list-inline-item">
                  <a href="https://discord.com/invite/frYAsD2DjT" target="_blank" rel="noreferrer">
                    Civilizations Voxelverse <i className="fab fa-discord"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://twitter.com/pulsarforge" target="_blank" rel="noreferrer">
                    PulsarForge <i className="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="row">
              <div>
                <div>
                  <a href="https://pulsarforge.io/voxelverse-onflow-mint">
                    <h2 style={{color: "white", width: "100%", marginTop: 40, marginBottom: 10}}>Flow Collection on testnet</h2>
                  </a>
                  <h2 style={{color: "white", width: "100%"}}>Incoming integrations: NEAR</h2>
                </div>
              </div>
            </div>
            <div style={{marginTop: 70}}>
              <h2 style={{color: "white"}}> Subscribe for Voxelverse News. </h2>
              <iframe title="Voxel Times Newsletter" src="https://pulsarforge.substack.com/embed" width="100%" height="320" scrolling="no"></iframe>
            </div>
            <h3 style={{color: "white", width: "100%", marginTop: 40, marginBottom: 10}}>
            Story Mode On, Guide your Civilizations through the Voxelverse, their fate are in your hands
            </h3>
          </div>
        </section>
        <Footer />
      </>
    );
  }

export default NFTs;