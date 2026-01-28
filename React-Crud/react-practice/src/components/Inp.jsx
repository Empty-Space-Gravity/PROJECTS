import { useState } from "react";

export default function Inp(props)
{
    const [Newdata , setNewdata] = useState({
        id:props.id,
        title:props.title,
        description:props.description,
        price:props.price
    })

    function senddata()
    {
        props.onupdate(Newdata);
    }
    return (
        <>
                <div className="input-container absolute left-200 top-50 border border-white p-5 rounded-3xl">
                    <input type="text" className="bg-black mb-5 p-5 rounded-full border border-white text-white" placeholder="title" value={Newdata.title} onChange={(e)=>setNewdata({...Newdata,title:e.target.value})}/>
                    <br />
                    <input type="text" className="bg-black mb-5 p-5 rounded-full border border-white text-white" placeholder="description" value={Newdata.description}  onChange={(e)=>setNewdata({...Newdata,description:e.target.value})}/>
                    <br />
                    <input type="text" className="bg-black mb-5 p-5 rounded-full border border-white text-white" placeholder="price" value={Newdata.price}  onChange={(e)=>setNewdata({...Newdata,price:e.target.value})}/>
                    <br />
                    <button className="rounded-full ml-15" onClick={senddata} style={{backgroundColor:"white", color:"black"}}>change</button>
                </div>        
        </>
    );
}