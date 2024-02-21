import React from "react";

const Footer = (props) => {
  return (
    <footer
      className={`bg-${props.bg} py-5 text-center text-sm font-exo2 max-mb425:text-[13px]`}
      style={{ color: `${props.color}` }}
    >
      Tesla &copy; 2024 | All Rights Reserved | Made By Shilok.k
    </footer>
  );
};

export default Footer;
