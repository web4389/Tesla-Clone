import { React, useState } from "react";
import { Navbar } from "../Navbar";
import { Link } from "react-router-dom";

const Charging = () => {
  const [navstate, setnavstate] = useState({
    navtoggle: false,
    mainstate: false,
    vehicle: false,
  });
  const getdata = (data1, data2, data3) => {
    setnavstate({ navtoggle: data1, mainstate: data2, vehicle: data3 });
  };
  document.title = "Charging";
  return (
    <>
      <Navbar
        data={getdata}
        textone="black"
        texttwo="white"
        searchone="black"
        searchtwo="white"
        logoone="-black"
        logotwo=""
      />
      <section
        className={`${navstate.navtoggle ? "hidden" : ""} ${
          navstate.mainstate ? "blur-[5px]" : ""
        }
        ${navstate.navtoggle ? (navstate.vehicle ? "hidden" : "") : ""}`}
      >
        <header id="sec1" className="h-[100vh] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="w-[100%] h-[100vh] max-md:hidden object-cover"
            src="../src/assets/Images/Charging/Main-Hero-Desktop.mp4"
          ></video>
          <video
            autoPlay
            muted
            loop
            className="max-mb5:hidden md:hidden"
            src="../src/assets/Images/Charging/Main-Hero-Tablet.mp4"
          ></video>
          <video
            autoPlay
            muted
            loop
            className="mb5:hidden"
            src="../src/assets/Images/Charging/Main-Hero-Mobile.mp4"
          ></video>
        </header>
        <aside className="text-white absolute text-center h-[75%] w-[100%] flex flex-col top-[14.5%] font-exo2 justify-between items-center">
          <header>
            <h1 className="text-5xl py-[4px] font-semibold">Charging</h1>
            <h1 className="py-[4px] font-semibold">
              Go Anywhere, Charge Everywhere
            </h1>
          </header>
          <footer>
            <Link
              to={"/shop"}
              className="bg-white text-[#46494d] py-[8px] px-[90px] active:outline
               rounded-[5px] text-md backdrop-blur-[5px] mb-[25px]"
            >
              Shop Now
            </Link>
          </footer>
        </aside>
      </section>
    </>
  );
};

export default Charging;
