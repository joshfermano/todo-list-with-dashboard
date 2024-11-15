import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className="text-white font-poppins flex flex-col items-center justify-center space-y-2">
        <h1>Josh Khovick Fermano &copy; 2024</h1>
        <div>
          <ul className="flex flex-row space-x-3 text-xl">
            <li>
              <a href="https://www.facebook.com/joshkhovick/">
                <FaFacebook className="hover:scale-95 transition duration-500" />
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/joshfermano_/">
                <FaInstagram className="hover:scale-95 transition duration-500" />
              </a>
            </li>

            <li>
              <a href="https://github.com/joshfermano">
                <FaGithub className="hover:scale-95 transition duration-500" />
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/joshfermano/">
                <FaLinkedin className="hover:scale-95 transition duration-500" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
