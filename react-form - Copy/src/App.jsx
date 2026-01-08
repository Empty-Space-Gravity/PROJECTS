import {  useState } from "react";
import "./App.css";
function App() {
  const [data, setdata] = useState({
    name: "",
    password: "",
    email:"",
    gender:"",
  });
  
  const handlesubmit = (e)=>{
    e.preventDefault();
    localStorage.setItem('User-Details' , JSON.stringify(data));
  }

  const handledata = (e) => { 
    const {name , value} = e.target;
    setdata({...data,[name]:value});
  }

  return (
    <>
      <main>
        <div className="form-wrapper">
          <form className="form-card" onSubmit={handlesubmit}>
            <h2 className="form-title">Register</h2>

            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" name="name" onChange={(e)=>handledata(e)} />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" name="email" onChange={(e)=>handledata(e)}/>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter password" name="password" onChange={(e)=>handledata(e)}/>
            </div>

            <div className="form-group">
              <label>Gender</label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="gender" value="male" onChange={(e)=>handledata(e)}/> Male
                </label>
                <label>
                  <input type="radio" name="gender" value="female" onChange={(e)=>handledata(e)}/> Female
                </label>
                <label>
                  <input type="radio" name="gender" value="other" onChange={(e)=>handledata(e)}/> Other
                </label>
              </div>
            </div>

            <button className="submit-btn">Submit</button>
          </form>
        </div>
      </main>
    </>
  );
}


export default App;
