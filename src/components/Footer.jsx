import React from "react";
import {
  FaPhone,
  FaMap,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="background__footer w-full px-8 py-12 relative ">
      <div className="max-w-[1100px] mx-auto text-white z-10">
        <ul className="grid grid-cols-2 md:grid-cols-4">
          <div>
            <span className="font-semibold text-lg">Quick Link</span>
            <li className="mt-2">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Packages</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
          </div>
          <div>
            <span className="font-semibold text-lg">Extra Links</span>
            <li className="mt-2">
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">My Order</a>
            </li>
            <li>
              <a href="#">My Wishlist</a>
            </li>
            <li>
              <a href="#">Ask Questions</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </div>
          <div>
            <span className="font-semibold text-lg">Contact Info</span>
            <li className="flex items-center gap-1 mt-2">
              <FaPhone className="text-green text-base" />
              <a href="#" className="hover:translate-x-2 duration-150">
                +123-456-789
              </a>
            </li>
            <li className="flex items-center gap-1">
              <FaPhone className="text-green text-base" />
              <a href="#" className="hover:translate-x-2 duration-150">
                +789-456-123
              </a>
            </li>
            <li className="flex items-center gap-1">
              <MdEmail className="text-green text-base" />
              <a href="#" className="hover:translate-x-2 duration-150">
                matheus@hotmail.com
              </a>
            </li>
            <li className="flex items-center gap-1">
              <FaMap className="text-green text-base" />
              <a href="#" className="hover:translate-x-2 duration-150">
                Mumbai, India - 404598
              </a>
            </li>
          </div>
          <div>
            <span className="font-semibold text-lg">Follow Us</span>
            <li className="flex items-center gap-1 mt-2">
              <FaFacebookF className="text-green text-base" />
              <a href="#" className="hover:translate-x-2 duration-150">
                Facebook
              </a>
            </li>
            <li className="flex items-center gap-1">
              <FaTwitter className="text-green text-base" />
              <a href="#" className="hover:translate-x-2 duration-150">
                Twitter
              </a>
            </li>
            <li className="flex items-center gap-1">
              <FaInstagram className="text-green text-base" />
              <a href="#" className="hover:translate-x-2 duration-150">
                Instagram
              </a>
            </li>
            <li className="flex items-center gap-1">
              <FaLinkedin className="text-green text-base" />
              <a href="#" className="hover:translate-x-2 duration-150">
                Linkedin
              </a>
            </li>
            <li className="flex items-center gap-1">
              <FaGithub className="text-green text-base" />
              <a href="#" className="hover:translate-x-2 duration-150">
                Github
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
