import { React, useState, useEffect } from "react";
import { Navbar } from "../../Navbar";
import Footer from "../../Footer";
import { Link } from "react-router-dom";

const ModelS = () => {
  const [navstate, setnavstate] = useState({
    navtoggle: false,
    mainstate: false,
    vehicle: false,
  });
  const getdata = (data1, data2, data3) => {
    setnavstate({ navtoggle: data1, mainstate: data2, vehicle: data3 });
  };
  const [sectionH, setsectionH] = useState({ sec1: 0, sec5: 0 });
  const [section3crousels, setsection3crousels] = useState({
    one: true,
    two: false,
    three: false,
    four: false,
    five: false,
  });

  const section3Click1 = () => {
    setsection3crousels({
      one: true,
      two: false,
      three: false,
      four: false,
      five: false,
    });
  };
  const section3Click2 = () => {
    setsection3crousels({
      one: false,
      two: true,
      three: false,
      four: false,
      five: false,
    });
  };
  const section3Click3 = () => {
    setsection3crousels({
      one: false,
      two: false,
      three: true,
      four: false,
      five: false,
    });
  };
  const section3Click4 = () => {
    setsection3crousels({
      one: false,
      two: false,
      three: false,
      four: true,
      five: false,
    });
  };
  const section3Click5 = () => {
    setsection3crousels({
      one: false,
      two: false,
      three: false,
      four: false,
      five: true,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      let sec1 = document.getElementById("sec1").clientHeight - 80;
      let sec5 = document.getElementById("sec5").clientHeight;
      setsectionH(() => ({
        sec1: sec1 + "px",
        sec5: sec5 + "px",
      }));
    }, 2000);
  }, []);
  document.title = "Model S";

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
        }  ${navstate.navtoggle ? (navstate.vehicle ? "hidden" : "") : ""}`}
      >
        <section className="section1">
          <div id="sec1" className="max-mb8:h-[100vh] max-mb8:overflow-hidden">
            <video
              autoPlay
              muted
              loop
              className="max-mb8:hidden w-[100%]"
              src="../assets/Images/modelS/Model-S-Main-Hero.webm"
            ></video>
            <video
              autoPlay
              muted
              loop
              className="mb8:hidden"
              src="../assets/Images/modelS/Model-S-Main-Hero-Mobile.webm"
            ></video>
          </div>

          <div
            style={{ height: `${sectionH.sec1}` }}
            className={`absolute top-[80px] text-white w-full justify-between items-center flex flex-col font-exo2`}
          >
            <div className="text-center">
              <h1 className="text-5xl py-[3px] max-mb5:text-4xl">Model S</h1>
              <p className="text-[22px] max-mb5:text-[18px]">From $71,090*</p>
              <p className="text-sm max-mb5:text-[13px]">
                After Est. Gas Savings
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center gap-20 max-lg:gap-y-[1rem] max-mb9:gap-x-[4rem] max-mb6:gap-x-[3rem] flex-wrap px-[40px] max-mb425:px-[10px] max-mb425:gap-x-[2rem]">
                <div>
                  <h3 className="text-[24px] pb-25px max-mb6:text-[20px] max-mb425:text-[18px]">
                    359 mi
                  </h3>
                  <p className="text-[14px] max-mb6:text-[12px] max-mb425:text-[10px]">
                    {"Range (EPA est.)"}
                  </p>
                </div>
                <div>
                  <h3 className="text-[24px] pb-25px max-mb6:text-[20px] max-mb425:text-[18px]">
                    1.99 s
                  </h3>
                  <p className="text-[14px] max-mb6:text-[12px] max-mb425:text-[10px]">
                    0-60 mph*
                  </p>
                </div>
                <div>
                  <h3 className="text-[24px] pb-25px max-mb6:text-[20px] max-mb425:text-[18px]">
                    200 mph
                  </h3>
                  <p className="text-[14px] max-mb6:text-[12px] max-mb425:text-[10px]">
                    Top Speed†
                  </p>
                </div>
                <div className="max-mb9:hidden">
                  <h3 className="text-[24px] pb-25px max-mb6:text-[20px]">
                    1,020 hp
                  </h3>
                  <p className="text-[14px] max-mb5:text-[13px]">Peak Power</p>
                </div>
                <div className="flex justify-center items-center">
                  <Link
                    to={"/inventory"}
                    className="bg-white text-center text-black py-[8px] px-[60px] max-mb9:px-[100px] max-mb5:w-[81vw] active:outline
                  rounded-[5px] text-md backdrop-blur-[5px] hover:bg-[#ebebeb] max-mb5:px-[50px]"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
              <p className="text-[13px] pt-8 px-4 max-mb5:px-2 max-mb5:text-[12px]">
                *Price before savings is $74,990, excluding taxes and fees.
                Subject to change.
              </p>
              <p className="text-[13px] max-mb5:text-[12px] underline cursor-pointer">
                Learn about est. gas savings.
              </p>
              <p className="text-[14px] pb-[12px] max-mb5:text-[13px]">
                Specs displayed are Model S Plaid values.
              </p>
            </div>
          </div>
        </section>

        <section className="Sub-Sections bg-black pb-20">
          <section className="section2 bg-black text-white font-exo2">
            <h1 className="text-[34px] max-mb5:text-2xl text-center pt-[70px] max-mb8:pt-[40px] pb-3">
              Interior of the Future
            </h1>
            <div className="overflow-hidden max-mb8:h-[100vh]">
              <img
                src="../assets/Images/modelS/Model-S-Section2.avif"
                className="max-mb8:h-[100vh] object-cover"
                alt="Interior of the Future"
              />
            </div>
          </section>

          <section className="section3 bg-black text-white font-exo2">
            <div
              className={`flex justify-center pt-[120px] pb-16 max-mb9:pb-12`}
            >
              <video
                autoPlay
                muted
                loop
                className={`w-[93%] max-mb9:w-[100%] rounded ${
                  section3crousels.one ? "" : "hidden"
                }`}
                src="../assets/Images/modelS/Model-S-Section3-Carousel1.webm"
              ></video>
              <video
                autoPlay
                muted
                loop
                className={`w-[93%] max-mb9:w-[100%] rounded ${
                  section3crousels.two ? "" : "hidden"
                }`}
                src="../assets/Images/modelS/Model-S-Section3-Carousel2.webm"
              ></video>
              <video
                autoPlay
                muted
                loop
                className={`w-[93%] max-mb9:w-[100%] rounded ${
                  section3crousels.three ? "" : "hidden"
                }`}
                src="../assets/Images/modelS/Model-S-Section3-Carousel3.webm"
              ></video>
              <video
                autoPlay
                muted
                loop
                className={`w-[93%] max-mb9:w-[100%] rounded ${
                  section3crousels.four ? "" : "hidden"
                }`}
                src="../assets/Images/modelS/Model-S-Section3-Carousel4.webm"
              ></video>
              <video
                autoPlay
                muted
                loop
                className={`w-[93%] max-mb9:w-[100%] rounded ${
                  section3crousels.five ? "" : "hidden"
                }`}
                src="../assets/Images/modelS/Model-S-Section3-Carousel5.webm"
              ></video>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex gap-x-[8px] w-[45vw] max-mb9:w-[90vw] items-start">
                <div
                  className={`cursor-pointer rounded-full w-[12px] h-[12px] ${
                    section3crousels.one ? "bg-white" : "bg-[#5c5e62]"
                  }`}
                  onClick={section3Click1}
                ></div>
                <div
                  className={`cursor-pointer rounded-full w-[12px] h-[12px] ${
                    section3crousels.two ? "bg-white" : "bg-[#5c5e62]"
                  }`}
                  onClick={section3Click2}
                ></div>
                <div
                  className={`cursor-pointer rounded-full w-[12px] h-[12px] ${
                    section3crousels.three ? "bg-white" : "bg-[#5c5e62]"
                  }`}
                  onClick={section3Click3}
                ></div>
                <div
                  className={`cursor-pointer rounded-full w-[12px] h-[12px] ${
                    section3crousels.four ? "bg-white" : "bg-[#5c5e62]"
                  }`}
                  onClick={section3Click4}
                ></div>
                <div
                  className={`cursor-pointer rounded-full w-[12px] h-[12px] ${
                    section3crousels.five ? "bg-white" : "bg-[#5c5e62]"
                  }`}
                  onClick={section3Click5}
                ></div>
              </div>
              <div className="mt-[10px]">
                <div className="w-[45vw] max-mb9:w-[90vw] flex items-start">
                  <h1
                    className={`text-[20px] font-medium ${
                      section3crousels.one ? "" : "hidden"
                    }`}
                  >
                    Cinematic Experience
                  </h1>
                  <h1
                    className={`text-[20px] font-medium ${
                      section3crousels.two ? "" : "hidden"
                    }`}
                  >
                    Yoke Steering
                  </h1>
                  <h1
                    className={`text-[20px] font-medium ${
                      section3crousels.three ? "" : "hidden"
                    }`}
                  >
                    Perfect Environment
                  </h1>
                  <h1
                    className={`text-[20px] font-medium ${
                      section3crousels.four ? "" : "hidden"
                    }`}
                  >
                    Redesigned Second Row
                  </h1>
                  <h1
                    className={`text-[20px] font-medium ${
                      section3crousels.five ? "" : "hidden"
                    }`}
                  >
                    Console-Grade Gaming
                  </h1>
                </div>
                <div className="mt-[18px] w-[45vw] max-mb9:w-[90vw]">
                  <p
                    className={`leading-5 ${
                      section3crousels.one ? "" : "hidden"
                    }`}
                  >
                    A 17” touchscreen with left-right tilt offers 2200 x 1300
                    resolution, true colors and exceptional responsiveness for
                    gaming, movies and more.
                  </p>
                  <p
                    className={`leading-5 ${
                      section3crousels.two ? "" : "hidden"
                    }`}
                  >
                    A bold new approach gives you a true connection to Model S,
                    offering better steering feel and unobstructed views of your
                    dash and the road ahead. Tap the brake and Model S
                    automatically selects the correct direction to start your
                    trip.
                  </p>
                  <p
                    className={`leading-5 ${
                      section3crousels.three ? "" : "hidden"
                    }`}
                  >
                    Air vents are hidden throughout the cabin, while tri-zone
                    temperature controls, ventilated seats and HEPA filtration
                    deliver the perfect environment.
                  </p>
                  <p
                    className={`leading-5 ${
                      section3crousels.four ? "" : "hidden"
                    }`}
                  >
                    Seating for three adults, with extra legroom, headroom and a
                    stowable armrest with integrated storage and wireless
                    charging.
                  </p>
                  <p
                    className={`leading-5 ${
                      section3crousels.five ? "" : "hidden"
                    }`}
                  >
                    Up to 10 teraflops of processing power unlock in-car gaming
                    on-par with today’s newest consoles.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section4 bg-black  flex flex-col text-white font-exo2 pt-40 justify-center items-center">
            <div className="w-[80%] max-mb72:w-[100%] max-mb10:w-[90%]">
              <div className="flex justify-between items-center max-mb72:flex-col">
                <div className="mb72:w-[49%]">
                  <img
                    src="../assets/Images/modelS/Model-S-Section4-img1.avif"
                    alt="Section4"
                  />
                </div>
                <div className="flex justify-center flex-col">
                  <h1 className="text-[18px] max-mb72:mt-4 font-medium">
                    Stay Connected
                  </h1>
                  <p className="mt-[9px] w-[35vw] max-mb72:w-[90vw] max-mb72:mb-12 text-[15px]">
                    Instantly connect with multi-device Bluetooth, or fast
                    charge devices with wireless and 36-watt USB-C charging.
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center max-mb72:flex-col">
                <div className="max-mb72:order-1">
                  <h1 className="text-[18px] max-mb72:mt-4 font-medium">
                    Immersive Sound
                  </h1>
                  <p className="mt-[9px] w-[35vw] max-mb72:w-[90vw] max-mb72:mb-12 text-[15px]">
                    A 22-speaker, 960-watt audio system with Active Road Noise
                    Reduction offers immersive listening and studio-grade sound
                    quality.
                  </p>
                </div>
                <div className="mb72:w-[49%]">
                  <video
                    autoPlay
                    muted
                    loop
                    className=""
                    src="../assets/Images/modelS/Model-S-Section4-video2.webm"
                  ></video>
                </div>
              </div>

              <div className="flex justify-between items-center max-mb72:flex-col">
                <div className="mb72:w-[49%]">
                  <img
                    src="../assets/Images/modelS/Model-S-Section4-img3.avif"
                    alt="Section4"
                  />
                </div>
                <div className="flex justify-center flex-col">
                  <h1 className="text-[18px] max-mb72:mt-4 font-medium">
                    Room for Everything
                  </h1>
                  <p className="mt-[9px] w-[35vw] max-mb72:w-[90vw] max-mb72:mb-12 text-[15px]">
                    With front and rear trunks and fold-flat seats you can fit
                    your bike without taking the wheel off—and your luggage too.
                    <Link className="underline pl-[6px]" to={"/compare"}>
                      Compare Models
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="section5">
          <div
            style={{ height: `${sectionH.sec5}` }}
            className="flex justify-center max-mb72:gap-x-24 max-mb425:gap-x-9 max-mb5:gap-x-16 gap-x-44 text-center font-exo2 absolute w-full text-white items-end pb-16 max-mb5:pb-8"
          >
            <div>
              <h3 className="text-[25px] pb-25px max-mb6:text-[20px] max-mb425:text-[18px]">
                1,020 hp
              </h3>
              <p className="text-[14px] max-mb6:text-[12px] max-mb425:text-[10px]">
                Peak Power
              </p>
            </div>
            <div>
              <h3 className="text-[25px] pb-25px max-mb6:text-[20px] max-mb425:text-[18px]">
                9.23 s
              </h3>
              <p className="text-[14px] max-mb6:text-[12px] max-mb425:text-[10px]">
                @155 mph 1/4 mile
              </p>
            </div>
            <div>
              <h3 className="text-[25px] pb-25px max-mb6:text-[20px] max-mb425:text-[18px]">
                1.99 s
              </h3>
              <p className="text-[14px] max-mb6:text-[12px] max-mb425:text-[10px]">
                0-60 mph*
              </p>
            </div>
          </div>
          <div className="" id="sec5">
            <img
              src="../assets/Images/modelS/Model-S-Section5.jpg"
              alt="Model-S-Section5"
              className="max-mb72:hidden"
            />
            <img
              src="../assets/Images/modelS/Model-S-Section5-Mobile.jpg"
              alt="Model-S-Section5"
              className="mb72:hidden"
            />
          </div>
        </section>

        <section className="section6 font-exo2 flex max-mb9:flex-col gap-x-10 my-7 justify-evenly max-mb9:px-6">
          <div className="flex flex-col max-mb9:mb-2">
            <h4 className="text-[18px] max-mb6:text-[14px] -mb-2">Plaid</h4>
            <h1 className="text-[30px] max-mb5:text-2xl font-medium text-[#171a20]">
              Beyond Ludicrous
            </h1>
            <Link
              to={"/inventory"}
              className="bg-white py-[4px] px-[40px] rounded-[6px]
              hover:bg-[#171a20] max-mb5:px-[30px] hover:text-white border-solid
              border-[#171a20] border-[3px] mb-4 max-mb9:hidden mb9:mt-2 text-center"
            >
              Order Now
            </Link>
            <Link
              to={"/compare"}
              className="bg-[#dfdfdf] py-[7px] px-[40px] rounded-[6px] hover:bg-[#d6d6d6] max-mb5:px-[30px] max-mb9:hidden text-center"
            >
              Compare Models
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <p className="w-[45vw] max-mb9:w-auto leading-[22px] text-[15.5px]">
              Model S Plaid has the quickest acceleration of any vehicle in
              production. Updated battery architecture for all Model S trims
              enables back-to-back track runs without performance degradation.
              Chat with a Tesla Advisor to learn more about Model S or schedule
              a demo drive today.
            </p>
          </div>
          <div className="mb9:hidden mt-5 max-mb6:flex-col">
            <Link to={"/inventory"}>
              <button className="bg-white py-[4px] max-mb6:py-[5px] px-[50px] rounded-[6px] hover:bg-[#171a20] max-mb6:w-[87vw] hover:text-white border-solid border-[#171a20] max-mb6:rounded-[4px] border-[3px] mb-4 mr-4">
                Order Now
              </button>
            </Link>
            <Link to={"/compare"}>
              <button className="bg-[#dfdfdf] py-[7px] max-mb6:rounded-[4px] px-[40px] rounded-[6px] hover:bg-[#d6d6d6] max-mb6:w-[87vw]">
                Compare Models
              </button>
            </Link>
          </div>
        </section>

        <Footer bg="black" color="#cecece" />
      </div>
    </>
  );
};

export default ModelS;
