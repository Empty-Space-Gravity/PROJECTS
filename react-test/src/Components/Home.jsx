import { useEffect, useState } from "react";
import axios from "axios";
import Editform from "./Editform";
export default function Home()   
{
    const [data ,setdata] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [deleteId , setDeleteId]= useState(undefined);

    useEffect(()=>{
        
        axios.get("https://dummyjson.com/products?limit=10")
        .then((res)=>setdata(res.data.products))
        .catch((err)=>console.log(err));
     
    },[]);


    function Updated_Data(new_data)
    {
       let updated_data= data.map((element)=>{
            return(
            (element.id == new_data.id) ? new_data: element
            );
        })

        setdata(updated_data);
    }

    function Delete_Data(id)
    {
        let deleted_data = data.filter((element)=> element.id !== id);
        setdata(deleted_data);
        setDeleteId(null);
    }

    return(
        <>
        <div className="flex justify-evenly items-center h-full w-250 flex-wrap gap-3 gap-y-15 content-center mt-5">
            {data.map((element)=>{  
                    return ( 
                        <div key={element.id} id={element.id} className="border border-amber-50 w-100 h-120 flex-column justify-center items-center rounded-2xl p-3">
                               <h1 className="text-white text-3xl mt-5">{element.title}</h1>
                                <p className="text-white text-2xl mt-3">{element.description}</p>
                                <p className="text-white text-2xl mt-3">{element.price}</p>
                                <button className="text-white me-5 mt-3 border border-grey-500 p-3 rounded-2xl" onClick={()=>setEditingId(element.id)}>Edit</button>
                                {editingId === element.id && (
                                    <Editform id={element.id} title={element.title} description={element.description} price={element.price} collect={Updated_Data} onClose={() => setEditingId(null)} />
                                )}
                                <button className="text-white border border-grey-500 p-3 rounded-2xl" onClick={()=>Delete_Data(element.id)}>Delete</button>

                         </div>
                    
                    );})}
                    
           </div>
        </>
    );
}