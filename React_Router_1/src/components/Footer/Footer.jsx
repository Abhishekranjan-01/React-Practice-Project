import { Link } from "react-router-dom";
import { PiCopyrightLight } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full sm:w-11/12 mx-auto mt-10 max-sm:gap-4">
      <section className="flex flex-col sm:flex-row items-center justify-between py-4 sm:py-10 border-t border-gray-300 ">
        <section>
          <img
            className="w-[120px] sm:w-[180px]"
            src="	https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
            alt="Hero_Home_Img_1"
          />
        </section>
        <section className="flex flex-col max-sm:items-center max-sm:gap-8 sm:flex-row sm:justify-between w-full sm:w-1/2 text-gray-700 font-semibold text-center">
          <ul className="flex flex-col gap-5  w-fit">
            <li className="text-black">Resources</li>
            <li>
              <Link className="hover:border-b border-gray-500" to={"/Home"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:border-b border-gray-500" to={"/About"}>
                About
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-5">
            <li className="text-black">FOLLOW US</li>
            <li>
              <Link className="hover:border-b border-gray-500" to={"/Github"}>
                Github
              </Link>
            </li>
            <li>
              <Link className="hover:border-b border-gray-500" to={"/Github"}>
                Discord
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-5">
            <li className="text-black">LEGAL</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </section>
      </section>
      <section className="flex flex-col sm:flex-row justify-between py-2 sm:py-7 mb-2 sm:mb-10 max-sm:gap-2 border-y border-gray-300 ">
        <blockquote className="flex flex-row max-sm:justify-center items-center max-sm:text-center text-gray-600 text-sm">
          <PiCopyrightLight />{" "}
          <p className="text-center">AbhishekRanjan. All Rights Reserved.</p>
        </blockquote>
        <div className="flex flex-row justify-center gap-2 text-gray-600 ">
          <FaFacebookF />
          <FaDiscord />
          <FaTwitter />
          <FaGithub />
          <FaLinkedin />
        </div>
      </section>
    </footer>
  );
}
