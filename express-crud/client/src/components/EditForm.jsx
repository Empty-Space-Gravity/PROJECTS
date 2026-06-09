import axios from "axios";
import { useState } from "react";

export default function EditForm({carid,carname = "", carimg = "", onClose, setLocalRefresh}){

    const [data,setdata]=useState({ carid, carname, carimg });
 
    function handledata(e){
        setdata({...data,[e.target.name]:e.target.value});
    }

    function SaveToDb(){
        axios.patch(`/updatecar/${carid}`,data)
        .then(() => {
            setLocalRefresh(prev => prev + 1);
        })
        .catch((error) => console.log(`There was an error while updating...${error}`));
    }

    function handleSubmit(e){
        e.preventDefault();
        if(onClose) onClose();
    }

    return(
        <div className="absolute inset-0 z-20 bg-black/80 backdrop-blur-xl flex flex-col justify-center p-6 animate-in fade-in zoom-in duration-300">
            <h3 className="text-xl font-light text-white mb-6 tracking-wider">Edit <span className="font-semibold text-amber-400">Vehicle</span></h3>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs font-semibold tracking-widest text-gray-400 mb-1 block uppercase">Brand & Model</label>
                  <input 
                    value={data.carname} 
                    type="text" 
                    placeholder="e.g. BMW M4" 
                    name="carname" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all text-sm font-light" 
                    onChange={handledata}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold tracking-widest text-gray-400 mb-1 block uppercase">Image URL</label>
                  <input 
                    value={data.carimg} 
                    type="text" 
                    placeholder="https://..." 
                    name="carimg" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all text-sm font-light" 
                    onChange={handledata}
                  />
                </div>
                
                <div className="flex gap-3 pt-3">
                    <button 
                      className="cursor-pointer flex-1 bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 hover:from-amber-500 hover:to-amber-400 text-black rounded-xl py-3 font-bold text-sm tracking-wide transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)]" 
                      type="submit" 
                      onClick={SaveToDb}
                    >
                      Save
                    </button>
                    <button 
                      type="button" 
                      className="cursor-pointer flex-1 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl py-3 font-medium tracking-wide text-sm transition-all" 
                      onClick={() => onClose && onClose()}
                    >
                      Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}