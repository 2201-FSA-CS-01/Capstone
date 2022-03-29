import { useAppContext } from '../../components/context/state';

function PhysicalMeter() {
  const myContext = useAppContext();
  return (
    <>
      <div className="mx-4 mt-4 border-2 border-white rounded-full lg:h-8 ">
        <div
          style={{ width: `${myContext.physicalValue}%` }}
          className="bg-gradient-to-r from-yellow-400 via-gold-500 to-red-500  h-2.5 rounded-full ease-in duration-700 lg:h-7"
        ></div>
      </div>
    </>
  );
}

export default PhysicalMeter;
