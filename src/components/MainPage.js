import React from "react";
import "./MainPage.css";
import vitya from "../images/Viktor.png";

function MainPage() {
  // retrieve collection pieces
  // function getCollection() {
  //   const options = { method: "GET" };

  //   fetch(
  //     "https://api.opensea.io/api/v1/asset/0x2953399124F0cBB46d2CbACD8A89cF0599974963/25209957352803840959337966707719050265266420505874604522513456907887111569409",
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(err));
  // }
  return (
    <div className="container">
      <h1 className="intro">Blurred Pixels</h1>
      <p className="description">intro</p>
      <button className="toGallery">See the collection</button>
      <div className="teaserContainer">
        <img className="teaser" src={vitya} />
      </div>
    </div>
  );
}

export default MainPage;
