import { React, useState } from "react";
import { Link } from "react-router-dom";

const ShopCards = (props) => {
  const { x } = props;
  const [ImgHover, setImgHover] = useState(false);

  return (
    <>
      <figure className="w-[31%] max-md:w-[48%] flex flex-col">
        <Link to={"/shoporder"}>
          <img
            src={`../src/assets/Images/Shop/${
              ImgHover ? x.imgHover : x.img
            }.avif`}
            alt=""
            className="pb-[5px]"
            onMouseEnter={() => setImgHover(true)}
            onMouseLeave={() => setImgHover(false)}
          />
        </Link>
        <h3 className="inline">
          <Link
            to={"/shoporder"}
            className="text-[#f2f2f2] inline hover:text-[#cecece]"
          >
            {x.name}
          </Link>
        </h3>
        <h3 className="inline">
          <Link to={"/shoporder"} className="text-white pt-[2px]">
            {x.price}
          </Link>
        </h3>
      </figure>
    </>
  );
};

export default ShopCards;
