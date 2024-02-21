import { React, useState } from "react";
import { Navbar } from "../../Navbar";
import array from "./data";
import InvenCards from "./InvenCards";
import Footer from "../../Footer";

const Inventory = () => {
  const [navstate, setnavstate] = useState({
    navtoggle: false,
    mainstate: false,
    vehicle: false,
  });
  const getdata = (data1, data2, data3) => {
    setnavstate({ navtoggle: data1, mainstate: data2, vehicle: data3 });
  };
  document.title = "Inventory";

  return (
    <>
      <Navbar
        data={getdata}
        textone="black"
        texttwo="black"
        searchone="black"
        searchtwo="black"
        logoone="-black"
        logotwo="-black"
      />
      <section
        className={`${navstate.navtoggle ? "hidden" : ""} ${
          navstate.mainstate ? "blur-[5px]" : ""
        }  ${navstate.navtoggle ? (navstate.vehicle ? "hidden" : "") : ""}`}
      >
        <header className="pt-[80px] pb-[40px] text-[38px] font-exo2 text-center text-[#393c41] font-medium">
          <h1>Inventory</h1>
        </header>
        <article
          className={`bg-[#f4f4f4] top-[80px] flex flex-wrap gap-x-6 justify-evenly px-4 pb-4`}
        >
          {array.map((x) => {
            return <InvenCards x={x} key={x.price} />;
          })}
        </article>
        <Footer bg="[#f4f4f4]" color="#63666a" />
      </section>
    </>
  );
};

export default Inventory;
