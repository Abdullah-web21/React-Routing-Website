import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`flex justify-center items- gap-35 items-center
      p-4 z-10  sticky top-0 duration-300 ${
        isScrolled ? "bg-black " : "bg-transparent"
      }`}
      >
        <Link to="/" className="inline-block">
          <img
            src="https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/elementor/thumbs/logo_3DStudioz-q0v8m4bjd2671owevdg628b763xytk4ofjyb4y6u4g.png"
            alt="Home"
            className="w-50 h-auto "
          />
        </Link>

        <div className="flex gap-10  text-white text-[16px] font-semibold">
          <Link
            className="hover:text-[#5b8ee2] transition duration-300"
            to="/home"
          >
            Home
          </Link>
          <Link
            className="hover:text-[#5b8ee2] transition duration-300"
            to="/service"
          >
            Services
          </Link>
          <Link
            className="hover:text-[#5b8ee2] transition duration-300"
            to="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="hover:text-[#5b8ee2] transition duration-300"
            to="/team"
          >
            Team
          </Link>
          <Link
            className="hover:text-[#5b8ee2] transition duration-300"
            to="/about"
          >
            About us
          </Link>

          <Link
            className="hover:text-[#5b8ee2] transition duration-300"
            to="/contact"
          >
            Contact us
          </Link>

        </div>
        <div>
          <Button
            variant="text"
            onClick={() => navigate("/contact")}
            sx={{
              backgroundColor: "#205cd4",
              color: "white",
              letterSpacing: "2px",
              fontSize: "12px",
              fontWeight: "500",
              padding: "8px 25px",
            }}
          >
            GET STARTED
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
