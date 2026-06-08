import { useState } from "react";
import Cars from "./components/Cars";
import "./App.css";
import axios from "axios";

const DEMO_CARS = [
  { carname: "Porsche 911 GT3 RS", carimg: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop" },
  { carname: "Mercedes-AMG GT", carimg: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop" },
  { carname: "BMW M8 Competition", carimg: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop" },
  { carname: "Audi R8 V10", carimg: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?q=80&w=2072&auto=format&fit=crop" },
  { carname: "McLaren 765LT", carimg: "https://images.unsplash.com/photo-1621244249243-f5a0ed712028?q=80&w=2071&auto=format&fit=crop" }
];

function App() {
  const [data, setdata] = useState({ carname: "", carimg: "" });
  const [refresh, setRefresh] = useState(0);
  const [isSeeding, setIsSeeding] = useState(false);
  
  const refreshData = () => setRefresh(prev => prev + 1);

  async function seedDemoData() {
    setIsSeeding(true);
    try {
      for (const car of DEMO_CARS) {
        await axios.post("http://localhost:8080/cardata", car);
      }
      refreshData();
    } catch (error) {
      console.error("Error seeding data:", error);
    } finally {
      setIsSeeding(false);
    }
  }

  function SendToDb() {
    if(!data.carname) return; // Allow submission without image, we will handle fallback in CarCard
    axios.post("http://localhost:8080/cardata", data)
      .then(() => {
        setdata({ carname: "", carimg: "" }); // reset
        refreshData();
      })
      .catch((error) => console.log(`There Was An Error While Sending...♾️${error}`));
  }

  function handdata(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }

  function handlesubmit(e) {
    e.preventDefault();
    SendToDb();
  }
  
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-amber-500 selection:text-black relative overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Premium Header */}
      <header className="px-8 py-5 border-b border-white/5 bg-black/60 backdrop-blur-2xl sticky top-0 z-50 flex justify-between items-center shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-200 to-yellow-600 flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.3)]">
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <h1 className="text-2xl font-bold tracking-widest uppercase bg-gradient-to-r from-amber-100 via-amber-300 to-yellow-600 bg-clip-text text-transparent" style={{ fontFamily: "clash" }}>
            Luxe Motors
          </h1>
        </div>

        <button 
          onClick={seedDemoData}
          disabled={isSeeding}
          className="cursor-pointer px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 text-sm font-medium tracking-wide disabled:opacity-50 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          {isSeeding ? (
            <span className="animate-pulse text-amber-200">Generating Collection...</span>
          ) : (
            <>
              <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
              Generate Demo Data
            </>
          )}
        </button>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 py-12 flex flex-col xl:flex-row gap-16 relative z-10">
        
        {/* Form Section */}
        <div className="w-full xl:w-[400px] shrink-0">
          <div className="bg-[#111111]/80 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl sticky top-32 group">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <h2 className="text-2xl font-light tracking-wide mb-8 text-white/90">Add to <span className="font-semibold text-amber-400">Collection</span></h2>
            
            <form onSubmit={handlesubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-widest text-gray-400 uppercase ml-1">Vehicle Name</label>
                <input
                  type="text"
                  placeholder="e.g. Aston Martin DBS"
                  name="carname"
                  value={data.carname}
                  onChange={handdata}
                  className="w-full bg-black/50 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all font-light"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-widest text-gray-400 uppercase ml-1">Image URL (Optional)</label>
                <input
                  type="text"
                  placeholder="https://..."
                  name="carimg"
                  value={data.carimg}
                  onChange={handdata}
                  className="w-full bg-black/50 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all font-light"
                />
              </div>

              <button
                type="submit"
                className="cursor-pointer w-full bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 hover:from-amber-500 hover:via-yellow-400 hover:to-amber-400 text-black rounded-2xl py-4 font-bold text-lg transition-all duration-500 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] active:scale-[0.98] mt-6 tracking-wide"
              >
                Save Vehicle
              </button>
            </form>
          </div>
        </div>

        {/* List Section */}
        <div className="w-full xl:w-[calc(100%-464px)]">
          <Cars refreshData={refreshData} refresh={refresh} />
        </div>
        
      </main>
    </div>
  );
}

export default App;
