import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
let count = 0;

const InvenCards = (props) => {
  const { x } = props;
  const [cardhover, setcardhover] = useState(false);
  const [carhover, setcarhover] = useState(false);
  const [H, setH] = useState({ carH: 0 });
  const oncardhover = () => setcardhover(true);

  const oncardleave = () => setcardhover(false);

  const oncarhover = () => setcarhover(true);

  const oncarleave = () => setcarhover(false);

  useEffect(() => {
    setTimeout(() => {
      let carg = document.getElementById("car").clientHeight;
      setH(() => ({
        carH: carg + "px",
      }));
    }, 2500);
  }, []);

  // Slide Show

  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredImages = [x.imgUrl1, x.imgUrl2, x.imgUrl3];

  const onprev = () => {
    const productsLength = featuredImages.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
  };

  const onnext = () => {
    count = (count + 1) % featuredImages.length;
    setCurrentIndex(count);
  };

  return (
    <>
      <section
        className={`font-exo2 bg-white mt-[30px] max-mb9:w-[100%] flex flex-col items-center mb-6 rounded-[8px] py-[22px] pb-[25px] mb9:w-[45%] mb12:w-[31.5%]`}
        onMouseEnter={oncardhover}
        onMouseLeave={oncardleave}
      >
        <header className="flex mb-2 justify-between w-[100%] max-mb5:px-5 px-6">
          <section>
            <h1 className="text-lg text-[#2d3035] font-semibold">{x.title}</h1>
            <h3 className="text-[16px] text-[#63666a] max-mb7:text-[15px]">
              {x.subt1}
            </h3>
            <h3 className="text-[16px] text-[#63666a] max-mb7:text-[15px]">
              {x.subt2}
            </h3>
            <h5 className="text-[14px] text-[#63666a] max-mb7:text-[13px]">
              {x.subt3}
            </h5>
          </section>

          <section className="text-end">
            <div className="mb7:flex mb7:items-center">
              <h1 className="text-lg text-[#2d3035] font-semibold">
                {x.price}
              </h1>
              <span className="text-[14px] text-[#000000c7] line-through pl-[3px]">
                {x.prevprice}
              </span>
            </div>
            <h4 className="text-[14px] text-[#000000c7]">{x.priceMo}/mo</h4>
          </section>
        </header>

        <main className="mb-5">
          <article
            className="flex flex-col mt-4 mb-8"
            onMouseLeave={oncarleave}
            onMouseEnter={oncarhover}
          >
            <div
              className={`slideshow-controls flex justify-between items-center pl-4 pr-6 mb9:w-[45%] mb12:w-[31.5%] max-mb9:w-[94%] absolute ${
                carhover ? "" : "md:hidden"
              }`}
              style={{ height: `${H.carH}` }}
            >
              <i
                className="fa-solid fa-angle-left bg-[#00000089] h-[30px] py-[5px] px-[8px] cursor-pointer border-white border-solid rounded-[6px] text-md border-[2px] text-white"
                onClick={onprev}
                id="btn-prev"
              ></i>
              <i
                className="fa-solid fa-angle-right bg-[#00000089] h-[30px] py-[5px] px-[8px] cursor-pointer border-white border-solid rounded-[6px] text-md border-[2px]  text-white"
                id="btn-next"
                onClick={onnext}
              ></i>
            </div>
            <div className="slideshow w-[100%] flex overflow-hidden" id="car">
              <img
                src={`../assets/Images/Inventory/${featuredImages[currentIndex]}`}
                alt="ModelY"
              />
            </div>
          </article>

          <article
            className={`flex justify-center md:${
              cardhover ? "" : "hidden"
            } h-[50px]`}
          >
            <Link
              to="/ordermodal"
              className="bg-white py-[5px] rounded-[4px] hover:bg-[#171a20] w-[85%] hover:text-white border-solid border-[#171a20] border-[3px] max-md:hidden text-center h-[40px]"
            >
              Order Now
            </Link>
          </article>

          <article
            className={`flex text-center mb5:px-10 max-mb5:px-[10px] justify-between md:${
              cardhover ? "hidden" : ""
            }`}
          >
            <section className="">
              <h2 className="text-lg text-[#2d3035] font-semibold">
                {x.rangeEst}
                <span className="text-[15px] text-[#63666a]">mi</span>
              </h2>
              <h4 className="text-[14px] text-[#63666a]">
                {"Range (EPA est.)"}
              </h4>
            </section>

            <div
              className={`h-[8vh] w-[1px] ml-2 bg-[rgba(14,13,13,0.2)]`}
            ></div>

            <section className="">
              <h2 className="text-lg text-[#2d3035] font-semibold">
                {x.topSpeed}
                <span className="text-[15px] text-[#63666a]">mph</span>
              </h2>
              <h4 className="text-[14px] text-[#63666a]">Top Speed</h4>
            </section>

            <div
              className={`h-[8vh] w-[1px] ml-2 bg-[rgba(14,13,13,0.2)]`}
            ></div>

            <section className="">
              <h2 className="text-lg text-[#2d3035] font-semibold">
                {x.testSpeed}
                <span className="text-[15px] text-[#63666a]">s</span>
              </h2>
              <h4 className="text-[14px] text-[#63666a]">0-60 mph</h4>
            </section>
          </article>
        </main>

        <article
          className={`flex justify-center w-[100%] order-1 mt-6 md:hidden `}
        >
          <Link
            to="/ordermodal"
            className="bg-white py-[5px] rounded-[4px] hover:bg-[#171a20] w-[90%] hover:text-white border-solid border-[#171a20] border-[3px] text-center"
          >
            Order Now
          </Link>
        </article>

        <footer className="flex gap-x-4 justify-between w-[100%] max-mb5:px-5 px-10">
          <section className="">
            <h5 className="text-[14px] py-[2px] text-[#63666a]">{x.paint}</h5>
            <h5 className="text-[14px] py-[2px] text-[#63666a]">{x.wheels}</h5>
            <h5 className="text-[14px] py-[2px] text-[#63666a]">
              {x.interior}
            </h5>
            <h5 className="text-[14px] py-[2px] text-[#63666a]">{x.seat}</h5>
            <h5 className="text-[14px] py-[2px] text-[#63666a]">{x.tow}</h5>
            <h5 className="text-[14px] pb-[4px] text-[#63666a] mb7:hidden">
              {x.autopilot}
            </h5>
            <h5 className="text-[14px] pb-[4px] text-[#63666a] mb7:hidden">
              {x.trial}
            </h5>
          </section>

          <section className="">
            <h5 className="text-[14px] pb-[4px] text-[#63666a] max-mb7:hidden">
              {x.autopilot}
            </h5>
            <h5 className="text-[14px] pb-[4px] text-[#63666a] max-mb7:hidden">
              {x.trial}
            </h5>
          </section>
        </footer>
      </section>
    </>
  );
};

export default InvenCards;
