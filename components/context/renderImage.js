import { useAppContext } from './state.js';

import Image from 'next/image';

import heart from '../../public/images/heart.gif';
import brain from '../../public/images/brain.gif';
import dumbbell from '../../public/images/dumbbell.gif';
import storm from '../../public/images/storm.gif';
import stars from '../../public/images/stars.gif';

export default function renderImage() {
  const myContext = useAppContext();
  if (
    myContext.emotionalValue <= 25 &&
    myContext.mentalValue <= 25 &&
    myContext.physicalValue <= 25
  ) {
    return (
      <div className="absolute mb-40">
        <Image src={storm} alt="" width={140} height={130} />
      </div>
    );
  } else if (myContext.emotionalValue <= 25) {
    return (
      <div className="absolute mb-40">
        <Image src={heart} alt="" width={70} height={60} />
      </div>
    );
  } else if (myContext.mentalValue <= 25) {
    return (
      <div className="absolute mb-40">
        <Image src={brain} alt="" width={50} height={50} />
      </div>
    );
  } else if (myContext.physicalValue <= 25) {
    return (
      <div className="absolute mb-40">
        <Image src={dumbbell} alt="" width={90} height={80} />
      </div>
    );
  } else if (
    myContext.emotionalValue === 100 &&
    myContext.mentalValue === 100 &&
    myContext.physicalValue === 100
  ) {
    return (
      <div className="absolute lg:w-72 lg:h-72">
        <Image src={stars} alt="" width={500} height={380} />
      </div>
    );
  }
}
