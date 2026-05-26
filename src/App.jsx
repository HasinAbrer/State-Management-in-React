// import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navbar from "./components/Navbar/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

export default function App() {
  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <Navbar></Navbar>
      <h1 className="text-xl font-bold underline bg-red-800">Hasin Abrer</h1>
      <PriceOptions></PriceOptions>
    </>
  );
}
