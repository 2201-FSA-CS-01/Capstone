import { useAppContext } from '../../components/context/state';

function PhysicalMeter() {
  const myContext = useAppContext();
  return (
    <>
      <div className="flex justify-between mt-4 ">
        {/* o: remove if not being used */}
        {/* <span className="mx-4 text-base font-medium text-white">
          Physical Health
        </span> */}
      </div>
      <div className="mx-4 border-2 border-white rounded-full ">
        <div
          style={{ width: `${myContext.physicalValue}%` }}
          className="bg-gradient-to-r from-yellow-400 via-gold-500 to-red-500  h-2.5 rounded-full ease-in duration-700"
        ></div>
      </div>
    </>
  );
}

export default PhysicalMeter;
