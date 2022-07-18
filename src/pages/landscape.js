import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import ReactStars from "react-rating-stars-component";

export default function Landscape() {
  return (
    <>
      <Header />
      <section class="order-status-body">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="landscape-table">
              <div className="landscape-menu">

                <h1 class="financial-heading">Landscape</h1>
                <div class = "landscape-view">

                <button className="daysbtn active"> List View</button>
                  <button className="daysbtn"> Map View </button>
                </div>
              </div>


                {/* <form class="form-inline my-2 my-lg-0">
                  <input type="date" placeholder="From" />
                  <input type="date" placeholder="From" />

                  <button className="daysbtn active"> Last 30 Days</button>
                  <button className="daysbtn"> Last 60 Days</button>
                  <button className="daysbtn"> Last 90 Days</button>
                </form> */}

                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Restaurant Name</th>
                      <th scope="col">Location</th>
                      <th scope="col">Cuisine</th>

                      <th scope="col">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Bruegger's Bogeis</td>
                      <td>9000 Roosevelt Way NE, washigton</td>
                      <td>Indian</td>

                      <td>
                        <ReactStars
                          count={5}
                          value={5}
                          size={24}edit = {false}
                          activeColor="#ffd700"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Bruegger's Bogeis</td>
                      <td>9000 Roosevelt Way NE, washigton</td>
                      <td>Indian</td>

                      <td>
                        <ReactStars
                          count={5}
                          value={5}
                          size={24}edit = {false}
                          activeColor="#ffd700"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Bruegger's Bogeis</td>

                      <td>9000 Roosevelt Way NE, washigton</td>
                      <td>Indian</td>
                      <td>
                        <ReactStars
                          count={5}
                          value={5}
                          size={24}edit = {false}
                          activeColor="#ffd700"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Bruegger's Bogeis</td>

                      <td>9000 Roosevelt Way NE, washigton</td>
                      <td>Indian</td>
                      <td>
                        <ReactStars
                          count={5}
                          value={5}
                          size={24}edit = {false}
                          activeColor="#ffd700"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Bruegger's Bogeis</td>

                      <td>9000 Roosevelt Way NE, washigton</td>
                      <td>Indian</td>
                      <td>
                        <ReactStars
                          count={5}
                          value={5}
                          size={24}edit = {false}
                          activeColor="#ffd700"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Bruegger's Bogeis</td>

                      <td>9000 Roosevelt Way NE, washigton</td>
                      <td>Indian</td>
                      <td>
                        <ReactStars
                          count={5}
                          value={5}
                          size={24}edit = {false}
                          activeColor="#ffd700"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Bruegger's Bogeis</td>

                      <td>9000 Roosevelt Way NE, washigton</td>
                      <td>Indian</td>
                      <td>
                        <ReactStars
                          count={5}
                          value={5}
                          size={24}edit = {false}
                          activeColor="#ffd700"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Bruegger's Bogeis</td>

                      <td>9000 Roosevelt Way NE, washigton</td>
                      <td>Indian</td>
                      <td>
                        <ReactStars
                          count={5}
                          value={5}
                          size={24}edit = {false}
                          activeColor="#ffd700"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Bruegger's Bogeis</td>

                      <td>9000 Roosevelt Way NE, washigton</td>
                      <td>Indian</td>
                      <td>
                        <ReactStars
                          count={5}
                          value={5}
                          size={24}edit = {false}
                          activeColor="#ffd700"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Bruegger's Bogeis</td>

                      <td>9000 Roosevelt Way NE, washigton</td>
                      <td>Indian</td>
                      <td>
                        <ReactStars
                          count={5}
                          value={5}
                          size={24}edit = {false}
                          activeColor="#ffd700"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Bruegger's Bogeis</td>

                      <td>9000 Roosevelt Way NE, washigton</td>
                      <td>Indian</td>
                      <td>
                        <ReactStars
                          count={5}
                          value={5}
                          size={24}edit = {false}
                          activeColor="#ffd700"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Bruegger's Bogeis</td>

                      <td>9000 Roosevelt Way NE, washigton</td>
                      <td>Indian</td>
                      <td>
                        <ReactStars
                          count={5}
                          value={5}
                          size={24}edit = {false}
                          activeColor="#ffd700"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Bruegger's Bogeis</td>

                      <td>9000 Roosevelt Way NE, washigton</td>
                      <td>Indian</td>
                      <td>
                        <ReactStars
                          count={5}
                          value={5}
                          size={24}edit = {false}
                          activeColor="#ffd700"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
