import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";
import "aos/dist/aos.css";
import AOS from "aos";

const Navbar = () => {
  //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  const ScrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <div className="header">
        <nav className="navbar">
          <Link
            to="/"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="logo"
          >
            <h1 alt="Logo" onClick={ScrollToTop}>
              ShutterVerse Creations
            </h1>
          </Link>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={30} style={{ color: "#ffffff" }} />
            ) : (
              <FaBars size={30} style={{ color: "#ffffff" }} />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li> */}
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                ABOUT ME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="service"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                SERVICES
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onClick={closeMenu}
              >
                CONTACT
              </Link>
            </li>
          </ul>

          <div class="flex items-center gap-4 pr-5">
            <a
              href="#"
              target="_blank"
              rel="noopener"
              class="text-white hover:text-gray-300 transition duration-300"
            ></a>

            <a
              href="#"
              target="_blank"
              rel="noopener"
              class="text-white hover:text-gray-300 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7.443 5.35c.639 0 1.23.05 1.77.198c.541.099.984.297 1.377.544c.394.248.689.594.885 1.039c.197.445.296.99.296 1.583c0 .693-.148 1.286-.492 1.731c-.295.446-.787.841-1.377 1.138c.836.248 1.475.693 1.869 1.287c.393.593.639 1.335.639 2.176c0 .693-.148 1.286-.394 1.781c-.245.495-.639.94-1.082 1.237a5.08 5.08 0 0 1-1.573.692c-.59.149-1.18.248-1.77.248H1V5.35h6.443Zm-.394 5.54c.541 0 .984-.148 1.328-.395c.344-.247.492-.693.492-1.237c0-.297-.05-.593-.148-.791c-.098-.198-.246-.347-.442-.495c-.197-.099-.394-.198-.64-.247c-.246-.05-.491-.05-.787-.05H4v3.216h3.05Zm.148 5.838c.295 0 .59-.05.836-.099c.246-.05.492-.148.688-.297a1.76 1.76 0 0 0 .492-.544c.098-.247.197-.544.197-.89c0-.693-.197-1.187-.59-1.534c-.394-.297-.935-.445-1.574-.445H4v3.81h3.197Zm9.492-.05c.393.396.983.594 1.77.594c.541 0 1.033-.148 1.426-.395c.394-.297.64-.594.738-.89h2.41c-.394 1.186-.984 2.027-1.77 2.572c-.788.494-1.722.791-2.853.791a5.751 5.751 0 0 1-2.115-.396a3.928 3.928 0 0 1-1.574-1.088a3.93 3.93 0 0 1-.983-1.633c-.246-.643-.345-1.335-.345-2.127c0-.742.099-1.434.345-2.078a5.34 5.34 0 0 1 1.033-1.681a4.985 4.985 0 0 1 1.573-1.089a5.49 5.49 0 0 1 2.066-.396c.836 0 1.574.149 2.213.495c.64.346 1.131.742 1.524 1.336c.394.544.69 1.187.886 1.88c.098.692.147 1.385.098 2.176H16c0 .792.295 1.534.689 1.93Zm3.098-5.194c-.344-.346-.885-.544-1.525-.544c-.442 0-.787.1-1.082.248c-.295.148-.491.346-.688.544a1.323 1.323 0 0 0-.344.692c-.05.248-.099.446-.099.643h4.426c-.098-.742-.344-1.236-.688-1.583ZM15.459 6.29h5.508v1.336H15.46V6.29Z"
                />
              </svg>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener"
              class="text-white hover:text-gray-300 transition duration-300"
            >
              <svg
                class="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32Z"
                />
                <path
                  fill="currentColor"
                  d="M377.33 162.67a28 28 0 1 1 28-28a27.94 27.94 0 0 1-28 28ZM256 181.33A74.67 74.67 0 1 1 181.33 256A74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112a112 112 0 0 0-112-112Z"
                />
              </svg>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener"
              class="text-white hover:text-gray-300 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M9.04 21.54c.96.29 1.93.46 2.96.46a10 10 0 0 0 10-10A10 10 0 0 0 12 2A10 10 0 0 0 2 12c0 4.25 2.67 7.9 6.44 9.34c-.09-.78-.18-2.07 0-2.96l1.15-4.94s-.29-.58-.29-1.5c0-1.38.86-2.41 1.84-2.41c.86 0 1.26.63 1.26 1.44c0 .86-.57 2.09-.86 3.27c-.17.98.52 1.84 1.52 1.84c1.78 0 3.16-1.9 3.16-4.58c0-2.4-1.72-4.04-4.19-4.04c-2.82 0-4.48 2.1-4.48 4.31c0 .86.28 1.73.74 2.3c.09.06.09.14.06.29l-.29 1.09c0 .17-.11.23-.28.11c-1.28-.56-2.02-2.38-2.02-3.85c0-3.16 2.24-6.03 6.56-6.03c3.44 0 6.12 2.47 6.12 5.75c0 3.44-2.13 6.2-5.18 6.2c-.97 0-1.92-.52-2.26-1.13l-.67 2.37c-.23.86-.86 2.01-1.29 2.7v-.03Z"
                />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
