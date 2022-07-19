import React from "react";
import logo from "../Assets/logo.png";
import profile from "../Assets/profile-icon.png";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate()
  
  console.log(location.pathname.toLowerCase())
  return (
    <section class="nav_bar">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <nav class="navbar navbar-light bg-light">
              <span class="nav-left-side">
                <a class="navbar-brand" href="/">
                  <img src={logo} />
                </a>
                {(location.pathname != "/" &&
      location.pathname.toLowerCase() != "/login" &&
      location.pathname.toLowerCase() != "/signup")?(
                <nav class="navbar-expand-lg">
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a
                          class={
                            location.pathname.toLowerCase()== "/order"
                              ? "nav-link active"
                              : "nav-link"
                          }
                          href="/order"
                        >
                          Order Status <span class="sr-only">(current)</span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class={
                            location.pathname.toLowerCase()== "/financial"
                              ? "nav-link active"
                              : "nav-link"
                          }
                          href="/financial"
                        >
                          Financial Report
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class={
                            location.pathname.toLowerCase()== "/landscape"
                              ? "nav-link active"
                              : "nav-link"
                          }
                          href="/Landscape"
                        >
                          Landscape
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>

      ):null}
              </span>
              {location.pathname == "/" || location.pathname == "/login" ? (
                <span>
                  <span class="no_account" onClick={()=>navigate('/signup')}>No Account?</span>
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                  onClick={()=>{navigate('/signup')}}  
                    
                  >
                  

                    Sign Up
                  
                  </button>
                </span>
              ) : location.pathname == "/signup" ? (
                <span>
                  <span class="no_account"
                    onClick={()=>{navigate('/login')}}  
                  
                  >I have an Account?</span>
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    
                    onClick={()=>{navigate('/login')}}  

                  >
                    Login
                  </button>
                </span>
              ) : (

                <span>
                  <span class="no_account">Chef Store</span>
                  <img class="profile_logo" style={{ cursor:'pointer'}} 
                  onClick={()=>{navigate('/profile')}}  
                  
                  src={profile} />
                </span>
              )}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
