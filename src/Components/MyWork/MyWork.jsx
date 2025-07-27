import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      {/* <p className="section-instruction">
        👉 Tap the **left side** for Live Preview, and the **right side** for GitHub Repo.
      </p> */}
      <p className="section-instruction">
        Explore each project: <strong>Live Demo</strong> on the left, <strong>Source Code</strong> on the right.
      </p>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div
            key={index}
            className="mywork-item"
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            {/* Video or Image */}
            {work.w_video ? (
              <video
                src={work.w_video}
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  pointerEvents: "none",
                  transition: "0.3s",
                }}
              />
            ) : (
              <img
                src={work.w_img}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "0.3s",
                  pointerEvents: "none",
                }}
              />
            )}

            {/* Left Hover Area - Live Preview */}
            <div
              className="clickable-area left-area"
              onClick={() => {
                if (work.live_link) {
                  // --- MODIFIED LOGIC HERE ---
                  if (work.w_no === 5) { // Check if it's the portfolio item (w_no: 5)
                    window.open(work.live_link, "_self"); // Open in current tab
                  } else {
                    window.open(work.live_link, "_blank"); // Open in new tab for others
                  }
                  // --- END MODIFIED LOGIC ---
                }
              }}
              onMouseEnter={(e) => {
                const overlay = e.currentTarget.querySelector(".live-overlay");
                if (overlay) overlay.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                const overlay = e.currentTarget.querySelector(".live-overlay");
                if (overlay) overlay.style.opacity = "0";
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "50%",
                height: "100%",
                cursor: work.live_link ? "pointer" : "default",
              }}
            >
              <div
                className="live-overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  pointerEvents: "none",
                }}
              >
                Live Preview
              </div>
            </div>

            {/* Right Hover Area - GitHub (always new tab) */}
            <div
              className="clickable-area right-area"
              onClick={() => {
                if (work.github_link) window.open(work.github_link, "_blank");
              }}
              onMouseEnter={(e) => {
                const overlay = e.currentTarget.querySelector(".github-overlay");
                if (overlay) overlay.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                const overlay = e.currentTarget.querySelector(".github-overlay");
                if (overlay) overlay.style.opacity = "0";
              }}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "50%",
                height: "100%",
                cursor: work.github_link ? "pointer" : "default",
              }}
            >
              <div
                className="github-overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(to left, rgba(0, 0, 0, 0.5), transparent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  pointerEvents: "none",
                }}
              >
                View GitHub
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;