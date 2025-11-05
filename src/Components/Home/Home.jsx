import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        className="bg-[url('https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/2023/01/bg_img.jpg')] bg-center h-auto bg-cover bg-no-repeat
        relative"
      >
        <div className="flex flex-col justify-center  align-middle text-white items-center h-100">
          <div className="text-[49px] w-200 flex justify-center text-center font-bold mt-100 mb-4 leading-tight">
            Engaging you with Creative Design
          </div>
          <div className="text-[20px] w-170 flex justify-center text-center mb-4 font-light leading-[26px] ">
            Massa tellus suspendisse montes enim magnis nascetur dui in volutpat
            adipiscing urna
          </div>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#205cd4",
              color: "white",
              fontSize: "12px",
              lineHeight: "12px",
              fontWeight: "500",
              padding: "20px 40px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            DISCOVER MORE
          </Button>
        </div>
        <div className="flex flex-wrap flex-row justify-center gap-5 mt-60 pb-20">
          <div className="max-w-sm px-6 py-8 bg-[#323437]  rounded-lg shadow-sm flex flex-col justify-center items-center text-center text-white   ">
            <div className="text-[20px] bg-white text-[#5b8ee2] py-3.5 px-5 rounded-[5px] mt-7 mb-3">
              <i className="fa-solid fa-cube"></i>
            </div>

            <Link to="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">
                3D Modeling
              </h5>
            </Link>
            <div>
              <p className="inline-block px-4">
                In felis mauris penatibus ullamcorper
              </p>
              <br />
              <p className="inline-block px-2">
                senectus ad nibh sed habitant suspendisse
              </p>
            </div>
          </div>
          <div
            className="max-w-sm px-6 py-8 bg-[url('https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/2023/01/Pattern_img.png')] bg-center bg-cover bg-no-repeat bg-[#205cd4]
            border  rounded-lg shadow-sm   flex flex-col justify-center items-center text-center "
          >
            <div className="text-[20px] bg-white text-[#5b8ee2] py-3.5 px-5 rounded-[5px] mt-7 mb-3">
              <i className="fa-solid fa-cube"></i>
            </div>

            <Link to="/">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white ">
                3D Animation
              </h5>
            </Link>
            <div>
              <p className="inline-block px-4 text-white">
                In felis mauris penatibus ullamcorper
              </p>
              <br />
              <p className="inline-block px-2 text-white">
                senectus ad nibh sed habitant suspendisse
              </p>
            </div>
          </div>
          <div className="max-w-sm px-6 py-8 bg-[#323437]  rounded-lg shadow-sm flex flex-col justify-center items-center text-center text-white   ">
            <div className="text-[20px] bg-white text-[#5b8ee2] py-3.5 px-5 rounded-[5px] mt-7 mb-3">
              <i className="fa-solid fa-cube"></i>
            </div>

            <Link to="/">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                3D NFT
              </h5>
            </Link>
            <div>
              <p className="inline-block px-4">
                In felis mauris penatibus ullamcorper
              </p>
              <br />
              <p className="inline-block px-2">
                senectus ad nibh sed habitant suspendisse
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
