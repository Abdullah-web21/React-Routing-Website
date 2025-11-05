import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Button } from "@mui/material";

export default function Contact() {
  return (
    <>
      <div className="relative h-90 bg-[url('https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/2023/01/3d-black-icosahedron-and-asymmetric-hexagonal-bipyramid-patterned-background.jpg')] bg-no-repeat bg-cover bg-right">
        <div className="absolute inset-0 bg-[#242426]/85"></div>

        <div className=" z-1 text-4xl text-white font-bold left-25 bottom-30 absolute">
          <p>CONTACT US</p>
          <p className="text-[20px] font-light mt-4">
            Get in touch and let us know how we can help.
          </p>
        </div>

        <div className="absolute right-10 -bottom-25 z-1">
          <img
            src="https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/2023/01/1.png"
            alt=""
            className="w-64 h-auto"
          />
        </div>
      </div>
      <section className="flex bg-black text-gray-100 gap-30 ">
        <div className="rounded-2xl p-10 md:p-16 mt-20 ml-20 mb-20 mr-2 bg-[#2c2f33]">
          <h2 className="text-3xl font-bold mb-4">Send us a message</h2>
          <p className="text-gray-400 mb-8 max-w-lg text-m">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <form>
            <div className="grid grid-cols-2 gap-4 text-m">
              <div>
                <label className="block font-semibold mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-[#3a3d41] text-gray-200 px-4 py-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Company</label>
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full bg-[#3a3d41] text-gray-200 px-4 py-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1 mt-2">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#3a3d41] text-gray-200 px-4 py-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 mt-2">Message</label>
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full bg-[#3a3d41] text-gray-200 px-4 py-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#205cd4",
                color: "white",
                fontSize: "12px",
                lineHeight: "12px",
                fontWeight: "500",
                padding: "15px 25px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Send Message
            </Button>
          </form>
        </div>

        <div className="bg-black  mt-40 mr-20 mb-20 ml-2 ">
          <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
          <p className="text-gray-400 mb-8 max-w-lg text-m">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600/20 text-blue-500 p-3 rounded-lg">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-white">HEAD OFFICE</h4>
                <p className="text-gray-400 text-m">
                  Jln Cempaka Wangi No 22
                  <br />
                  Jakarta - Indonesia
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600/20 text-blue-500 p-3 rounded-lg">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-white">EMAIL US</h4>
                <p className="text-gray-400 text-m">
                  support@yourdomain.tld
                  <br />
                  hello@yourdomain.tld
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600/20 text-blue-500 p-3 rounded-lg">
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-white text-l">CALL US</h4>
                <p className="text-gray-400 text-m">
                  +6221.2002.2012
                  <br />
                  +6221.2002.2013 (Fax)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
