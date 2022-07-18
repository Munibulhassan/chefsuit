import React, { useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import cross from "../Assets/slider-cross.png"
import Modal from 'react-bootstrap/Modal';
export default function Order() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Header />
      <section class="order-status-body">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="order-status-table">
                <h1 class="order-status-heading">Order Status</h1>

                <form class="form-inline my-2 my-lg-0">
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search by Order number or customer name"
                    aria-label="Search"
                  ></input>
                </form>

                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Order #</th>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Order Status</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>102</td>
                      <td>Steave Rocky</td>
                      <td className="orderstatus">
                        {" "}
                        <span className="statuscolor" style={{backgroundColor:"#ECC252 "}}></span>
                        <span className="statusname">Preparing</span>
                      </td>
                      <td>
                        <a href="#" onClick={()=>{handleShow()}}> {`>`}</a>
                      </td>
                    </tr>
                    <tr>
                      <td>102</td>
                      <td>Steave Rocky</td>
                     <td className="orderstatus">
                        {" "}
                        <span className="statuscolor" style={{backgroundColor:"#52ec7d "}}></span>
                        <span className="statusname">In transit</span>
                      </td>
                      <td>
                        <a href="#"> {`>`}</a>
                      </td>
                    </tr>
                    <tr>
                      <td>102</td>
                      <td>Steave Rocky</td>
                     <td className="orderstatus">
                        {" "}
                        <span className="statuscolor" style={{backgroundColor:"#ECC252 "}}></span>
                        <span className="statusname">Preparing</span>
                      </td>
                      <td>
                        <a href="#"> {`>`}</a>
                      </td>
                    </tr>
                    <tr>
                      <td>102</td>
                      <td>Steave Rocky</td>
                     <td className="orderstatus">
                        {" "}
                        <span className="statuscolor" style={{backgroundColor:"#ECC252 "}}></span>
                        <span className="statusname">Preparing</span>
                      </td>
                      <td>
                        <a href="#"> {`>`}</a>
                      </td>
                    </tr>
                    <tr>
                      <td>102</td>
                      <td>Steave Rocky</td>
                     <td className="orderstatus">
                        {" "}
                        <span className="statuscolor" style={{backgroundColor:"#5552ec "}}></span>
                        <span className="statusname">On Hold</span>
                      </td>
                      <td>
                        <a href="#"> {`>`}</a>
                      </td>
                    </tr>
                    <tr>
                      <td>102</td>
                      <td>Steave Rocky</td>
                     <td className="orderstatus">
                        {" "}
                        <span className="statuscolor" style={{backgroundColor:"#ECC252 "}}></span>
                        <span className="statusname">Preparing</span>
                      </td>
                      <td>
                        <a href="#"> {`>`}</a>
                      </td>
                    </tr>
                    <tr>
                      <td>102</td>
                      <td>Steave Rocky</td>
                     <td className="orderstatus">
                        {" "}
                        <span className="statuscolor" style={{backgroundColor:"#ECC252 "}}></span>
                        <span className="statusname">Preparing</span>
                      </td>
                      <td>
                        <a href="#"> {`>`}</a>
                      </td>
                    </tr>
                    <tr>
                      <td>102</td>
                      <td>Steave Rocky</td>
                     <td className="orderstatus">
                        {" "}
                        <span className="statuscolor" style={{backgroundColor:"#52ec7d "}}></span>
                        <span className="statusname">In transit</span>
                      </td>
                      <td>
                        <a href="#"> {`>`}</a>
                      </td>
                    </tr>
                    <tr>
                      <td>102</td>
                      <td>Steave Rocky</td>
                     <td className="orderstatus">
                        {" "}
                        <span className="statuscolor" style={{backgroundColor:"#ECC252 "}}></span>
                        <span className="statusname">Preparing</span>
                      </td>
                      <td>
                        <a href="#"> {`>`}</a>
                      </td>
                    </tr>
                    <tr>
                      <td>102</td>
                      <td>Steave Rocky</td>
                     <td className="orderstatus">
                        {" "}
                        <span className="statuscolor" style={{backgroundColor:"#ECC252 "}}></span>
                        <span className="statusname">Preparing</span>
                      </td>
                      <td>
                        <a href="#"> {`>`} </a>
                      </td>
                    </tr>
                    <tr>
                      <td>102</td>
                      <td>Steave Rocky</td>
                     <td className="orderstatus">
                        {" "}
                        <span className="statuscolor" style={{backgroundColor:"#ECC252 "}}></span>
                        <span className="statusname">Preparing</span>
                      </td>
                      <td>
                        <a href="#"> {`>`} </a>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td>102</td>
                      <td>Steave Rocky</td>
                     <td className="orderstatus">
                        {" "}
                        <span className="statuscolor" style={{backgroundColor:"#ECC252 "}}></span>
                        <span className="statusname">Preparing</span>
                      </td>
                      <td>
                        <a href="#"> {`>`} </a>
                      </td>
                    </tr>
                    <tr>
                      <td>102</td>
                      <td>Steave Rocky</td>
                     <td className="orderstatus">
                        {" "}
                        <span className="statuscolor" style={{backgroundColor:"#ECC252 "}}></span>
                        <span className="statusname">Preparing</span>
                      </td>
                      <td>
                        <a href="#"> {`>`} </a>
                      </td>
                    </tr>
                    <tr>
                      <td>102</td>
                      <td>Steave Rocky</td>
                     <td className="orderstatus">
                        {" "}
                        <span className="statuscolor" style={{backgroundColor:"#ECC252 "}}></span>
                        <span className="statusname">Preparing</span>
                      </td>
                      <td>
                        <a href="#"> {`>`} </a>
                      </td>
                    </tr>
                    <tr>
                      <td>102</td>
                      <td>Steave Rocky</td>
                     <td className="orderstatus">
                        {" "}
                        <span className="statuscolor" style={{backgroundColor:"#ECC252 "}}></span>
                        <span className="statusname">Preparing</span>
                      </td>
                      <td>
                        <a href="#"> {`>`} </a>
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
      <Modal show={show} onHide={handleClose}>
      <Modal.Header >
        <Modal.Title>
       
        <div class="heading-div">
                <h3>Update Order Status</h3>
                <a href="#" onClick={()=>handleClose()}><img src={cross} className = "closebtn" /></a>
            </div>
       
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <div class="slider-div">
        <div class="slider-body">
      <div class="oreder-detail-div">
                <h5>Order details</h5>
                <span>
                    <h5>Order Number</h5>
                    <p>#102</p>
                </span>
            </div>

            <div class="customer-detail-div">
                <h5>Customer Name</h5>
                <p>Steave Rocky</p>
            </div>

            <div class="item-detail-div">
                <h5>Item Detail</h5>
                <span>
                    <p>Corn Pizza</p>
                    <p>1x</p>
                </span>
                <span>
                    <p>Cheese Burger</p>
                    <p>3x</p>
                </span>
            </div>
            <div class="status-div">
                <span>
                    <p>Status</p>

                        
                    <p class="status"> 
                    <span className="statuscolor" style={{backgroundColor:"#ECC252 "}}></span>
                    Preparing
                    </p>
                </span>

                <span>
                    <h5>Change Status</h5>
                </span>

                <div class="btn-group preparing-dropdown-btn">
                    <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                        Preparing
                    </button>
                    <div class="dropdown-menu">
                      ...
                    </div>

            </div>
        </div>
        </div>
        </div>

      </Modal.Body>

    
    </Modal>
    </>
  );
}
