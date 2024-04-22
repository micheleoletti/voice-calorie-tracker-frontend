import Navbar from "./components/Navbar/Navbar";
import SummaryCard from "./components/SummaryCard";

export default function Home() {
  return (
    <main className="">
      <Navbar />

      <div className="flex p-4 gap-6 justify-center">
        <SummaryCard
          title="Energy"
          currentValue={860}
          maxValue={1670}
          unit="kcal"
        />

        <SummaryCard title="Protein" currentValue={25} maxValue={50} unit="g" />
        <SummaryCard title="Carbs" currentValue={60} maxValue={100} unit="g" />
        <SummaryCard title="Fat" currentValue={90} maxValue={70} unit="g" />
      </div>
    </main>
  );
}
