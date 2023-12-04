import React from "react";
import "../Components/Navbar.css";
import Photo from "../assests/photo.jpg";
import Wedding from "../assests/Wedding.jpg";
import Family from "../assests/Fsamily.jpg";

const LandingPage = () => {
  return (
    <>
      <div class="">
        <div className="where">
          <h1>Where moments become timeless memories</h1>
          <div class=" pt-20 w-72 float-right md:w-[600px] md:pt-[30px]">
            <img src={Photo} alt="timeless" />
          </div>
        </div>
      </div>
      {/* About */}
      <div className="" id="about">
        <h2 class=" mt-[200px]  mb-[20px] text-[30px] pl-[20px] md:pl-[90px] md:mt-[500px] md:mb-[20px] ">
          About
        </h2>

        <h1 className=" pl-[20px] md:pl-[90px] text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semi-bold">
          I specialize in creating stunning visual stories through the lens.
          From weddings to family portraits, events to landscapes, every
          photograph I take encapsulates emotions, beauty, and unforgettable
          moments
        </h1>
      </div>

      {/* service */}
      <div class=" bg-black" id="service">
        <h2 class=" mt-[50px] text-[30px] pl-[20px] md:pl-[90px]  text-white pt-6">
          Service
        </h2>
        <div class="container mx-auto px-4 py-8 flex flex-col md:flex-row items-left">
          <div class="md:w-1/2 md:mr-4">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white -700 mb-[50px] md:mb-[550px]  ">
              Wedding
              <br></br>Photography
            </h1>
            <p class="text-lg md:text-xl text-white font-bold">
              Cherish the magic
              <br></br> of your special day
              <br></br> with beautifully captured<br></br>
              memories.
            </p>
          </div>
          <div class="md:w-1/2 mt-4 md:mt-0">
            <img
              class="w-full h-auto rounded-lg"
              src={Wedding}
              alt="Responsive Image"
            />
          </div>
        </div>
      </div>
      {/* family */}
      <div class="bg-brown" id="service">
        <div class="container mx-auto px-4 py-8">
          <div class="flex flex-col md:flex-row items-center justify-center">
            <div class="md:w-1/2 mt-4 md:mt-0">
              <img
                class="w-full h-auto rounded-lg"
                src={Family}
                alt="Responsive Image"
              />
            </div>

            <div class="md:w-1/2 md:mr-4 float-right">
              <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white -700 mb-[50px] md:mb-[550px]  ">
                Wedding
                <br></br>Photography
              </h1>
              <p class="text-lg md:text-xl text-white font-bold">
                Cherish the magic
                <br></br> of your special day
                <br></br> with beautifully captured<br></br>
                memories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
