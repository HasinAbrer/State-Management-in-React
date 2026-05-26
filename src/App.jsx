// import DaisyNav from "./components/DaisyNav/DaisyNav";
import LineChart from "./components/LineChart/LineChart";
import Navbar from "./components/Navbar/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

export default function App() {
  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <Navbar></Navbar>
      <h1 className="text-xl font-bold underline bg-red-800">Hasin Abrer</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  );
}
