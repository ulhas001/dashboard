import React from "react";
import img from "../images/dashboard.jpg";
import img1 from "../images/new.png";
import { motion } from "framer-motion";
const Dashboard = () => {
  return (
    <>
      <div className="container p-5 ">
        <h1 className="text-center">D A S H B O A R D </h1>
        {/* modal */}

        <motion.div className="d-flex align-items-center justify-content-center text-center mt-5 "
        whileHover={{ scale: 1.4 }}
        whileTap={{
          scale: 0.8,
        
          borderRadius: "100%"}}
        >
          <button
            type="button"
            class="btn btn-lg btn-outline-primary "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Upload Your Art!
          </button>
        </motion.div>
        

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Upload
                </h5>

                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                {/* code for form  */}
                <div className="row">
                  <div className="col-lg-12">
                    <h6 className="">Upload Your Art Here !</h6>
                    {/* #for input art images  */}
                    <div className="input-group mb-5">
                      <input
                        type="file"
                        class="form-control"
                        id="inputGroupFile02"
                      />
                    </div>
                    {/* description  */}
                    <div>
                      <h6 className="mt-4">Enter a Description </h6>
                      <div class="form-floating mb-3">
                        <input
                          style={{ height: "150px" }}
                          type="text"
                          class="form-control"
                          id="floatingInput"
                          placeholder="Description"
                        />
                        <label for="floatingInput">Description </label>
                      </div>
                    </div>
                    {/* tags */}
                    <div>
                      <h6 className="mt-4">Tags</h6>
                      <div class="form-floating mb-3">
                        <input
                          style={{ height: "100px" }}
                          type="text"
                          class="form-control"
                          id="floatingInput"
                          placeholder="Description"
                        />
                        <label for="floatingInput">Enter tags </label>
                      </div>
                    </div>
                    {/* add insta and bio */}
                    <div>
                      <h6 className="mt-4">Profile </h6>
                      <div class="form-floating mb-3">
                        <input
                          style={{ height: "60px" }}
                          type="text"
                          class="form-control"
                          id="floatingInput"
                          placeholder="Description"
                        />
                        <label for="floatingInput">Insta ID </label>
                      </div>
                      <div class="form-floating mb-3">
                        <input
                          style={{ height: "100px" }}
                          type="text"
                          class="form-control"
                          id="floatingInput"
                          placeholder="Description"
                        />
                        <label for="floatingInput">Bio </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button data-bs-dismiss="modal" type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* counts  */}
        <div className="row mt-5">
          <div className="col-lg-3">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 20 }}
              whileTap={{
                scale: 0.8,
                rotate: -20,
                borderRadius: "100%",
              }}
              class="card w-75 shadow-lg p-2 bg-body rounded"
              style={{
                backgroundColor: "floralwhite",
              }}
            >
              <div class="card-body">
                <p class="card-title ">Most Viewed</p>
                <h3>222</h3>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-3">
            <motion.div
              class="card w-75 shadow-lg p-2 bg-body rounded"
              whileHover={{ scale: 1.2, rotate: 20 }}
              whileTap={{
                scale: 0.8,
                rotate: -20,
                borderRadius: "100%",
              }}
            >
              <div class="card-body">
                <p class="card-title ">Most Liked</p>
                <h3>123</h3>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-3">
            <motion.div
              class="card w-75 shadow-lg p-2 bg-body rounded"
              whileHover={{ scale: 1.2, rotate: 20 }}
              whileTap={{
                scale: 0.8,
                rotate: -20,
                borderRadius: "100%",
              }}
            >
              <div class="card-body">
                <p class="card-title ">Most Shared</p>
                <h3>100</h3>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-3">
            <motion.div
              class="card w-75 shadow-lg p-2 bg-body rounded"
              whileHover={{ scale: 1.2, rotate: 20 }}
              whileTap={{
                scale: 0.8,
                rotate: -20,
                borderRadius: "100%",
              }}
            >
              <div class="card-body">
                <p class="card-title ">Most Adored</p>
                <h3>333</h3>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="mt-5 col-lg-12">
          {/* catergories for views */}
          <div class="dropdown " 
          >
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Uploads
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Most Viewved
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Least viewed
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* cards */}
        {/* images or arts */}

        <div className="row mt-4">
          <div className="col-lg-4">
            <img
              src={img1}
              class="img-fluid"
              alt="..."
              style={{ width: "100%" }}
            />
          </div>
          {/* sort for image0s */}
          <div className="col-lg-8 d-flex  shadow-lg p-5  mb-5 bg-body rounded" style={{backgroundColor:"whitesmoke"}}>
            <div className="col-lg-4 d-flex align-items-center justify-content-around">
              <div class="card" style={{ width: "12rem" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build .</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center justify-content-around">
              <div class="card" style={{ width: "12rem" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build .</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center justify-content-around">
              <div class="card" style={{ width: "12rem" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build .</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
