import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Footer() {


  return (
    <footer className="bg-[#121111] h-auto text-gray-300 py-10 px-6 border-t border-[#5b8ee2]">
      <div className="max-w-7xl mx-auto flex justify-center flex-row gap-20 ">
        <div className="flex-2">
                  <Link to="/" className="inline-block">
                    <img
                      src="https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/elementor/thumbs/logo_3DStudioz-q0v8m4bjd2671owevdg628b763xytk4ofjyb4y6u4g.png"
                      alt="Home"
                      className="w-50 h-auto "
                    />
                  </Link>
   
          <p className="text-m mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div className="flex space-x-4">
            <Link
              to="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded text-white hover:bg-blue-600 transition"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded text-white hover:bg-fuchsia-900 transition"
            >
              <FaInstagram />
            </Link>
            <Link
              to="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded text-white hover:bg-sky-400 transition"
            >
              <FaTwitter />
            </Link>
            <Link
              to="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded text-white hover:bg-red-600 transition"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-m">
            <li>
              <Link to="/service" className="hover:text-[#5b8ee2]">
                3D Modeling
              </Link>
            </li>
            <li>
              <Link to="/service" className="hover:text-[#5b8ee2]">
                Animation
              </Link>
            </li>
            <li>
              <Link to="/service" className="hover:text-[#5b8ee2]">
                NFT Art
              </Link>
            </li>
            <li>
              <Link to="/service" className="hover:text-[#5b8ee2]">
                AR/VR Modeling
              </Link>
            </li>
            <li>
              <Link to="/service" className="hover:text-[#5b8ee2]">
                Product Mockup
              </Link>
            </li>
            <li>
              <Link to="/service" className="hover:text-[#5b8ee2]">
                Architectural Animation
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-m">
            <li>
              <Link to="#" className="hover:text-[#5b8ee2]">
                Ticket Support
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-[#5b8ee2]">
                Customer Service
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-[#5b8ee2]">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#5b8ee2]">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-m">
            <li>
              <Link to="#" className="hover:text-[#5b8ee2]">
                About us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-[#5b8ee2]">
                Leadership
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-[#5b8ee2]">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-[#5b8ee2]">
                Article & News
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-[#5b8ee2]">
                Legal Notice
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <p>
          Copyright © 2023 3DStudioz. All rights reserved. Powered by{" "}
          <span className="text-gray-300 hover:text-white">MoxCreative</span>.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="#" className="hover:text-[#5b8ee2]">
            Term of services
          </Link>
          <Link to="#" className="hover:text-[#5b8ee2]">
            Privacy Policy
          </Link>
          <Link to="#" className="hover:text-[#5b8ee2]">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
