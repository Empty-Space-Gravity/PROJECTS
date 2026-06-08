import CarCard from "./CarCard";

export default function Cars({ refreshData, refresh }) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-white">Your Collection</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <CarCard refreshData={refreshData} refresh={refresh} /> 
      </div>
    </div>
  );
}
