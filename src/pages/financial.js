import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";

export default function Financial() {
  return (
    <div className="Financial-Report">

      <Header />
      <section class="order-status-body">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="order-status-table">

                <div class="heading-btn-box">
                  <span class="heading-and-date">
                    <h1 class="order-status-heading">Financial Report</h1>

                    <p>From 01/01/2023-01/06/2022</p>
                  </span>

                  <button class="btn btn-primary">Genrate Report</button>
                </div>

                <div class="days-box">
                  <form action="/action_page.php" class=".calander-box">
                    <input
                      type="date"
                      id="from"
                      placeholder="From"
                      name="From"
                    />
                    <input type="date" id="from" placeholder="To" name="To" />
                  </form>

                  <button class="days-btn 30 active">Last 30 Days</button>
                  <button class="days-btn 60 active">Last 60 Days</button>
                  <button class="days-btn 90 active">Last 90 Days</button>
                </div>

                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Order #</th>
                      <th scope="col">Order Date</th>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Order Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>102</td>
                      <td>01/02/2022</td>
                      <td>Steave Rocky</td>
                      <td>$254.05</td>
                    </tr>
                    <tr>
                      <td>102</td>
                      <td>01/02/2022</td>
                      <td>Steave Rocky</td>
                      <td>$254.05</td>
                    </tr>
                    <tr>
                      <td>102</td>
                      <td>01/02/2022</td>
                      <td>Steave Rocky</td>
                      <td>$254.05</td>
                    </tr>
                    <tr>
                      <td>102</td>
                      <td>01/02/2022</td>
                      <td>Steave Rocky</td>
                      <td>$254.05</td>
                    </tr>{" "}
                    <tr>
                      <td>102</td>
                      <td>01/02/2022</td>
                      <td>Steave Rocky</td>
                      <td>$254.05</td>
                    </tr>{" "}
                    <tr>
                      <td>102</td>
                      <td>01/02/2022</td>
                      <td>Steave Rocky</td>
                      <td>$254.05</td>
                    </tr>{" "}
                    <tr>
                      <td>102</td>
                      <td>01/02/2022</td>
                      <td>Steave Rocky</td>
                      <td>$254.05</td>
                    </tr>{" "}
                    <tr>
                      <td>102</td>
                      <td>01/02/2022</td>
                      <td>Steave Rocky</td>
                      <td>$254.05</td>
                    </tr>{" "}
                    <tr>
                      <td>102</td>
                      <td>01/02/2022</td>
                      <td>Steave Rocky</td>
                      <td>$254.05</td>
                    </tr>
                    <tr>
                      <td>102</td>
                      <td>01/02/2022</td>
                      <td>Steave Rocky</td>
                      <td>$254.05</td>
                    </tr>
                    <tr>
                      <td>102</td>
                      <td>01/02/2022</td>
                      <td>Steave Rocky</td>
                      <td>$254.05</td>
                    </tr>{" "}
                    <tr>
                      <td>102</td>
                      <td>01/02/2022</td>
                      <td>Steave Rocky</td>
                      <td>$254.05</td>
                    </tr>{" "}
                    <tr>
                      <td>102</td>
                      <td>01/02/2022</td>
                      <td>Steave Rocky</td>
                      <td>$254.05</td>
                    </tr>{" "}
                    <tr>
                      <td>102</td>
                      <td>01/02/2022</td>
                      <td>Steave Rocky</td>
                      <td>$254.05</td>
                    </tr>{" "}
                    <tr>
                      <td>102</td>
                      <td>01/02/2022</td>
                      <td>Steave Rocky</td>
                      <td>$254.05</td>
                    </tr>
                    <tr>
                      <td>102</td>
                      <td>01/02/2022</td>
                      <td>Steave Rocky</td>
                      <td>$254.05</td>
                    </tr>{" "}
                    <tr>
                      <td>102</td>
                      <td>01/02/2022</td>
                      <td>Steave Rocky</td>
                      <td>$254.05</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
