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
      status: "Status: "
    },
    {
      id: 2,
      text: "exoplanets",
      status: "Big Bang",
    },
    {
      id: 3,
      text: "homes",
      status: "Incoming",
    },
    {
      id: 4,
      text: "party-animals",
      status: "Coming Soon",
    }
  ];
  /* const extraData = [
    {
      id: 13,
      title: "Energy Spreader",
      category: "exoplanets",
      image: "images/works/Energy-Spreader.png",
      popupLink: ["images/works/Energy-Spreader.png"],
    },
    {
      id: 11,
      title: "The Ascension",
      category: "exoplanets",
      image: "images/works/The-Ascension.png",
      popupLink: ["images/works/The-Ascension.png"],
    },
    {
      id: 12,
      title: "Union Motor",
      category: "exoplanets",
      image: "images/works/Union-Motor.png",
      popupLink: ["images/works/Union-Motor.png"],
    },
    {
      id: 13,
      title: "Max Security",
      category: "exoplanets",
      image: "images/works/Max-Security.png",
      popupLink: ["images/works/Max-Security.png"],
    },
    {
      id: 14,
      title: "Vitamins Receptor",
      category: "exoplanets",
      image: "images/works/Vitamins-Receptor.png",
      popupLink: ["images/works/Vitamins-Receptor.png"],
    },
    {
      id: 15,
      title: "Getting Sun",
      category: "exoplanets",
      image: "images/works/Getting-Sun.png",
      popupLink: ["images/works/Getting-Sun.png"],
    },
    {
      id: 16,
      title: "Volcano Phase",
      category: "exoplanets",
      image: "images/works/V0016-Volcano-Phase.png",
      popupLink: ["images/works/V0016-Volcano-Phase.png"],
    },
    {
      id: 17,
      title: "Growth Diet",
      category: "exoplanets",
      image: "images/works/V0017-Growth-Diet.png",
      popupLink: ["images/works/V0017-Growth-Diet.png"],
    },
    {
      id: 18,
      title: "Electrical Way",
      category: "exoplanets",
      image: "images/works/V0018-Electrical-Way.png",
      popupLink: ["images/works/V0018-Electrical-Way.png"],
    },
    {
      id: 19,
      title: "Magnetical Landing",
      category: "exoplanets",
      image: "images/works/Magnetical-Landing.png",
      popupLink: ["images/works/Magnetical-Landing.png"],
    },
    {
      id: 20,
      title: "Cube Growth Chamber",
      category: "exoplanets",
      image: "images/works/Cube-Growth-Chamber.png",
      popupLink: ["images/works/Cube-Growth-Chamber.png"],
    },
    {
      id: 21,
      title: "Spring",
      category: "exoplanets",
      image: "images/works/Spring.png",
      popupLink: ["images/works/Spring.png"],
    },
    {
      id: 22,
      title: "Bio Portal",
      category: "exoplanets",
      image: "images/works/Bio-Portal.png",
      popupLink: ["images/works/Bio-Portal.png"],
    },
    {
      id: 23,
      title: "The Gathering",
      category: "exoplanets",
      image: "images/works/The-Gathering.png",
      popupLink: ["images/works/The-Gathering.png"],
    },
    {
      id: 24,
      title: "Energy Integrator",
      category: "exoplanets",
      image: "images/works/Energy-Integrator.png",
      popupLink: ["images/works/Energy-Integrator.png"],
    },
    {
      id: 25,
      title: "Claws",
      category: "exoplanets",
      image: "images/works/Claws.png",
      popupLink: ["images/works/Claws.png"],
    },
    {
      id: 26,
      title: "Concentration",
      category: "exoplanets",
      image: "images/works/Concentration.png",
      popupLink: ["images/works/Concentration.png"],
    },
    {
      id: 27,
      title: "Risks",
      category: "exoplanets",
      image: "images/works/Risks.png",
      popupLink: ["images/works/Risks.png"],
    },
  ]
  */
  const allData = [
    {
      id: 1,
      title: "Blocks Labs",
      category: "exoplanets",
      image: "images/works/block-labs-9.jpg",
      popupLink: ["images/works/block-labs-9.jpg"],
    },
    {
      id: 2,
      title: "Energy integrator",
      category: "exoplanets",
      image: "images/works/00002-energy-integrator.jpg",
      popupLink: ["images/works/00002-energy-integrator.jpg"],
    },
    {
      id: 3,
      title: "Concentration",
      category: "exoplanets",
      image: "images/works/00003-concentration.jpg",
      popupLink: ["images/works/00003-concentration.jpg"],
    },
    {
      id: 4,
      title: "Bio Portal",
      category: "exoplanets",
      image: "images/works/00004-bio-portal-4.jpg",
      popupLink: ["images/works/00004-bio-portal-4.jpg"],
    },
    {
      id: 5,
      title: "The Gathering",
      category: "exoplanets",
      image: "images/works/The_Gathering_V1.png",
      popupLink: ["images/works/The_Gathering_V1.png"],
    },
    {
      id: 6,
      title: "Tribal",
      category: "exoplanets",
      image: "images/works/00005-tribal.jpg",
      popupLink: ["images/works/00005-tribal.jpg"],
    },
    {
      id: 7,
      title: "Light Notebook",
      category: "exoplanets",
      image: "images/works/00008-light-notebook.jpg",
      popupLink: ["images/works/00008-light-notebook.jpg"],
    },
    {
      id: 8,
      title: "Honey Ice",
      category: "exoplanets",
      image: "images/works/00007-honey-ice.jpg",
      popupLink: ["images/works/00007-honey-ice.jpg"],
    },
    {
      id: 9,
      title: "One Stop Shot",
      category: "exoplanets",
      image: "images/works/one-stop-shot.png",
      popupLink: ["images/works/one-stop-shot.png"],
    },
    {
      id: 10,
      title: "Motor growth",
      category: "exoplanets",
      image: "images/works/motor-growth-9.png",
      popupLink: ["images/works/motor-growth-9.png"],
    },
    {
      id: 11,
      title: "Entry Point",
      category: "exoplanets",
      image: "images/works/entry-point.png",
      popupLink: ["images/works/entry-point.png"],
    },
    {
      id: 12,
      title: "Cloud Gum",
      category: "exoplanets",
      image: "images/works/00006-cloud-gum.jpg",
      popupLink: ["images/works/00006-cloud-gum.jpg"],
    },
  ];
  
  
  
function NFTs() {
    const [getAllItems] = useState(allData);
    const [dataVisibleCount, setDataVisibleCount] = useState(12);
    const [dataIncrement] = useState(9);
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
      <>
        <Helmet>
          <title>Explore the Voxelverse</title>
          <meta name="description" content="Each dimension was living in their own space and time, until the portals were opened, breaking the Voxelverse peace and... Starting the party!" />
        </Helmet>
        <Header3 logoSource="/images/PulsarForge-1.png" />
        <section id="Voxelverse" style={{backgroundColor: "rgb(24, 24, 24)"}}>
          
          <div style={{marginTop: 40, textAlign: "center"}}>
              <Pagetitle title="Explore the Voxelverse" />
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
                    <p
                      className={
                        filter.text.toLowerCase() === activeFilter
                          ? "text-capitalize current"
                          : "text-capitalize"
                      } style={{color: "orange"}}
                    >
                      {filter.status}
                    </p>
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
            <div className="container" style={{textAlign: "center"}}>
              <h2 style={{color: "white", width: "100%", marginTop: 40, marginBottom: 10}}>
               Voxelverse for You to: Earn, Collect, Discover, Build, Explore
              </h2>
              <ul className="social-icons light list-inline mb-0 mt-4">
                <li className="list-inline-item">
                  <a href="https://discord.com/invite/frYAsD2DjT">
                    Explore Voxelverse Discord <i className="fab fa-discord"></i>
                  </a>
                </li>
              </ul>
              <ul className="social-icons light list-inline mb-0 mt-4">
                <li className="list-inline-item">
                  <a href="https://paras.id/es/collection/voxelverse-exoplanets-by-pulsarforgenear">
                    Voxelverse Exoplanets First Launch on NEAR / ParasID
                  </a>
                </li>
              </ul>
              <h3 style={{color: "white", width: "100%", marginTop: 20, marginBottom: 15}}> Each dimension was living in their own space and time, until the portals were opened, breaking the Voxelverse peace and... Starting the party! </h3>
              <h4 style={{color: "white", width: "100%", marginTop: 10, marginBottom: 15}}> Own exoplanets and discover the local celebrations at the home quarters, break the dance floor, next to your party animals. </h4>
              <BrandlogosDarkNFTs />
              <div style={{paddingTop: 100}}></div>
            <div>
              <Experiences />
            </div>
            <div>
              <ul className="social-icons light list-inline mb-0 mt-4">
                <li className="list-inline-item">
                  <a href="https://discord.com/invite/frYAsD2DjT" target="_blank" rel="noreferrer">
                    Explore the Voxelverse <i className="fab fa-discord"></i>
                  </a>
                </li>
              </ul>
              <ul className="social-icons light list-inline mb-0 mt-4">
                <li className="list-inline-item">
                  <a href="https://twitter.com/pulsarforge" target="_blank" rel="noreferrer">
                    PulsarForge <i className="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="row">
            <h3 style={{color: "white", width: "100%", marginTop: 40, marginBottom: 10}}>
            Story Mode On, Guide your Party animals through the Voxelverse, their fate are in your hands.
            </h3>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

export default NFTs;