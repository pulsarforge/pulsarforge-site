import React, { useState, useEffect } from "react";
import { NextSeo } from 'next-seo';

import Pagetitle from "../components/elements/Pagetitle";
import Showcase from "../components/elements/Showcase";
import CivilizationsFiltersJson from "../data/civilizations-filters.json";
import CivilizationsJson from "../data/civilizations.json";


function CivilizationsVoxelverse() {
  const filters = CivilizationsFiltersJson;
  const allData = CivilizationsJson;
  const allDataLength = CivilizationsJson.length;
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(allDataLength);
  const [dataIncrement] = useState(allDataLength);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 10));
  }, [filters, getAllItems]);

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
        <NextSeo
          title="Explore the Voxelverse 🛸"
          description="Each dimension was living in their own space and time, until the portals were opened, breaking the Voxelverse peace and, starting the party"
          openGraph={{
            type: 'website',
            url: 'https://pulsarforge.io/CivilizationsVoxelverse',
            title: 'Explore the Voxelverse 🛸',
            description: 'Each dimension was living in their own space and time, until the portals were opened, breaking the Voxelverse peace and, starting the party',
            images: [
              {
                url: 'https://pulsarforge.io/images/works/bear-time-party-head.jpg',
                width: 800,
                height: 800,
                alt: 'Civilizations Voxelverse Logo',
              }
            ],
            siteName: 'Explore the Voxelverse 🛸',
            tags: ['Voxel Art', 'hand crafted', 'world building', 'Civilizations', 'Voxelverse', 'Collectibles'],
          }}
          additionalLinkTags={[
            {
              rel: 'icon',
              href: 'https://pulsarforge/images/logo.png',
            },
            {
              rel: 'apple-touch-icon',
              href: 'https://pulsarforge/images/logo.png',
            }
          ]}
          twitter={{
            handle: '@pulsarforge',
            site: '@site',
            cardType: 'summary_large_image',
          }}
        />
      <main>
          <div className="page-title-center-maring-top">
            <Pagetitle title="Civilizations Voxelverse" />
            <Pagetitle title="Space adventures happening on gravity & quantum basics" />
            
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <ul className="portfolio-filter list-inline filters-voxelverse-position">
            {filters.map((filter) => (
              <li className="list-inline-item" key={filter.id}>
                <button
                  onClick={handleChange}
                  className={
                    filter.text.toLowerCase() === activeFilter
                      ? "text-capitalize current"
                      : "text-capitalize"
                  }
                  style={{ fontSize: 25 }}
                >
                  {filter.text}
                </button>
              </li>
            ))}
          </ul>
        <div
          className="row portfolio-wrapper"
        >
          {visibleItems.map((item) => (
            <div className="col-md-6 col-sm-6 grid-item" key={item.id}>
              <Showcase portfolio={item} />
            </div>
          ))}
        </div>
        <div className="load-more text-center mt-4">
          <button
            className="btn btn-default"
            onClick={handleLoadmore}
            disabled={noMorePost ? "disabled" : null}
          >
            {noMorePost ? (
              "Crafting artworks 🎉🎉🎉🎉 return in a few days"
            ) : (
              <span>
                <i className="fas fa-spinner"></i> Explore further
              </span>
            )}
          </button>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="ontainer civilizations-position">
        
        </div>
        <div className="container civilizations-position">
          <h2 className="civilizations-h2" style={{fontSize: 45 }}>
            Civilizations Voxelverse
          </h2>
          <br />
          <br />
          <img src="/images/works/bear-time-party-head.jpg" style={{width: "400px", height: "400px", borderRadius: 100}} alt="party head"/>
          <br />
          <br />
          <h2 className="civilizations-h2" style={{fontSize: 45 }}>
            Discover, Explore, Build
          </h2>
          <h4 className="civilizations-h4" style={{fontSize: 30 }}>
            Each dimension was living in their own space and time
            <br />
            <br />
            Until the portals open new destinies and possibilities
          </h4>
          <h4 className="civilizations-h4" style={{fontSize: 30 }}>
            Breaking the Voxelverse peace, and starting the party
          </h4>
        </div>
        <br />
        <br />
        <br />
        <br />
      </main>
      
    </>
  );
}

export default CivilizationsVoxelverse;
