import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'


export default function Login() {
  return (
    <>
    <Header/>
    
    <section class="login_body">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="login-card">
                    <h2>Welcome to ChefSuite</h2>
                    <p>Hey, Enter your details to get sign in to<br/> your Account</p>
                    <form class="login-form">
                        <div class="form-group">
                          <label for="exampleInputEmail1">Email Address</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div class="form-group form-check">
                          <a href="#">Forgot Password?</a>
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                      </form>
                </div>
            </div>
        </div>
    </div>
</section>
    <Footer/>

    </>
  )
}
