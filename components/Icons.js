function Icons() {
  return (
    <div className="row-span-1 h-50px">
      <div className="grid grid-cols-3 mt-4 mb-4 ">
        <div className="grid items-center justify-items-center gap-y-0.5 ">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-blue-500"></div>
          <div className="text-yellow-50">9</div>
        </div>
        <div className="grid items-center b justify-items-center ">
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 via-gold-500 to-red-500 rounded-full   gap-y-0.5"></div>
          <div className="text-yellow-50">9</div>
        </div>
        <div className="grid items-center justify-items-center ">
          <div className="w-16 h-16 rounded-full  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 gap-y-0.5"></div>
          <div className="text-yellow-50">9</div>
        </div>
      </div>
    </div>
  );
}

export default Icons;
