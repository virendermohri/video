// components/AdIframe.js
import React from "react";

const AdBanner = ({ src, width = "300", height = "250" }) => {
  return (
    <div className="my-4">
      <iframe
        src={src}
        width={width}
        height={height}
        scrolling="no"
        marginWidth="0"
        marginHeight="0"
        frameBorder="0"
        allow="autoplay"
        title="Ad"
      ></iframe>
    </div>
  );
};

export default AdBanner;
