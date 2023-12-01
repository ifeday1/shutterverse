import React from "react";
import "../Components/Navbar.css";
import Photo from "../assests/photo.jpg";

const LandingPage = () => {
  return (
    <>
      <div class="relative">
        <div className="where">
          <h1>Where moments become timeless memories</h1>
          <div class="absolute">
            <img
              style={{
                width: "600px",
                top: "200px",
                float: "right",
                zIndex: "10",
              }}
              src={Photo}
              alt="timeless"
            />
          </div>
        </div>
      </div>
      {/* About */}
      <div className="bg-dark-brown w-80 h-96">
        <h2 className="mt-96 pl-16 pr-16">About</h2>
        <h1 className="text-lg">
          I specialize in creating stunning visual stories through the lens.
          From weddings to family portraits, events to landscapes, every
          photograph I take encapsulates emotions, beauty, and unforgettable
          moments
        </h1>
      </div>

      <div className="bg-gray-200 p-4">
        <h1 className="text-2xl font-bold text-center">Hello, Tailwind CSS!</h1>
        <p className="text-gray-600 mt-2">
          Tailwind CSS is set up in this React project.
        </p>
      </div>
    </>
  );
};

export default LandingPage;
