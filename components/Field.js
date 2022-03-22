import Image from 'next/image';
import Goals from '../components/Goals';

import forest from '../public/images/image.png';
import tomo from '../public/images/tomo.gif';
import heart from '../public/images/heart.gif';
import stars from '../public/images/stars.gif';

import Icons from './Icons';
import Navbar from './Navbar';
import React, { useState, useEffect } from 'react';

function Field() {
  //add useState and useEffect to re-render component onClick??
  return (
    <>
      <div className="flex items-end justify-center ">
        <Image src={forest} alt="" height={1400} className="rounded-sm" />
        <div className="absolute mb-12 ">
          {/* <div className="absolute">
            <Image src={stars} />
          </div> */}
          <Image src={tomo} alt="" width={90} height={70} />
        </div>
        <div className="absolute mb-40">
          <Image src={heart} alt="" width={50} height={50} />
        </div>
      </div>
    </>
  );
}

export default Field;
