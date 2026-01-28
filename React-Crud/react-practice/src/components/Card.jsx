import "./style.css"
import Inp from "./Inp";
import { useState } from "react";

export default function Card(props){
    
    const [editing ,setediting] =useState(false);

    function handle()
    {
        props.onadd()
        props.cart({id:props.id,title:props.title,description:props.description,price:props.price});
    }
    return(
        <>
            <div className="content-cards border border-white rounded-2xl" id={props.id}> 
                <h1 className="text-white text-3xl">{props.title}</h1>
                <p className="text-amber-300"  style={{textAlign:"justify"}}>{props.description}</p>
                <p className="text-sm">{props.price}</p>
                <button onClick={()=>{setediting(true)}} className="p-5 me-3 mt-2 rounded-3xl border-none text-lg">edit</button>
                {editing && <Inp id={props.id} title={props.title} description={props.description} price={props.price} onupdate={props.onupdate}/>}
                <button onClick={()=>props.ondelete(props.id)} className="p-5 me-3 rounded-3xl border-none text-lg">delete</button>
                <button className="mt-2" onClick={handle}>Add to Cart</button>

            </div>
        
        </>
    );
    
}

