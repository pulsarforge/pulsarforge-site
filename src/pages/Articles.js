import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import Header3 from "../components/layouts/Header3";
import Footer from "../components/layouts/Footer";
import { Helmet } from "react-helmet";

const metadataAllBlogs = [
  {
    id: 1,
    title: "Civilizations Voxelverse",
    description: "Explore Exoplanets and Homes. Guide your Party Animals at the Voxelverse.",
    image: "https://pulsarforge.io/images/blog/The_Gathering_V1.jpg",
    author: "Pulsarforge",
    category: "Metaverse - 😎",
  },
  {
    id: 2,
    title: "Cryptoracle analytics Dapp",
    description: "Cryptoracle, discovering patterns at web3.",
    image: "https://pulsarforge.io/images/blog/cryptoracle.png",
    author: "Pulsarforge",
    category: "Cryptoracle - 📈",
  },
  {
    id: 3,
    title: "Estonia dream travel",
    description: "Cities, towns and forests I want to explore in Estonia.",
    image: "https://pulsarforge.io/images/blog/Estonia.jpg",
    author: "Pulsarforge",
    category: "Estonia - 🦄",
  },
  {
    id: 4,
    title: "DAO onboarding process, guide, smooth as silk",
    description: "DAOs and on boarding process, composed of all the elements in the pre joining, joining, integrating in the workflow the newcomer, and experience review phase.",
    image: "https://pulsarforge.io/images/blog/dao-onboarding.jpg",
    author: "Pulsarforge",
    category: "DAOs - 🔮",
  },
  {
    id: 5,
    title: "Dumb ideas with potential V1",
    descrition: "Flexing my code muscles, and business skills. Stages: Traditional, Innovation, Flow State.",
    image: "https://pulsarforge.io/images/blog/dumb-ideas-with-potential-v1.jpg",
    author: "Pulsarforge",
    category: "Code Labs - 💻",
  },
];

function Articles(props) {
  const [content, setContent] = useState("");
  const blogFile = props.match.params.title;
  const blogId = props.match.params.id - 1;
  const articleId  = metadataAllBlogs[blogId].id;
  const articleTitle = metadataAllBlogs[blogId].title;
  const articleDescription = metadataAllBlogs[blogId].description;
  const articleImage = metadataAllBlogs[blogId].image;

  useEffect(() => {
    import(`../blogs/${blogFile}.md`)
      .then((res) => res.default)
      .then((res) => {
        fetch(res)
          .then((result) => result.text())
          .then((result) => setContent(result));
      });
  }, [content, blogFile]);

  const [toggleMenu, setToggleMenu] = useState(false);

  const headerToggler = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  document.addEventListener("click", function (e) {
    if (e.target.closest(".content")) {
      setToggleMenu(false);
    }
  });

  // document.body.classList.add("dark");
  //Uncomment the above line if you use dark version

  return (
    <>
      <Helmet>
        <title>{`${articleTitle}`}</title>
        <meta property="og:type" content="article" />
        <meta name="description" content={articleDescription}/>
        <meta property="og:image" content={articleImage} />
        <meta property="og:author" content="Pulsarforge" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
      </Helmet>
      <Header3
        logoSource="/images/PulsarForge-1.png"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <p style={{color: "white"}}>{articleId}</p>
      <br/>
      <br/>
      <br/>
      <main>
        <div className="spacer" data-height="96"></div>
        <div className="blog-page-section">
          <div className="container">
            <div className="blog-single shadow-dark p-30">
              <Markdown>{content}</Markdown>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="96"></div>
      </main>
      <Footer />
    </>
  );
}

export default Articles;
