import React from "react";



function NotFoundPage() {

  return (
    <>
      
      <section
        className="home d-flex align-items-center"
      >
        <div
          style={{
            background: "url('/images/hero-background.png')",
            backgroundRepeat: "no-repeat",
            height: "100%",
            width: "100%",
            minHeight: "100%",
            backgroundSize: "100%",
          }}
        >
          <div className="intro">
            <div>
              <h2
                style={{
                  fontSize: 32,
                  color: "#fff",
                  textShadow: "3px 3px 2px rgb(37, 37, 37)",
                  paddingTop: 240,
                  paddingBottom: 240,
                }}
              >
                Hey It seems you landed in the unknown 404
                <br />
                <br />
                Back to the check the map and get back to the road
              </h2>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default NotFoundPage;
