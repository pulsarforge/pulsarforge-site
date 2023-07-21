import React, { useState, useEffect } from "react";
import { NextSeo } from 'next-seo';

import Pagetitle from "../components/elements/Pagetitle";
import Pagination from "../components/elements/Pagination";
import DogDaysJson from "../data/dog-days.json";
import DogQuotesJson from "../data/dog-quotes.json";
import DogDaysElement from "@/components/elements/DogDays";


function DogDays() {
  const allBlogs = DogDaysJson;
  const allQuotes = DogQuotesJson;
  const [posts, setPosts] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [postsPerPage] = useState(DogDaysJson.length);

  useEffect(() => {
    setPosts(allBlogs);
  }, [allBlogs]);
  
  useEffect(() => {
    setQuotes(allQuotes);
  }, [allQuotes]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  const handleQuoteClick = () => {
    setCurrentQuoteIndex((currentIndex) => (currentIndex + 1) % quotes.length);
  };
  return (
    <>
        <NextSeo
          title="Dog Days Blog ✍🏽"
          description="Blog of a dog living tech adventures, gaining knowledge"
          openGraph={{
            type: 'website',
            url: 'https://pulsarforge/DogDays',
            title: 'Dog Days Blog ✍🏽',
            description: 'Blog of a dog living tech adventures, gaining knowledge',
            images: [
              {
                url: 'https://pulsarforge.io/images/dog-blog-we-are-early.jpg',
                width: 1920,
                height: 1080,
                alt: 'Dog Days Blog Logo',
              }
            ],
            siteName: 'Pulsarforge home labs',
            tags: ['Personal', 'Blog', 'Dog', 'Tech', 'Programming', 'Life'],
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
      <div className="spacer" data-height="96"></div>
        <br />
        <br />
        <br />
        <div className="blog-page-section" id="dog-days">
          <div className="container">
            <div className="row blog-wrapper fix-spacing">
              <div className="page-title-center">
                <div onClick={handleQuoteClick}>
                  <img  src="/images/dog-blog-we-are-early.jpg" style={{ height: "auto", width: "auto", borderRadius: "100px", marginBottom: "30px"}} alt="dog-streaming"/>
                  <p style={{fontSize: "22px"}}>{quotes[currentQuoteIndex]}</p>
                </div>
                <br />
                <br />
                <Pagetitle title="Personal Dog Days Blog" />
                <br />
                <br />
                <br />
                <br />
                
              </div>
              {currentPosts.map((blogItem) => (
                <div className="col-md-3 list-inline" key={blogItem.id}>
                  <DogDaysElement blogData={blogItem} />
                </div>
              ))}
            </div>

            <div className="spacer" data-height="50"></div>
            {!(posts.length > postsPerPage) ? null : (
              <Pagination
                itemsPerPage={postsPerPage}
                totalItems={posts.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            )}
          </div>
        </div>
        <div className="spacer" data-height="96"></div>
      </main>
      
    </>
  );
}

export default DogDays;
