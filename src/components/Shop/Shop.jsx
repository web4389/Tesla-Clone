import { React, useState } from "react";
import { Navbar } from "../Navbar";
import ShopCards from "./ShopCards";
import { Array1, Array2, Array3 } from "./ShopData";
import Footer from "../Footer";

const Shop = () => {
  const [navstate, setnavstate] = useState({
    navtoggle: false,
    mainstate: false,
    vehicle: false,
  });
  const getdata = (data1, data2, data3) => {
    setnavstate({ navtoggle: data1, mainstate: data2, vehicle: data3 });
  };
  document.title = "Shop";

  return (
    <>
      <header>
        <Navbar
          data={getdata}
          textone="black"
          texttwo="white"
          searchone="black"
          searchtwo="white"
          logoone="-black"
          logotwo=""
        />
      </header>

      <main
        className={`bg-[#111111] px-12 max-md:px-8 max-mb5:px-3 font-exo2 ${
          navstate.navtoggle ? "hidden" : ""
        } ${navstate.navtoggle ? (navstate.vehicle ? "hidden" : "") : ""}`}
      >
        <h1 className="text-4xl py-8 text-white font-[350] pt-[14vh]">
          Charging
        </h1>
        <h3 className="text-[27px] pb-8 text-white font-[500] font-sans">
          Chargers
        </h3>
        <article className="flex justify-between flex-wrap gap-y-6 pb-12 text-[15px] max-mb5:text-[14px]">
          {Array1.map((x) => {
            return <ShopCards x={x} key={x.name} />;
          })}
        </article>
        <h3 className="text-[27px] pb-8 text-white font-[500] font-sans">
          ADAPTERS
        </h3>
        <article className="flex justify-between flex-wrap gap-y-6 pb-12 text-[15px] max-mb5:text-[14px]">
          {Array2.map((x) => {
            return <ShopCards x={x} key={x.name} />;
          })}
        </article>
        <h3 className="text-[27px] pb-8 text-white font-[500] font-sans">
          PARTS
        </h3>
        <article className="flex justify-between flex-wrap gap-y-6 pb-8 text-[15px] max-mb5:text-[14px]">
          {Array3.map((x) => {
            return <ShopCards x={x} key={x.name} />;
          })}
        </article>
      </main>

      <Footer bg="[#111111]" color="#cecece" />
    </>
  );
};

export default Shop;
