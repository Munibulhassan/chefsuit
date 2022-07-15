import React from "react";
import logo from "../Assets/logo.png";
import profile from "../Assets/profile-icon.png"
import {  useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation()

  return (
    <section class="nav_bar">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <nav class="navbar navbar-light bg-light">
            <span class="nav-left-side">
                            <a class="navbar-brand" href="/"><img src={logo}/></a>
                            <nav class="navbar-expand-lg">
                                <div class="collapse navbar-collapse" id="navbarNav">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a class={location.pathname =="/order"? "nav-link active":"nav-link" } href="/order">Order Status <span
                                                    class="sr-only">(current)</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class={location.pathname =="/financial"? "nav-link active":"nav-link" } href="/financial">Financial Report</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class={location.pathname =="/landscape"? "nav-link active":"nav-link" } href="/landscape">Landscape</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </span>
{(location.pathname != "/" || location.pathname != "/login" ||location.pathname != "/signup") ?(
    <span>
                            <span class="no_account">
                                Chef Store
                            </span>
                            <img class="profile_logo" src={profile}/>
                        </span>
):(

              <span>
                <span class="no_account">No Account?</span>
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                  href="/signup"
                >
                  Sign Up
                </button>
              </span>
)}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
