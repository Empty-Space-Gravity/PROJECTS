import { useState } from "react";

export default function Editform(props)
{
    const [data,setdata]= useState({
        id:props.id,
        title:props.title,
        description:props.description,
        price:props.price,
    })


    function handovernewdata()
    {
        props.collect(data);
    }
    return(
        <>
        <div className="form-container h-120 w-100 absolute left-250 bottom-90 border border-white rounded-3xl flex-column bg-gray-900">
            <button className="bg-white text-black p-2 rounded-xl absolute left-90 w-10" onClick={()=>props.onClose()}>X</button>
            <input type="text" placeholder="Title" value={data.title} onChange={(e)=>setdata({...data,title:e.target.value})} className="text-white border border-white p-3 pe-35 rounded-xl relative left-8 top-10"/>
            <textarea rows={6} cols={43} value={data.description} className="text-white rounded-2xl relative left-7 top-15 border border-white" onChange={(e)=>setdata({...data,description:e.target.value})}></textarea>
            <input type="text" placeholder="price" value={data.price} className="text-white border border-white p-3 pe-35 rounded-xl  relative left-8 top-20" onChange={(e)=>setdata({...data,price:e.target.value})}/>
            <button className="text-black text-uppercase absolute top-89 right-7 border border-white bg-white p-3 w-85 rounded-2xl" style={{fontWeight:"bold"}} onClick={handovernewdata}>Change</button>
        </div>

        </>
    );
}
