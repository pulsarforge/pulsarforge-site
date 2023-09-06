import React, { useState, useEffect } from "react";
import { NextSeo } from 'next-seo';

import Pagetitle from "../components/elements/Pagetitle";
import Showcase from "../components/elements/Showcase";
import CivilizationsFiltersJson from "../data/missions-filters.json";
import CivilizationsJson from "../data/missions.json";
import Image from "next/image";


function Missions() {
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
    setVisibleItems(getAllItems.filter((item) => item.id <= 8));
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
          title="WOAPs Life Events ✨"
          description="Complete a life event, join the community, proof and claim, WOAPs"
          openGraph={{
            type: 'website',
            url: 'https://pulsarforge/Missions',
            title: 'WOAPs your inmutable proof of achievements',
            description: 'Missions, NFTs Memories, and Life Events, Inmutable Proof of Achievements, WOAPs',
            images: [
              {
                url: 'https://pulsarforge/images/works/well-done-flow.png',
                width: 800,
                height: 800,
                alt: 'WOAPs Logo',
              }
            ],
            siteName: 'Pulsarforge home labs',
            tags: ['WOAPs', 'NFTs', 'Life Events', 'Certification'],
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
            
            <Pagetitle title="Missions, NFTs Memories, and Life Events" />
            <Pagetitle title="Inmutable Proof of Achievements" />
            <Pagetitle title="WOAPs" />
            <ul>
              <li className="list-inline-item" >
                <Image src="/images/works/well-done-flow.png" alt="well done" style={{ borderRadius: 60}} width={400} height={400}/>
              </li>
            </ul>
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
          style={{ paddingLeft: "15px", paddingRight: "15px" }}
        >
          {visibleItems.map((item) => (
            <div className="col-md-3 col-sm-6 grid-item" key={item.id}>
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
              "That's how we do 🤠🤠🤠🤠"
            ) : (
              <span>
                <i className="fas fa-spinner"></i> Complete them and Claim them on NEAR
              </span>
            )}
          </button>
        </div>
        <br />
        <br />
        <br />
        <br />
      </main>
      
    </>
  );
}

export default Missions;
