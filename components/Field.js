import Image from 'next/image';

import forest from '../public/images/image.png';
import tomo from '../public/images/tomo.gif';
import heart from '../public/images/heart.gif';
import brain from '../public/images/brain.gif';
import dumbbell from '../public/images/dumbbell.gif';

import Navbar from './Navbar';
import React, { useState, useEffect } from 'react';

function Field() {
  //add useState and useEffect to re-render component onClick??
  return (
    <>
      <div className="flex items-end justify-center mt-4">
        <Image src={forest} alt="" height={1400} className="rounded-md " />
        <div className="absolute mb-12 ">
          <Image src={tomo} alt="" width={90} height={70} />
        </div>
        <div className="absolute mb-40">
          <Image src={heart} alt="" width={50} height={50} />
        </div>
        {/* <div className="absolute mb-40">
          <Image src={brain} alt="" width={50} height={50} />
        </div> */}
        {/* <div className="absolute mb-40">
          <Image src={dumbbell} alt="" width={70} height={60} />
        </div> */}
      </div>
    </>
  );
}

export default Field;
