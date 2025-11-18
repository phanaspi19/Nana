import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const recentDesigns = [
  {
    img: "https://placehold.co/40x40/8e7cff/fff?text=1",
    title: "jQuery ក្រាប្រព CSS j...",
  },
  {
    img: "https://placehold.co/40x40/8e7cff/fff?text=2",
    title: "www.reallygreatsite.c...",
  },
  {
    img: "https://placehold.co/40x40/fed7e7/fff?text=3",
    title: "The Future of the Arc...",
  },
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    title: "Untitled Design",
  },
  {
    img: "https://placehold.co/40x40/fff/8e7cff?text=4",
    title: "Copy of វិញ្ញាសានសប្បុរ...",
  },
  {
    img: "https://placehold.co/40x40/fff/8e7cff?text=5",
    title: "វិញ្ញាសានសប្បុរ...",
  },
  {
    img: "https://placehold.co/40x40/222/fff?text=6",
    title: "Unique Traditional Sp...",
  },
  {
    img: "https://placehold.co/40x40/f9a8d4/fff?text=7",
    title: "cacs",
  },
  {
    img: "https://placehold.co/40x40/fff/8e7cff?text=8",
    title: "Copy of វិញ្ញាសានសប្បុរ...",
  },
  {
    img: "https://placehold.co/40x40/fff/8e7cff?text=9",
    title: "Group 2",
  },
];

const About = () => {
  const [showRecent, setShowRecent] = useState(false);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleRecentClick = (idx) => {
    setSelected(idx);
    // You can add navigation or modal logic here if needed
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="canva-sidebar cute-sidebar">
      <div
        className="canva-hamburger cute-hamburger"
        onClick={() => setShowRecent((v) => !v)}
        style={{ cursor: "pointer" }}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="canva-sidebar-icons">
        <button className="canva-sidebar-btn canva-create cute-btn">
          <span className="canva-sidebar-icon cute-icon">🧸</span>
        </button>
        <div className="canva-label cute-label">Create</div>
        <button
          className="canva-sidebar-btn canva-active cute-btn"
          onClick={handleHomeClick}
        >
          <span className="canva-sidebar-icon cute-icon">🏡</span>
        </button>
        <div className="canva-label cute-label">Home</div>
        {/* <button
          className="canva-sidebar-btn cute-btn"
          onClick={() => navigate("/management")}
        >
          <span className="canva-sidebar-icon cute-icon">🏢</span>
        </button>
        <div className="canva-label cute-label">ទីចាត់ការ</div> */}
        <button className="canva-sidebar-btn cute-btn">
          <span className="canva-sidebar-icon cute-icon">🧩</span>
        </button>
        <div className="canva-label cute-label">Templates</div>
        <button className="canva-sidebar-btn cute-btn">
          <span className="canva-sidebar-icon cute-icon">🐻</span>
          <span className="canva-crown cute-crown">✨</span>
        </button>
        <div className="canva-label cute-label">Brand</div>
        <button
          className="canva-sidebar-btn cute-btn"
          onClick={() => navigate("/support-me")}
        >
          <span className="canva-sidebar-icon cute-icon">🌸</span>
        </button>
        <div className="canva-label cute-label">Support Me </div>
      </div>
      {showRecent && (
        <div className="recent-designs-popup">
          <div className="recent-title">Recent designs</div>
          <ul className="recent-list">
            {recentDesigns.map((item, idx) => (
              <li
                className={`recent-item${selected === idx ? " selected" : ""}`}
                key={idx}
                onClick={() => handleRecentClick(idx)}
                tabIndex={0}
                style={{ cursor: "pointer" }}
              >
                <img src={item.img} alt="thumb" className="recent-thumb" />
                <span className="recent-text">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default About;
