import React, { useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import ReactStars from "react-rating-stars-component";

export default function Landscape() {
  const [table,settable]= useState(true)
  return (
    <>
      <Header />
      <section class="order-status-body">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="order-status-table">
                <div class="heading-btn-box">
                  <span class="heading-and-date">
                    <h1 class="order-status-heading">Landscape</h1>
                  </span>

                  <span class="view-btns">
                    <button class="daysbtn" onClick={()=>settable(true)}> List View</button>
                    <button class="daysbtn"  onClick={()=>settable(false)}> Map View </button>
                  </span>
                </div>

                <div class="map-locator">
                  <span class="map-selector distance">
                    <p>Distance</p>

                    <div class="btn-group">
                      <button
                        class="btn  btn-sm dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Select
                      </button>
                      <div class="dropdown-menu">...</div>
                    </div>
                  </span>

                  <span class="map-selector rating">
                    <p>Rating</p>

                    <div class="btn-group">
                      <button
                        class="btn  btn-sm dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Select
                      </button>
                      <div class="dropdown-menu">...</div>
                    </div>
                  </span>

                  <span class="location-search-bar">
                    <form class="form-inline">
                      <input
                        class="form-control landscape-search mr-sm-2"
                        type="text"
                        placeholder="Search cuisine"
                        aria-label="Search"
                      />
                    </form>
                  </span>
                </div>
{table?(
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
                          size={24}
                          edit={false}
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
                          size={24}
                          edit={false}
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
                          size={24}
                          edit={false}
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
                          size={24}
                          edit={false}
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
                          size={24}
                          edit={false}
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
                          size={24}
                          edit={false}
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
                          size={24}
                          edit={false}
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
                          size={24}
                          edit={false}
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
                          size={24}
                          edit={false}
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
                          size={24}
                          edit={false}
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
                          size={24}
                          edit={false}
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
                          size={24}
                          edit={false}
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
                          size={24}
                          edit={false}
                          activeColor="#ffd700"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
):(
  <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-12">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.4964775575468!2d-122.31937958413855!3d47.69419788991535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549013f7949566cd%3A0xae2252437b741ebb!2s9000%20Roosevelt%20Way%20NE%2C%20Seattle%2C%20WA%2098115%2C%20USA!5e0!3m2!1sen!2s!4v1658153661695!5m2!1sen!2s"
                                        width="600" height="450" style={{border:'0'}} allowFullScreen="" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
)}
  
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
