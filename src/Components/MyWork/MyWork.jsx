import React, { useRef, useState, useEffect, useCallback } from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

// --- MyWorkItem Component for Lazy Loading and Conditional Rendering ---
const MyWorkItem = ({ work }) => {
  const itemRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false); // New state to track video load

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target); // Stop observing once it's in view
          }
        });
      },
      {
        rootMargin: '0px', // When the element is 0px from the viewport
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []); // Run effect once on mount

  // Callback for when the video metadata has loaded
  const handleVideoLoaded = useCallback(() => {
    setIsVideoLoaded(true);
  }, []);

  // Memoize the click handlers to prevent unnecessary re-renders
  const handleLiveClick = useCallback(() => {
    if (work.live_link) {
      if (work.w_no === 5) { // Check if it's the portfolio item (w_no: 5)
        window.open(work.live_link, "_self"); // Open in current tab
      } else {
        window.open(work.live_link, "_blank"); // Open in new tab for others
      }
    }
  }, [work.live_link, work.w_no]);

  const handleGithubClick = useCallback(() => {
    if (work.github_link) window.open(work.github_link, "_blank");
  }, [work.github_link]);

  return (
    <div
      ref={itemRef} // Attach ref to the main item container for Intersection Observer
      className="mywork-item"
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      {/* Conditional rendering for media content */}
      {work.w_video ? ( // If there's a video defined
        isInView ? ( // And the item is in view
          <>
            {/* Show video once it's in view and loaded */}
            <video
              src={work.w_video}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className="mywork-media"
              onLoadedData={handleVideoLoaded} // Set state when video metadata is loaded
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                pointerEvents: "none",
                transition: "opacity 0.3s ease", // Smooth transition for video appearance
                opacity: isVideoLoaded ? 1 : 0, // Hide until loaded
              }}
            >
              Your browser does not support the video tag.
            </video>
            {/* Show placeholder until video is actually loaded */}
            {!isVideoLoaded && (
              <div
                className="mywork-media video-placeholder"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 1, // Ensure placeholder is above video if video is loading slowly
                }}
              >
                {/* Optional: Add a spinner or text inside the placeholder */}
                {/* <div className="loading-spinner"></div> */}
                {/* <span>Loading...</span> */}
              </div>
            )}
          </>
        ) : (
          // When video is defined but not yet in view, show a simple placeholder div
          <div
            className="mywork-media video-placeholder"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              pointerEvents: "none",
            }}
          >
            {/* Optional: You can put a static image here if you want a visual placeholder before lazy loading */}
            {/* <img src={work.w_img} alt={work.w_name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
            {/* Or just leave it as a blank animated background */}
          </div>
        )
      ) : (
        // If no video is defined, just render the image as before
        <img
          src={work.w_img}
          alt={work.w_name || "Project thumbnail"}
          className="mywork-media"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Left Hover Area - Live Preview */}
      <div
        className="clickable-area left-area"
        onClick={handleLiveClick}
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
        onClick={handleGithubClick}
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
  );
};

// --- Main MyWork Component (unchanged structurally, now renders MyWorkItem) ---
const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <p className="section-instruction">
        Explore each project: <strong>Live Demo</strong> on the left, <strong>Source Code</strong> on the right.
      </p>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <MyWorkItem key={index} work={work} /> // Render the new component here
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
