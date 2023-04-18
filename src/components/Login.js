import React ,{useState}from "react";
import {useNavigate} from "react-router-dom";



const Login = (props) => {
    let navigate = useNavigate();
    const [credentials, setcredentials] = useState({email:"",password:""})
   const handleSubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password}),
          })
          const json = await response.json();
          console.log(json)
          if(json.success){
              //Save the auth token and redirect
              localStorage.setItem('token',json.authtoken);
              navigate("/upload");
              props.showAlert("Logged in successfully","success")
              
            }
            else
            props.showAlert("Invalid Login details","danger")
          
   }
   
   const onChange = (e) => {
    setcredentials({...credentials,[e.target.name]:e.target.value});
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={credentials.email}
            onChange={onChange}
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={credentials.password.length===0}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
