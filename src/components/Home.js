import React from "react";
const Home = () => {
  return (
    <>
      <div className="add_to_cart">
        <img src="https://cdn.onlinewebfonts.com/svg/img_260077.png" />
      </div>
      <h1> Home Components </h1>
      <div className="cart_wrapper">
        <div className="img_wrapper item">
          <img src="https://source.unsplash.com/random" />
        </div>

        <div className="text_wrapper item">
          <span> random Image price:</span>
          <span> $1000 </span>
        </div>
        <div className="btn_wrapper item">
          <button> add to card </button>
        </div>
      </div>
    </>
  );
};
export default Home;
