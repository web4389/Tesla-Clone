import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Home = () => {
  document.title = "Tesla Clone";
  const [navstate, setnavstate] = useState({
    navtoggle: false,
    mainstate: false,
    vehicle: false,
  });
  const getdata = (data1, data2, data3) => {
    setnavstate({ navtoggle: data1, mainstate: data2, vehicle: data3 });
  };
  const [modelH, setmodelH] = useState({
    modelS: 0,
    modelY: 0,
    modelX: 0,
    cyberTruck: 0,
    accessories: 0,
  });
  useEffect(() => {
    setTimeout(() => {
      let modelSS = document.getElementById("model-y").clientHeight;
      let modelYS = document.getElementById("model-s").clientHeight;
      let modelXS = document.getElementById("model-x").clientHeight;
      let cyberTruck = document.getElementById("cyberTruck").clientHeight;
      let accessories = document.getElementById("accessories").clientHeight;
      let modelS = modelSS - 60;
      let modelY = modelYS - 40;
      let modelX = modelXS - 40;
      setmodelH({
        modelS: modelS + "px",
        modelY: modelY + "px",
        modelX: modelX + "px",
        cyberTruck: cyberTruck + "px",
        accessories: accessories + "px",
      });
    }, 2000);
  }, []);

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
      <div
        className={`${navstate.navtoggle ? "hidden" : ""} ${
          navstate.mainstate ? "blur-[5px]" : ""
        }
        ${navstate.navtoggle ? (navstate.vehicle ? "hidden" : "") : ""}`}
      >
        <div className="Model-y">
          <div id="model-y">
            <video
              autoPlay
              muted
              loop
              className="max-md:hidden"
              src="../assets/Images/home/Homepage-Model-Y.mp4"
            ></video>
            <video
              autoPlay
              muted
              loop
              className="md:hidden"
              src="../assets/Images/home/Homepage-Model-Y-Mobile.mp4"
            ></video>
          </div>
          <div className="">
            <div
              style={{ height: `${modelH.modelS}` }}
              className={`absolute top-[60px] text-white w-full justify-between items-center flex flex-col font-exo2`}
            >
              <div className="text-center pt-3">
                <h1 className="text-5xl py-[3px] max-mb5:text-4xl">Model Y</h1>
                <p className="text-[22px] max-mb5:text-[18px]">
                  Lease starting at $399/mo*
                </p>
              </div>
              <div className="text-center">
                <Link
                  to={"/inventory"}
                  className="bg-[#141414c9] py-[8px] text-md px-[85px] active:outline rounded-[5px] backdrop-blur-[5px]"
                >
                  Order Now
                </Link>
                <p className="text-sm pt-8 pb-[12px] px-4 max-mb5:pt-5 max-mb5:px-2 max-mb5:text-[13px]">
                  *Excludes taxes and fees with price subject to change.
                  Available in select states.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="Model-S">
          <div
            style={{ height: `${modelH.modelY}` }}
            className={`w-full justify-between items-center flex flex-col font-exo2 absolute mt-[40px]`}
          >
            <div className="text-center">
              <h1 className="text-5xl py-[3px] max-mb5:text-4xl text-[#171a20]">
                Model S
              </h1>
              <p className="text-[22px] max-mb5:text-[18px] text-[#171a20]">
                From $71,090*
              </p>
              <p className="text-sm text-[#1a1f28] max-mb5:text-[13px]">
                After Est. Gas Savings
              </p>
            </div>
            <div className="text-center ">
              <Link
                to={"/inventory"}
                className="bg-[#141414c9] text-white py-[8px] text-md px-[85px] active:outline hover:bg-[#141414da]
               rounded-[5px] backdrop-blur-[5px]"
              >
                Order Now
              </Link>
              <p className="text-sm pt-8 text-[#171a20] px-4 max-mb5:pt-5 max-mb5:px-2 max-mb5:text-[13px]">
                *Price before savings is $74,990, excluding taxes and fees.
                Subject to change.
              </p>
              <p className="text-sm text-[#171a20] pb-[12px] max-mb5:text-[13px]">
                Learn about est. gas savings.
              </p>
            </div>
          </div>

          <div id="model-s">
            <img
              src="../assets/Images/home/Homepage-Model-S.avif"
              className="max-md:hidden"
              alt="Modol S"
            />
            <img
              src="../assets/Images/home/Homepage-Model-S-Mobile.avif"
              className="md:hidden"
              alt="Modol S"
            />
          </div>
        </div>

        <div className="Model-X">
          <div
            style={{ height: `${modelH.modelX}` }}
            className={`w-full justify-between items-center flex flex-col font-exo2 absolute mt-[40px]`}
          >
            <div className="text-center">
              <h1 className="text-5xl py-[3px] max-mb5:text-4xl text-[#171a20]">
                Model X
              </h1>
              <p className="text-[22px] max-mb5:text-[18px] text-[#171a20]">
                From $68,590*
              </p>
              <p className="text-sm text-[#1a1f28] max-mb5:text-[13px]">
                After Federal Tax Credit & Est. Gas Savings
              </p>
            </div>
            <div className="text-center">
              <Link
                to={"/inventory"}
                className="bg-[#141414c9] text-white py-[8px] text-md px-[85px] active:outline hover:bg-[#141414da]
               rounded-[5px] backdrop-blur-[5px]"
              >
                Order Now
              </Link>
              <p className="text-sm pt-8 text-white px-4 max-mb5:pt-5 max-mb5:px-2 max-mb5:text-[13px]">
                *Price before incentives and savings is $79,990, excluding taxes
                and fees. Subject to change.
              </p>
              <p className="text-sm text-white pb-[12px] max-mb5:text-[13px]">
                Learn about est. gas savings.
              </p>
            </div>
          </div>

          <div id="model-x">
            <img
              src="../assets/Images/home/Homepage-Model-X.avif"
              className="max-md:hidden"
              alt="Modol X"
            />
            <img
              src="../assets/Images/home/Homepage-Model-X-Mobile.avif"
              className="md:hidden"
              alt="Modol X"
            />
          </div>
        </div>

        <div className="Cybertruck">
          <div
            style={{ height: `${modelH.cyberTruck}` }}
            className={`w-full justify-end items-center flex flex-col font-exo2 absolute`}
          >
            <Link
              to={"/inventory"}
              className="bg-[#d8dadc] text-[#46494d] py-[8px] text-md px-[90px] active:outline hover:bg-[#d8eadc]
               rounded-[5px] backdrop-blur-[5px] mb-[60px]"
            >
              Order Now
            </Link>
          </div>

          <div id="cyberTruck">
            <img
              src="/assets/Images/home/Homepage-Cybertruck.avif"
              className="max-md:hidden"
              alt="cyberTruck"
            />
            <img
              src="/assets/Images/home/Homepage-Cybertruck-Mobile.avif"
              className="md:hidden"
              alt="cyberTruck"
            />
          </div>
        </div>

        <div className="Accessories">
          <div
            style={{ height: `${modelH.modelY}` }}
            className={`w-full justify-between items-center flex flex-col font-exo2 absolute`}
          >
            <h1 className="text-5xl py-[3px] max-mb5:text-4xl text-[#171a20] mt-[45px]">
              Accessories
            </h1>
            <Link
              to={"/shop"}
              className="bg-white text-[#46494d] py-[8px] px-[90px] active:outline
               rounded-[5px] text-md backdrop-blur-[5px] mb-[25px]"
            >
              Shop Now
            </Link>
          </div>

          <div id="accessories">
            <img
              src="/assets/Images/home/Homepage-Accessories.avif"
              className="max-md:hidden"
              alt="Accessories"
            />
            <img
              src="/assets/Images/home/Homepage-Accessories-Mobile.avif"
              className="md:hidden"
              alt="Accessories"
            />
          </div>
        </div>

        <Footer bg="black" color="#cecece" />
      </div>
    </>
  );
};

export default Home;
