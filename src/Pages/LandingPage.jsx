import React from 'react';
import '../Components/Navbar.css';
import Photo from '../assests/photo.jpg';
import Wedding from '../assests/Wedding.jpg';
import Family from '../assests/Fsamily.jpg';
import Landscape from '../assests/Landspcape.jpg';
import Passion from '../assests/Passion.jpg';
import Per from '../assests/Personalized.jpg';
import Pro from '../assests/Professiom.jpg';

const LandingPage = () => {
  return (
    <>
      {/* LandingPage */}
      <div>
        <div
          data-aos='zoom-out-up'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
          className='where'
        >
          <h1>Where moments become timeless memories</h1>
          <div class=' pt-20 w-72 float-right md:w-[600px] md:pt-[30px]'>
            <img src={Photo} alt='timeless' />
          </div>
        </div>
      </div>
      {/* About */}
      <div
        data-aos='fade-up-right'
        data-aos-easing='ease-out-cubic'
        data-aos-duration='2000'
        className=''
        id='about'
      >
        <h2 class=' mt-[200px]  mb-[20px] text-[30px] ml-[20px] md:ml-[90px] md:mt-[500px] md:mb-[10px] border-b  mr-[1270px] border-black'>
          About
        </h2>

        <h1 className=' pl-[20px] md:pl-[90px] text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semi-bold'>
          I specialize in creating stunning visual stories through the lens.
          From weddings to family portraits, events to landscapes, every
          photograph I take encapsulates emotions, beauty, and unforgettable
          moments
        </h1>
      </div>

      {/* service */}
      <div class=' bg-black' id='service'>
        <h2 class=' mt-[50px] text-[30px] ml-[20px] md:ml-[90px] text-white pt-6 border-b mr-[1260px] border-white'>
          Service
        </h2>
        <div
          data-aos='fade-right'
          data-aos-offset='300'
          data-aos-easing='ease-in-sine'
          data-aos-duration='2000'
          class='container mx-auto px-4 py-8 flex flex-col md:flex-row items-left'
        >
          <div class='md:w-1/2 md:mr-4'>
            <h1 class='text-3xl md:text-4xl lg:text-5xl font-bold text-white -700 mb-[10px] md:mb-[550px]  '>
              Wedding
              <br></br>Photography
            </h1>
            <p class='text-lg md:text-xl text-white font-bold'>
              Cherish the magic
              <br></br> of your special day
              <br></br> with beautifully captured<br></br>
              memories.
            </p>
          </div>
          <div
            data-aos='fade-left'
            data-aos-offset='300'
            data-aos-easing='ease-in-sine'
            data-aos-duration='2000'
            class='md:w-1/2 mt-4 md:mt-0'
          >
            <img
              class='w-full h-auto rounded-lg'
              src={Wedding}
              alt='Responsive Image'
            />
          </div>
        </div>
      </div>
      {/* family */}
      <div class='bg-brown'>
        <div class='container mx-auto px-4 py-8'>
          <div class='flex flex-col md:flex-row justify-end'>
            <div
              data-aos='fade-right'
              data-aos-easing='ease-in-sine'
              data-aos-duration='2000'
              class='md:w-1/2 mt-4 md:mt-0'
            >
              <img
                class='w-full h-auto rounded-lg '
                src={Family}
                alt='Resp onsive Image'
              />
            </div>

            <div
              // data-aos="fade-left"
              // data-aos-easing="ease-in-sine"
              // data-aos-duration="2000"
              class='md:w-1/2 flex flex-col items-left text-white mt-4 md:mt-0 order-1 md:order-2 '
            >
              <p class='text-3xl md:text-4xl lg:text-5xl font-bold text-white -700 mb-[10px] md:mb-[550px]  text-right'>
                Family <br></br> Portraits
              </p>
              <p class='text-lg md:text-xl text-white font-bold text-right'>
                Freeze moments in
                <br></br>time with heart-
                <br></br>warming family photos.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* landscape */}
      <div class='bg-green'>
        <div class='container mx-auto px-4 py-8 flex flex-col md:flex-row items-left'>
          <div
            data-aos='fade-right'
            data-aos-offset='300'
            data-aos-easing='ease-in-sine'
            data-aos-duration='2000'
            class='md:w-1/2 md:mr-4'
          >
            <h1 class='text-3xl md:text-4xl lg:text-5xl font-bold text-white -700 mb-[50px] md:mb-[550px]  '>
              Landscape<br></br> Photography
            </h1>
            <p class='text-lg md:text-xl text-white font-bold'>
              Discover the beauty
              <br></br> of nature through
              <br></br>captivating landscapes.
            </p>
          </div>
          <div
            // data-aos="fade-left"
            // data-aos-offset="300"
            // data-aos-easing="ease-in-sine"
            // data-aos-duration="2000"
            class='md:w-1/2 mt-4 md:mt-0'
          >
            <img
              class='w-full h-auto rounded-lg'
              src={Landscape}
              alt='Responsive Image'
            />
          </div>
        </div>
      </div>
      {/* events */}
      <div className='bo'>
        <div class='container mx-auto px-4 py-8'>
          <div class='flex flex-col md:flex-row '>
            <div
              data-aos='fade-right'
              data-aos-offset='300'
              data-aos-easing='ease-in-sine'
              data-aos-duration='2000'
              class='md:w-1/2 flex justify-center'
            >
              <img
                class='w-full h-auto rounded-lg'
                src={Wedding}
                alt='Placeholder Image'
              />
            </div>

            <div
              // data-aos="fade-left"
              // data-aos-offset="300"
              // data-aos-easing="ease-in-sine"
              // data-aos-duration="2000"
              class='md:w-1/2 flex flex-col items-left text-white mt-4 md:mt-0 order-1 md:order-2 '
            >
              <p class='text-3xl md:text-4xl lg:text-5xl font-bold text-white -700 mb-[10px] md:mb-[550px]  text-right'>
                Event<br></br> Coverage
              </p>
              <p class='text-lg md:text-xl text-white font-bold text-right'>
                Document your events<br></br> and celebrations with<br></br>{' '}
                style and professionalism.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* why choose us */}
      <div className='' id='why'>
        <h2 class=' text-[30px] ml-[20px] md:ml-[90px]  text-black border-b mr-[1115px] border-black'>
          Why Choose Us
        </h2>

        <div class='container mx-auto px-4 py-8'>
          <div class='flex flex-col md:flex-row justify-between'>
            <div
              data-aos='flip-left'
              data-aos-easing='ease-out-cubic'
              data-aos-duration='2000'
              class='w-full md:w-1/3 mb-4 md:mb-0 mr-0 md:mr-4'
            >
              <div class=' relative rounded-l-lg overflow-hidden shadow-lg'>
                <img class='w-full' src={Passion} alt='Image 1' />
                <div class='absolute inset-0 flex  text-white  flex-col'>
                  <p className='mt-24  pl-11 text-black font-medium text-3xl'>
                    Passion for<br></br>Perfection
                  </p>
                  <div className=' rounded-r-lg px-7 py-3 text-white mt-[300px] md:mt-[450px] pl-11 bg-peach  mr-28'>
                    I am dedicated to delivering high-quality, artistic, and
                    authentic photographs that exceed your expectations.
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos='flip-left'
              data-aos-easing='ease-out-cubic'
              data-aos-duration='2000'
              class='w-full md:w-1/3 mb-4 md:mb-0 mr-0 md:mr-4'
            >
              <div class=' relative rounded-l-lg overflow-hidden shadow-lg'>
                <img class='w-full' src={Per} alt='Image 1' />
                <div class='absolute inset-0 flex  text-white  flex-col'>
                  <p className='mt-24  pl-11 text-black font-medium text-3xl'>
                    Personalized <br></br> Approach
                  </p>
                  <div className=' rounded-r-lg px-11 py-3 text-black mt-[300px] md:mt-[450px] pl-11 bg-per  mr-28'>
                    Each session is tailored to reflect your unique story and
                    style.
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos='flip-left'
              data-aos-easing='ease-out-cubic'
              data-aos-duration='2000'
              class='w-full md:w-1/3 mb-4 md:mb-0 mr-0 md:mr-4'
            >
              <div class=' relative rounded-l-lg overflow-hidden shadow-lg'>
                <img class='w-full' src={Pro} alt='Image 1' />
                <div class='absolute inset-0 flex  text-white  flex-col'>
                  <p className='mt-24  pl-11 text-black font-medium text-3xl'>
                    Professionalism & <br></br> Reliability
                  </p>
                  <div className=' rounded-r-lg px-11 py-3 text-black mt-[300px] md:mt-[450px] pl-11 bg-grey  mr-28'>
                    Rest assured, I will be there to capture your moments with
                    professionalism and a keen eye for detail.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact */}
      <div
        // data-aos="fade-right"
        // data-aos-offset="300"
        // data-aos-easing="ease-in-sine"
        // data-aos-duration="2000"
        class='border-t border-black font-bold h-{4] '
        id='contact'
      ></div>
      <div
        data-aos='fade-down'
        data-aos-offset='300'
        data-aos-easing='ease-in-sine'
        data-aos-duration='2000'
        class='container mx-auto px-4 py-8'
      >
        <div class='flex flex-col md:flex-row  justify-between'>
          <div class=' mb-4 md:mb-0 md:mr-4'>
            <p class='text-lg md:text-xl font-bold'>Let’s work together.</p>
          </div>

          <div
            data-aos='fade-down'
            data-aos-offset='300'
            data-aos-easing='ease-in-sine'
            data-aos-duration='2000'
            class=''
          >
            <p class='text-lg md:text-xl font-bold'>
              Brand Identity / Brand Strategy / Illustration/ <br></br>Art
              Direction / Photography & Video / <br></br>Website Design /
              Packaging / Social Media /<br></br>
              Branded Interiors / Naming
            </p>
          </div>
        </div>
      </div>

      <div
        data-aos='fade-up'
        data-aos-duration='2000'
        class='container mx-auto px-4 py-8 font-bold text-lg'
      >
        <div class='flex flex-col md:flex-row  justify-between'>
          <div class='w-full md:w-1/2 flex flex-col mx-2 my-4 p-'>
            <a
              href='https://example.com/link1'
              id='home'
              class=' border-b mb-2'
            >
              Home{' '}
              <span href='https://example.com/link2' class='border-b mb-2'>
                /About
              </span>
              <spam id='services'>/Services</spam>
            </a>

            <a href='https://example.com/link1' class=' border-b mb-2'>
              Why Choose Us
              <span href='https://example.com/link2' class='border-b mb-2'>
                /Contact
              </span>
            </a>
          </div>

          <div class='w-full md:w-1/2 flex flex-col md:items-end items-start  mx-2 my-4 '>
            <a href='https://example.com/linkA' class='block mb-2'>
              Oladeniifeoluwa123@gmai.com
            </a>
            <a href='https://example.com/linkB' class='block mb-2'>
              Behance <span>Instagram</span>
              <span> Dribble</span>
            </a>
          </div>
        </div>
      </div>
      <div data-aos='fade-up' data-aos-duration='2000'>
        <h2 class='  mb-[20px] text-[15px] font-bold ml-[20px] md:ml-[90px] '>
          ShutterVerse Creations
        </h2>
      </div>
    </>
  );
};

export default LandingPage;
