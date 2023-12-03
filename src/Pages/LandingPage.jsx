import React from "react";
import "../Components/Navbar.css";
import Photo from "../assests/photo.jpg";

const LandingPage = () => {
  return (
    <>
      <div class="relative">
        <div className="where">
          <h1>Where moments become timeless memories</h1>
          <div class="">
            <img
              style={{
                width: "600px",
                paddingTop: "80px",
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
      <div className="">
        <h2 class=" mt-[500px] text-[30px] pl-[20px] md:pl-[90px] ">About</h2>

        <h1 className="  pl-[20px] md:pl-[90px] text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semi-bold">
          I specialize in creating stunning visual stories through the lens.
          From weddings to family portraits, events to landscapes, every
          photograph I take encapsulates emotions, beauty, and unforgettable
          moments
        </h1>
      </div>
    </>
  );
};

export default LandingPage;
