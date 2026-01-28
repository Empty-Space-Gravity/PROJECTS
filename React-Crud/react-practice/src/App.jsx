import axios from "axios"
import "./style.css"
import { useEffect, useState } from "react"
import Card from "./components/Card";
import Cart from "./components/Cart";
import { FaShoppingCart } from "react-icons/fa";

function App() {

  const [Newdata, setNewdata] = useState([]);

  const [count,setcount] = useState(0);

  const [cartdata,setcartdata]= useState([]);

  const[showcart ,setshowcart]= useState(false);

  const [data,setdata]=useState({

  
  })

  
  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=10")
      .then((res) => setNewdata(res.data.products))
      .catch((err) => console.log(err))
  }, [])

  function handlecount()
  {
    setcount(count+1);
  }
  function handleupdateddata(updated_data) {
    setNewdata((prev) => {
      return prev.map((element) => {
        return element.id === updated_data.id ? updated_data : element;
      });
    });
  }

  function handledeletedata(id) {
    setNewdata((prev) => prev.filter((element) => element.id !== id));
  }

  function handlecartdata(ctdata)
  {
      setcartdata((prev)=>[...prev,ctdata]);
  }

  function handledata()
  {
      let lastId = Newdata.length > 0 ? Newdata[Newdata.length - 1].id : 0;
      let newcard = {
        id: lastId + 1,
        title: data.title,
        description: data.description,
        price: data.price
      }
      setNewdata([...Newdata, newcard]);
  }
  function handlesubmit(e)
  {
    e.preventDefault();
  }

  
  return (

  <>
    <div className="container">
      {Newdata.map((element) => {
        return (
          <Card key={element.id} id={element.id} title={element.title} description={element.description} price={element.price} onupdate={handleupdateddata} ondelete={handledeletedata} onadd={handlecount} cart={handlecartdata}/>
        );
      })}
    </div>

    <div className="data-card-container bg-black h-130 w-100 absolute left-190 bottom-80 border border-white flex flex-column gap-10 items-center justify-center rounded-xl">
          <h1 className="text-white absolute bottom-105 left-30 text-3xl">Card Details</h1>
                <form onSubmit={handlesubmit}>
                    <input type="text" placeholder="Enter Title" onChange={(e)=>setdata({...data,title:e.target.value})} className="text-white border border-white p-3 mb-5 rounded-xl w-80"/>
                    <br />
                    <input type="text" placeholder="Enter Description"  onChange={(e)=>setdata({...data,description:e.target.value})}  className="text-white border border-white rounded-xl p-3 mb-5 w-80"/>
                    <br />
                    <input type="text" placeholder="Enter Price"  onChange={(e)=>setdata({...data,price:Number(e.target.value)})} className="text-white border border-white rounded-xl p-3 mb-5 w-80"/>
                    <br />
                    <button onClick={handledata} className="text-black w-80 bg-white rounded-2xl" style={{backgroundColor:"white" , color:"black"}}>Add New Card</button>
                </form>
    </div>
      <h1 className="text-3xl bg-red-500 text-white pe-2 ps-2" style={{position:"absolute",top:"40px" , left:"95.5%" ,borderRadius:"50%",zIndex:"1"}}>{count}</h1>
      <button style={{position:"absolute",top:"50px" , left:"93.7%"}} className="rounded-3xl text-3xl outline-none border-none" onClick={()=>setshowcart(true)}><FaShoppingCart /></button>
      {
        showcart && <Cart dataforcart={cartdata} onClose={()=>setshowcart(false)}/>
      }
    </>
  )
}

export default App

