import { React, useState } from "react";
import { Navbar } from "../../Navbar";
import Footer from "../../Footer";

const Compare = () => {
  const [navstate, setnavstate] = useState({
    navtoggle: false,
    mainstate: false,
    vehicle: false,
  });
  const getdata = (data1, data2, data3) => {
    setnavstate({ navtoggle: data1, mainstate: data2, vehicle: data3 });
  };
  const [selectedcar1, setselectedcar1] = useState(0);
  const [selectedcar2, setselectedcar2] = useState(2);
  const selectedOption1 = (e) => {
    e.target.value === "Model S" ? setselectedcar1(0) : "";
    e.target.value === "Model S Plaid" ? setselectedcar1(1) : "";
    e.target.value === "Model Y" ? setselectedcar1(2) : "";
    e.target.value === "Model Y Rear-Wheel Drive" ? setselectedcar1(3) : "";
    e.target.value === "Model Y Long Range" ? setselectedcar1(4) : "";
  };
  const selectedOption2 = (e) => {
    e.target.value === "Model S" ? setselectedcar2(0) : "";
    e.target.value === "Model S Plaid" ? setselectedcar2(1) : "";
    e.target.value === "Model Y" ? setselectedcar2(2) : "";
    e.target.value === "Model Y Rear-Wheel Drive" ? setselectedcar2(3) : "";
    e.target.value === "Model Y Long Range" ? setselectedcar2(4) : "";
  };

  const carsdetails = [
    {
      name: "Model S",
      price: "$74,990",
      range: "405",
      seat: "5",
      cargoCapacity: "28",
      drive: "AWD",
      driveMotor: "Dual Motor",
    },
    {
      name: "Model S Plaid",
      price: "$89,990",
      range: "359",
      seat: "5",
      cargoCapacity: "28",
      drive: "AWD",
      driveMotor: "Tri Motor",
    },
    {
      name: "Model Y Performence",
      price: "$52,490",
      range: "285",
      seat: "5",
      cargoCapacity: "76",
      drive: "AWD",
      driveMotor: "Dual Motor",
    },
    {
      name: "Model Y Rear-Wheel Drive",
      price: "$42,990",
      range: "260",
      seat: "5",
      cargoCapacity: "76",
      drive: "AWD",
      driveMotor: "",
    },
    {
      name: "Model Y Long Range",
      price: "$47,990",
      range: "310",
      seat: "7",
      cargoCapacity: "76",
      drive: "AWD",
      driveMotor: "Dual Motor",
    },
  ];

  document.title = "Compare";

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
        className={`pt-[75px] font-exo2  ${
          navstate.navtoggle ? "hidden" : ""
        } ${navstate.navtoggle ? (navstate.vehicle ? "hidden" : "") : ""}`}
      >
        <header className="mb-[40px] max-mb6:px-[20px] mb6:text-center">
          <h1 className="text-[40px] max-mb6:text-[35px] text-[#393c41] font-medium">
            Compare Models
          </h1>

          <h3 className="text-[16px] text-[#63666a] mb6:px-[10%]">
            Discover which Tesla models meet your needs by answering questions
            about your budget, driving habits and lifestyle.
          </h3>
        </header>

        <article className="w-[100%]">
          <section className="flex w-[100%] justify-center overflow-hidden -mt-10">
            <img
              src={`..//assets/Images/Compare/compare-model-${selectedcar1}.avif`}
              alt="Model S"
              className="w-[60%] max-mb6:w-[100%] -mr-[16.5%] max-mb6:-mr-[27%]"
            />
            <img
              src={`..//assets/Images/Compare/compare-model-${selectedcar2}.avif`}
              alt="Model S"
              className="w-[60%] max-mb6:w-[100%] -ml-[16.5%] max-mb6:-ml-[27%]"
            />
          </section>

          <section className="justify-evenly flex mb-5">
            <aside className="flex flex-col gap-y-8 max-mb6:w-[45%]">
              <form>
                <h1 className="text-[25px] max-mb6:text-[23px] text-[#000000] font-[550] -mb-[6px] ml-1">
                  {selectedcar1 > 1 ? "Model Y" : "Model S"}
                </h1>
                <select
                  id="model"
                  name="model"
                  className="text-[15px] max-mb6:text-[14px] focus:outline-none max-mb6:w-[100%]"
                  onClick={selectedOption1}
                >
                  <optgroup label="Model S">
                    <option value="Model S">Model S</option>
                    <option value="Model S Plaid">Model S Plaid</option>
                  </optgroup>
                  <optgroup label="Model Y">
                    <option value="Model Y">Model Y Performance</option>
                    <option value="Model Y Rear-Wheel Drive">
                      Model Y Rear-Wheel Drive
                    </option>
                    <option value="Model Y Long Range">
                      Model Y Long Range
                    </option>
                  </optgroup>
                </select>
              </form>

              <h3 className="text-[28px] max-mb6:text-[25px] text-[#000000] font-[550] flex flex-col text-start ml-[4px]">
                <span className="text-[14px] text-[#232324cc] -mb-2">
                  Base Price
                </span>
                {carsdetails[selectedcar1].price}
              </h3>

              <section className="text-[28px] max-mb6:text-[25px] text-[#000000] font-[550] flex flex-col text-start ml-[4px]">
                <span className="text-[14px] text-[#232324cc] -mb-2">
                  Range
                </span>
                <h3>
                  {carsdetails[selectedcar1].range}
                  <span className="text-[19px] max-mb6:text-[17px] text-[#232324e8] pl-1">
                    {" miles (EPA est.)"}
                  </span>
                </h3>
              </section>

              <section className="text-[28px] max-mb6:text-[25px] text-[#000000] font-[550] flex flex-col text-start ml-[4px]">
                <span className="text-[14px] text-[#232324cc] -mb-2">
                  Seating (Up to)
                </span>
                <h3>
                  {carsdetails[selectedcar1].seat}
                  <span className="text-[19px] max-mb6:text-[17px] text-[#232324e8] pl-1">
                    {" seats"}
                  </span>
                </h3>
              </section>

              <section className="text-[28px] max-mb6:text-[25px] text-[#000000] font-[550] flex flex-col text-start ml-[4px]">
                <span className="text-[14px] text-[#232324cc] -mb-2">
                  Cargo Capacity
                </span>
                <h3>
                  {carsdetails[selectedcar1].cargoCapacity}
                  <span className="text-[19px] max-mb6:text-[17px] text-[#232324e8] pl-1">
                    {" cu ft"}
                  </span>
                </h3>
              </section>

              <section className="text-[28px] max-mb6:text-[25px] text-[#000000] font-[550] flex flex-col text-start ml-[4px]">
                <span className="text-[14px] text-[#232324cc] -mb-2">
                  Drive
                </span>
                <h3>
                  {carsdetails[selectedcar1].drive}
                  <span className="text-[19px] max-mb6:text-[17px] text-[#232324e8] pl-[8px]">
                    {carsdetails[selectedcar1].driveMotor}
                  </span>
                </h3>
              </section>
            </aside>

            <aside className="flex flex-col max-mb6:w-[45%] gap-y-[45px]">
              <form>
                <h1 className="text-[25px] max-mb6:text-[23px] text-[#000000] font-[550] -mb-[6px] ml-1">
                  {selectedcar2 > 1 ? "Model Y" : "Model S"}
                </h1>
                <select
                  id="model"
                  name="model"
                  className="text-[15px] max-mb6:text-[14px] focus:outline-none max-mb6:w-[100%]"
                  onClick={selectedOption2}
                >
                  <optgroup label="Model Y">
                    <option value="Model Y">Model Y Performance</option>
                    <option value="Model Y Rear-Wheel Drive">
                      Model Y Rear-Wheel Drive
                    </option>
                    <option value="Model Y Long Range">
                      Model Y Long Range
                    </option>
                  </optgroup>
                  <optgroup label="Model S">
                    <option value="Model S">Model S</option>
                    <option value="Model S Plaid">Model S Plaid</option>
                  </optgroup>
                </select>
              </form>
              <h3 className="text-[28px] max-mb6:text-[25px] text-[#000000] font-[550] flex flex-col text-start ml-[4px]">
                {carsdetails[selectedcar2].price}
              </h3>

              <h3 className="text-[28px] max-mb6:text-[25px] text-[#000000] font-[550] text-start ml-[4px]">
                {carsdetails[selectedcar2].range}
                <span className="text-[19px] max-mb6:text-[17px] text-[#232324e8] pl-1">
                  {" miles (EPA est.)"}
                </span>
              </h3>

              <h3 className="text-[28px] max-mb6:text-[25px] text-[#000000] font-[550] text-start ml-[4px]">
                {carsdetails[selectedcar2].seat}
                <span className="text-[19px] max-mb6:text-[17px] text-[#232324e8] pl-1">
                  {" seats"}
                </span>
              </h3>

              <h3 className="text-[28px] max-mb6:text-[25px] text-[#000000] font-[550] text-start ml-[4px]">
                {carsdetails[selectedcar2].cargoCapacity}
                <span className="text-[19px] max-mb6:text-[17px] text-[#232324e8] pl-1">
                  {" cu ft"}
                </span>
              </h3>

              <h3 className="text-[28px] max-mb6:text-[25px] text-[#000000] font-[550] text-start ml-[4px]">
                {carsdetails[selectedcar2].drive}
                <span className="text-[19px] max-mb6:text-[17px] text-[#232324e8] pl-[8px]">
                  {carsdetails[selectedcar2].driveMotor}
                </span>
              </h3>
            </aside>
          </section>
        </article>

        <Footer bg="white" color="#63666a" />
      </section>
    </>
  );
};

export default Compare;
