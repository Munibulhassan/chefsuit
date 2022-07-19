import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import profile from '../Assets/profile-img.png'
export default function Profile() {
  return (
    <>
      <Header />
      <section class="order-status-body">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="cover-bg"></div>
                        <div class="profile-img-txt">
                            <div class="img-container">
                                <img src={profile}/>      
                                <p>Edit</p>
                            </div>
                            <div class="txt-container">
                                <h1>Bruegger's Bagels</h1>
                                <p>Brueggersbagels@gmail.com</p>
                            </div>
                            <hr class="hr-line"/>
                        </div>
                
            <div class="col-md-8 hub-location">
                <h3 class="hub-location-heading">Hub location</h3>

                <div class="row hub-location-cards">
                    <div class="col-sm-6">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">HUb 1</h5>
                          <p class="card-text">9000 Roosevelt Way NE,<br/> Washington</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">HUb 2</h5>
                          <p class="card-text">9000 Roosevelt Way NE,<br/> Washington</p>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>

            <div class="row password_container">
                <div class="col-md-6">
                    <div>
                        <h3>Current Password</h3>
                        <form>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" placeholder="******************" id="exampleInputPassword1" />
                                <button class="btn btn-primary">Change Password</button>
                              </div>
                        </form>
                    </div>
                </div>
            </div>

                </div>
            </div>
        </div>
    </section>

      <Footer />
    </>
  );
}
