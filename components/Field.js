import Image from "next/image";

import forest from "../public/images/image.png";
import tomo from "../public/images/tomo.gif";

import renderImage from "./context/renderImage";

function Field() {
  return (
    <>
      <div className="flex items-end justify-center mt-4 lg:row-start-1 lg:row-end-1 lg:col-span-1">
        <Image src={forest} alt="" height={1400} className="rounded-md " />
        <div className="absolute mb-12 ">
          <Image src={tomo} alt="" width={90} height={70} />
        </div>
        {renderImage()}
      </div>
    </>
  );
}

export default Field;
