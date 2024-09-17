import { React, useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  const { textone, texttwo, logoone, logotwo, searchone, searchtwo } = props;
  const [state, setstate] = useState({
    vehicles: false,
    charging: false,
    shop: false,
    mainstate: false,
  });
  const [search, setsearch] = useState(false);
  const [navtoggle, setnavtoggle] = useState(false);

  const onVehicles = () => {
    setstate({ vehicles: true, charging: false, shop: false, mainstate: true });
    props.data(navtoggle, true, state.vehicles);
  };
  const onCharging = () => {
    setstate({ vehicles: false, charging: true, shop: false, mainstate: true });
    props.data(false, true, false);
  };
  const onShop = () => {
    setstate({ vehicles: false, charging: false, shop: true, mainstate: true });
    props.data(false, true, false);
  };
  const onSearch = () => setsearch(true);
  const onSearchLeave = () => setsearch(false);
  const toggle = () => {
    setnavtoggle(true);
    props.data(true, false, state.vehicles);
  };
  const onClose = () => {
    setnavtoggle(false);
    props.data(false, false, state.vehicles);
  };
  const onBack = () =>
    setstate({
      vehicles: false,
      charging: false,
      shop: false,
      mainstate: false,
    });

  const onNavLeave = () => {
    setstate({
      vehicles: false,
      charging: false,
      shop: false,
      mainstate: false,
    });
    props.data(false, false, false);
  };

  return (
    <>
      <nav
        onMouseLeave={onNavLeave}
        className={`w-[100%] absolute ${
          state.mainstate || navtoggle
            ? `bg-${props.bg ? props.bg : "white"} text-${textone}`
            : `text-${texttwo}`
        } font-exo2 font-[525] z-[2] drop-shadow-lg pt-2`}
      >
        <div
          className={`${
            navtoggle
              ? `py-3 bg-white flex-col items-start ${
                  state.vehicles ? "" : "max-lg:h-[100vh]"
                }`
              : "py-3 px-2 items-center justify-between"
          } flex`}
        >
          <Link to="/" className="cursor-pointer z-[2]">
            <img
              className={`${navtoggle ? "hidden" : ""} w-[120px] ml-2`}
              src={`${
                state.mainstate
                  ? `../assets/Images/Navbar/Tesla-Logo${logoone}.png`
                  : `../assets/Images/Navbar/Tesla-Logo${logotwo}.png`
              }`}
              alt="Tesla Logo"
            />
          </Link>

          <ul
            className={`flex absolute text-lg left-0 w-[100%] justify-center ${
              navtoggle ? "hidden" : "max-lg:hidden"
            }`}
          >
            <li
              onMouseEnter={onVehicles}
              className={`px-3 py-1 mx-2 ${
                state.vehicles ? "bg-[rgba(122,122,122,0.2)]" : ""
              } cursor-pointer rounded`}
            >
              Vehicles
            </li>
            <li
              onMouseEnter={onCharging}
              className={`px-3 py-1 mx-2 ${
                state.charging ? "bg-[rgba(122,122,122,0.2)]" : ""
              } cursor-pointer rounded`}
            >
              Charging
            </li>
            <li
              onMouseEnter={onShop}
              className={`px-3 py-1 mx-2 ${
                state.shop ? "bg-[rgba(122,122,122,0.2)]" : ""
              } cursor-pointer rounded`}
            >
              Shop
            </li>
          </ul>

          <ul
            className={`flex justify-center ${
              navtoggle
                ? "flex-col order-2 w-[100%] mt-4 overflow-hidden"
                : "hidden"
            } text-xl ${state.vehicles ? "hidden" : ""}`}
          >
            <li
              onClick={onVehicles}
              className={`px-3 py-3 m-3 cursor-pointer rounded flex justify-between items-center hover:bg-[rgba(public,122,122,0.1)]`}
            >
              <span>Vehicles</span>
              <i className="fa-solid fa-angle-right opacity-80"></i>
            </li>
            <Link
              to={"/charging"}
              className={`px-3 py-3 m-3 cursor-pointer rounded hover:bg-[rgba(122,122,122,0.1)]`}
            >
              Charging
            </Link>
            <Link
              to={"/shop"}
              className={`px-3 py-3 m-3 cursor-pointer rounded hover:bg-[rgba(122,122,122,0.1)]`}
            >
              Shop
            </Link>
          </ul>

          <form
            className={`${
              navtoggle
                ? `order-3 mx-5 my-4 py-1 ${state.vehicles ? "hidden" : ""}`
                : "max-lg:hidden "
            } rounded-full flex justify-center ${
              search ? "bg-[#e4e4e4]" : ""
            } items-center z-[2]`}
            onMouseLeave={onSearchLeave}
          >
            <input
              id="Search"
              type="text"
              className={`text-black ${
                search ? "w-[170px] animate-width" : "hidden w-[0px]"
              } outline-none bg-transparent pl-2 py-[3px]`}
              placeholder="Search"
            />
            <i
              onMouseEnter={onSearch}
              className={`${
                search || state.mainstate || navtoggle
                  ? `text-${searchone}`
                  : `text-${searchtwo}`
              } fa-solid fa-magnifying-glass text-center mr-[10px] p-[5px] hover:bg-[rgba(122,122,122,0.2)] rounded-3xl cursor-pointer text-[19px]`}
            ></i>
          </form>

          <div
            className={`w-[100%] order-1 flex h-[34px] ${
              navtoggle
                ? `${state.vehicles ? "" : "justify-end"}`
                : "justify-end"
            } lg:hidden`}
          >
            <button
              onClick={toggle}
              className={`${
                navtoggle ? "hidden" : ""
              } bg-[#4e4e4e49] py-[1px] px-[6px] active:outline hover:bg-[#3b3b3b61] rounded-[3px] backdrop-blur-[5px]`}
            >
              Menu
            </button>
            <i
              onClick={onBack}
              style={{
                display: `${
                  navtoggle ? `${state.vehicles ? "" : "none"}` : "none"
                }`,
              }}
              className="fa-solid fa-angle-left ml-3 mt-1 cursor-pointer border-black border-solid 
              hover:bg-[rgba(122,122,122,0.1)] py-[4.5px] px-[8px] rounded text-xl active:border-[1px]"
            ></i>

            <i
              onClick={onClose}
              className={`fa-solid fa-xmark text-2xl mr-4 mt-1 cursor-pointer border-black border-solid 
              hover:bg-[rgba(122,122,122,0.1)] py-[3.2px] px-[6px] active:border-[1px] rounded`}
              style={{
                display: `${
                  navtoggle ? `${state.vehicles ? "none" : ""}` : "none"
                }`,
              }}
            ></i>
          </div>
        </div>

        <div
          className={`pt-8 pb-12 overflow-hidden ${
            state.vehicles ? "animate-height" : "hidden"
          } ${
            navtoggle ? `${state.vehicles ? "h-[90.9vh]" : ""}` : `h-[42vh]`
          }`}
        >
          <ul
            className={`flex ${
              navtoggle ? "flex-col" : ""
            } justify-center items-center`}
          >
            <div className="w-[300px] px-8 mb-6">
              <Link to="/models" className="select-none cursor-pointer ">
                <img
                  src="../assets/Images/Navbar/modelSlogo.avif"
                  className="select-none w-[100%]"
                  alt="ModelS Logo"
                />
              </Link>
              <h3 className="text-center text-[21px] -mt-6">Model S</h3>
            </div>

            <div
              className={`${
                navtoggle ? "w-[94vw] h-[1px]" : "h-[30vh] w-[1px]"
              } bg-[rgba(14,13,13,0.2)]`}
            ></div>

            <div
              className={`flex flex-col text-lg justify-start ${
                navtoggle ? "w-[96vw] mr-3 mt-1 text-xl" : ""
              }`}
            >
              <Link
                to="/inventory"
                className={`${
                  navtoggle
                    ? "px-3 py-3 m-3 cursor-pointer rounded hover:bg-[rgba(122,122,122,0.1)]"
                    : "px-8 my-[3px]"
                } cursor-pointer`}
              >
                Inventory
              </Link>
              <Link
                to="/compare"
                className={`${
                  navtoggle
                    ? "px-3 py-3 m-3 cursor-pointer rounded hover:bg-[rgba(122,122,122,0.1)]"
                    : "px-8 my-[3px]"
                } cursor-pointer`}
              >
                Compare
              </Link>
            </div>
          </ul>
        </div>

        <div
          className={`pt-4 pb-8 h-[34vh] overflow-hidden ${
            state.charging ? "flex animate-height" : "hidden"
          } flex-col justify-center items-center `}
        >
          <Link to={"/charging"} className="select-none cursor-pointer ">
            <img
              src="../assets/Images/Navbar/charging.avif"
              className="select-none w-[250px]"
              alt="ModelS Logo"
            />
          </Link>
          <h3 className="text-center text-[21px]">Charging</h3>
        </div>

        <div
          className={`pt-4 pb-8 h-[38vh] overflow-hidden ${
            state.shop ? "flex animate-height" : "hidden"
          } flex-col justify-center items-center`}
        >
          <Link to={"/shop"} className="select-none cursor-pointer ">
            <img
              src="../assets/Images/Navbar/Shop-Charging.avif"
              className="select-none w-[300px]"
              alt="ModelS Logo"
            />
          </Link>
          <h3 className="text-center text-[21px]">Charging</h3>
        </div>
      </nav>
    </>
  );
};
