import React from "react";
import "../Components/Navbar.css";
import Photo from "../assests/photo.jpg";
import Wedding from "../assests/Wedding.jpg";
import Family from "../assests/Fsamily.jpg";
import Landscape from "../assests/Landspcape.jpg";
import Passion from "../assests/Passion.jpg";

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
        <h2 class=" mt-[200px]  mb-[20px] text-[30px] pl-[20px] md:pl-[90px] md:mt-[500px] md:mb-[10px] ">
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
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white -700 mb-[10px] md:mb-[550px]  ">
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
      <div class="bg-brown">
        <div class="container mx-auto px-4 py-8">
          <div class="flex flex-col md:flex-row justify-end">
            <div class="md:w-1/2 mt-4 md:mt-0">
              <img
                class="w-full h-auto rounded-lg "
                src={Family}
                alt="Responsive Image"
              />
            </div>

            <div class="md:w-1/2 flex flex-col items-left text-white mt-4 md:mt-0 order-1 md:order-2 ">
              <p class="text-3xl md:text-4xl lg:text-5xl font-bold text-white -700 mb-[10px] md:mb-[550px]  text-right">
                Family <br></br> Portraits
              </p>
              <p class="text-lg md:text-xl text-white font-bold text-right">
                Freeze moments in
                <br></br>time with heart-
                <br></br>warming family photos.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* landscape */}
      <div class="bg-green">
        <div class="container mx-auto px-4 py-8 flex flex-col md:flex-row items-left">
          <div class="md:w-1/2 md:mr-4">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white -700 mb-[50px] md:mb-[550px]  ">
              Landscape<br></br> Photography
            </h1>
            <p class="text-lg md:text-xl text-white font-bold">
              Discover the beauty
              <br></br> of nature through
              <br></br>captivating landscapes.
            </p>
          </div>
          <div class="md:w-1/2 mt-4 md:mt-0">
            <img
              class="w-full h-auto rounded-lg"
              src={Landscape}
              alt="Responsive Image"
            />
          </div>
        </div>
      </div>
      {/* events */}
      <div className="bo">
        <div class="container mx-auto px-4 py-8">
          <div class="flex flex-col md:flex-row ">
            <div class="md:w-1/2 flex justify-center">
              <img
                class="w-full h-auto rounded-lg"
                src={Wedding}
                alt="Placeholder Image"
              />
            </div>

            <div class="md:w-1/2 flex flex-col items-left text-white mt-4 md:mt-0 order-1 md:order-2 ">
              <p class="text-3xl md:text-4xl lg:text-5xl font-bold text-white -700 mb-[10px] md:mb-[550px]  text-right">
                Event<br></br> Coverage
              </p>
              <p class="text-lg md:text-xl text-white font-bold text-right">
                Document your events<br></br> and celebrations with<br></br>{" "}
                style and professionalism.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* why choose us */}
      <div className="" id="why">
        <h2 class=" text-[30px] pl-[20px] md:pl-[90px]  text-black">
          Why Choose Us
        </h2>
        <div class="container mx-auto px-4 py-8">
          <div class="flex flex-col md:flex-row justify-between">
            <div class="w-full md:w-1/3 h-[600px] bg-blue-200 p-4 flex flex-col items-center justify-center ">
              <img
                class="w-full"
                src="https://via.placeholder.com/500x500"
                alt="Image 1"
              ></img>
              {/* <img src={Passion} /> */}
              <p>Rectangle 1</p>
              <div class="bg-blue-500 h-24 w-24 mt-4 flex items-center justify-center">
                <div class="bg-white h-16 w-16 rounded-full"></div>
              </div>
            </div>
            <div class="hidden md:block w-4"></div>
            <div class="w-full md:w-1/3 h-[600px] bg-slate-500 bg-green-200 p-4 flex flex-col items-center justify-center  mt-4 md:mt-0">
              <p>Rectangle 2</p>
              <div class="bg-green-500 h-24 w-24 mt-4 flex items-center justify-center">
                <div class="bg-white h-16 w-16 rounded-full"></div>
              </div>
            </div>
            <div class="hidden md:block w-4"></div>
            <div class="w-full md:w-1/3 h-[600px] bg-yellow-200 p-4 flex flex-col items-center justify-center mt-4 md:mt-0">
              <p>Rectangle 3</p>
              <div class="bg-yellow-500 h-24 w-24 mt-4 flex items-center justify-center">
                <div class="bg-white h-16 w-16 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
