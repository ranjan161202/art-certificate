import React from "react";
import { Link ,useLocation,useNavigate} from "react-router-dom";


const Navbar = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const LogoutHandle = ()=>{
      localStorage.removeItem("token");
      navigate("/login")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <a className="navbar-brand" href="/">
          BlockChain Art Certificate
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="nav navbar-right">

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
        {console.log(localStorage.getItem("token"))}
                {
              !localStorage.getItem("token")?
                  
                  <form className="d-flex">
                    
                    <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
                    <Link className="btn btn-primary mx-2" to="/signup" role="button">SignUp</Link>
                  
                
                </form>
                  :
                  <form>
                      <Link className="btn btn-primary mx-2" to="/transactions">My Transactions</Link>
                      <button className="btn btn-primary mx-2" onClick={LogoutHandle}>Logout</button>
                  </form>}
          </div>
          </div>
          </div>
      </nav>
    </>
  );
};

export default Navbar;
