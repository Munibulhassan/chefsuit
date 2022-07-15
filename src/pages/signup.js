import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'

export default function Signup() {
  return (
    <>
      <Header />

      <section class="login_body">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="login-card">
                    <h2>Want to sign Up?</h2>
                    <p>There are many variations of passages of Lorem</p><p> Ipsum available, but the majority have suffered</p><p> alteration in some form, by injected humour, or</p><p> randomised words which don't look even slightly</p><p> believable. If you are going to use a passage of</p><p> Lorem Ipsum, you need to be sure there isn't</p><p> anything embarrassing hidden in the middle of </p><p> text.</p>                        <button type="submit" class="btn btn-primary">Contact Us Now</button>
                      
                </div>
            </div>
        </div>
    </div>
</section>
      <Footer />
    </>
  )
}
