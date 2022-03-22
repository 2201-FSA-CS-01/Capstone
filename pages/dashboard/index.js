import Field from '../../components/Field.js';
import Goals from '../../components/Goals.js';
import Navbar from '../../components/Navbar.js';
import Icons from '../../components/Icons.js';

export default function Home() {
  return (
    <div className="flex flex-col h-screen ">
      <Icons />
      <Field />
      <div className="flex flex-col items-center justify-center h-full">
        <div className="w-full m-auto">
          <Goals />
          {/* <Goals />
          <Goals /> */}
        </div>
      </div>

      <Navbar />
    </div>
  );
}
