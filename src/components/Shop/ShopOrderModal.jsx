import { React, useState } from "react";
import { Link } from "react-router-dom";

const ShopOrderModal = () => {
  // Order Now Function

  const [email, setemail] = useState("");
  const [ordered, setordered] = useState(false);

  const onMailChange = (e) => {
    setemail(e.target.value);
  };

  const onOrdered = (e) => {
    e.preventDefault();
    setordered(true);
    setemail("");
  };
  document.title = "Order";

  return (
    <div className="bg-[#f0f0f0] flex h-screen justify-center items-center">
      <section
        className={`bg-white w-[70%] font-exo2 px-5 drop-shadow-lg rounded-md`}
      >
        <div className="w-[100%] flex justify-end items-end my-3">
          <Link className="text-[20px] " to="/shop">
            &#x2715;
          </Link>
        </div>
        <hr />
        <form onSubmit={onOrdered}>
          <div
            className={`flex justify-center items-start flex-col gap-y-3 mt-3 mb-6 ${
              ordered ? "hidden" : ""
            }`}
          >
            <label
              htmlFor="search"
              className="text-[20px] text-[#2d3035] font-exo2"
            >
              Enter Your Email
            </label>
            <input
              id="search"
              type="email"
              value={email}
              onChange={onMailChange}
              className={`text-black pl-1 py-[3px] outline-1 rounded-[2px] outline focus:outline-2`}
              placeholder="Search"
              name="search"
            />
          </div>
          <h3
            className={`${
              ordered ? "" : "hidden"
            } text-[20px] text-[#2d3035] font-exo2 my-6 text-center`}
          >
            Your Order Will Conformed By Email
          </h3>
          <hr className={`${ordered ? "hidden" : ""}`} />
          <div className="flex justify-end">
            <input
              type="submit"
              value="Order Now"
              disabled={email.length === 0}
              className={`bg-white text-[#2d3035] py-[3px] rounded-[4px] ${
                email.length === 0
                  ? "opacity-60"
                  : "hover:bg-[#171a20] hover:text-white cursor-pointer"
              } border-solid border-[#171a20] border-[2px] w-[120px] my-6 ${
                ordered ? "hidden" : ""
              }`}
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default ShopOrderModal;
