// components/AdIframe.js
import React from "react";

const AdBanner = ({ src }) => {
  return (
    <div className=" max-w-4xl mx-auto m-2 p-4">
      <iframe
        src={"//a.magsrv.com/iframe.php?idzone=5626584&size=728x90"}
        width="100%"
        height="90"
       className=""
        scrolling="no"
        marginWidth="0"
        marginHeight="0"
        frameBorder="0"
        allow="autoplay"
        title="Ad"
      >nj</iframe>
        
{/* <iframe src="//a.magsrv.com/iframe.php?idzone=5626584&size=728x90" width="728" height="90" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe> */}
    </div>
  );
};

export default AdBanner;
