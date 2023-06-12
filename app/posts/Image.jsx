import React, { useState } from "react";
import backgroundImage from "../../public/image-loading.gif"; //SHOUDL BE REPLACED WITH AN ACTUAL IMAGE
//accepts the width prop, the src prop, and the aspect ratio prop

const Image = ({ width, src, ar }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div
      style={{
        width: width, //width is passed in as a prop
        aspectRatio: ar, //aspect ratio is passed in as a prop
        overflow: "hidden", //overflow is set to hidden so that the image doesn't overflow the div
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* object fit is set to cover so that the image fills the div */}
      <img
        src={src}
        style={{
          objectFit: "cover",
          height: "100%",
          display: isLoading ? "none" : "block",
        }}
        onLoad={handleImageLoad} //sets display property of the image only when its done loading
      />
    </div>
  );
};

export default Image;
