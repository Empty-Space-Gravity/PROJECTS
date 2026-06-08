import axios from "axios";
import { useEffect, useState } from "react";
import EditForm from "./EditForm";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop";

export default function CarCard({ refreshData, refresh }){

    const [data,setdata] = useState([]);
    const [editingId,setEditingId]=useState(null);
    const [localRefresh, setLocalRefresh] = useState(0);
    
    useEffect(()=>{     
        axios.get("http://localhost:8080/cars")
        .then((response)=>setdata(response.data))
        .catch((error)=>console.log(`there was an error while fetching..${error}`));
    },[localRefresh, refresh]);

    
    function DeleteCard(id){
        axios.delete(`http://localhost:8080/deletecar/${id}`)
        .then(()=>{
            setdata(prev => prev ? prev.filter(item => item._id !== id) : []);
            console.log(`Car Has Been Successfully Deleted...`);
        })
        .catch((error)=>console.log(`There Was An Error While Deleting...${error}`));
    }

    
    return (
        <>
            {data?.map((element)=>{
                return (
                    <div key={element._id} className="group relative bg-[#111111]/80 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-2 flex flex-col">
                        
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                        <div className="relative h-64 w-full overflow-hidden bg-black/50">
                            <img 
                              src={element.carimg || FALLBACK_IMAGE} 
                              alt={element.carname}
                              onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_IMAGE; }}
                              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/30 to-transparent"></div>
                        </div>
                        
                        <div className="p-7 flex flex-col flex-grow relative z-10">
                          <h3 className="text-2xl font-light text-white mb-6 tracking-wide">{element.carname}</h3>
                          
                          <div className="mt-auto flex gap-3">
                            <button 
                              className="cursor-pointer flex-1 bg-white/5 hover:bg-white/10 text-white rounded-xl py-3 text-sm font-medium tracking-wide transition-all border border-white/10 hover:border-white/20" 
                              onClick={()=>{setEditingId(prev => prev === element._id ? null : element._id);}}
                            >
                              Edit Details
                            </button>
                            <button 
                              className="cursor-pointer flex-1 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-xl py-3 text-sm font-medium tracking-wide transition-all" 
                              onClick={()=>DeleteCard(element._id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>

                        {editingId === element._id && (
                            <EditForm carid={element._id} carname={element.carname} carimg={element.carimg} onClose={() => setEditingId(null)} setLocalRefresh={setLocalRefresh}/>
                        )}
                    </div>
                );
            })}
        </>
    );

}