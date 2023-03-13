import React from "react";
import img from "../images/dashboard.jpg";
import img1 from "../images/new.png";
import { motion } from "framer-motion";
import "../App.css";
const User = () => {
  return (
    <>
      <div className="container p-5 ">
        <h1 className="text-center">User Dashboard </h1>
        {/* modal */}

        <motion.div
          className="d-flex align-items-center justify-content-center text-center mt-5 flex-column"
          whileHover={{ scale: 1.4 }}
          whileTap={{
            scale: 0.8,

            borderRadius: "100%",
          }}
        >
          <span
            style={{ borderRadius: "20px" }}
            type="button"
            class=" "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <path d="M 43.050781 1.9746094 C 41.800781 1.9746094 40.549609 2.4503906 39.599609 3.4003906 L 38.800781 4.1992188 L 45.699219 11.099609 L 46.5 10.300781 C 48.4 8.4007812 48.4 5.3003906 46.5 3.4003906 C 45.55 2.4503906 44.300781 1.9746094 43.050781 1.9746094 z M 37.482422 6.0898438 A 1.0001 1.0001 0 0 0 36.794922 6.3925781 L 4.2949219 38.791016 A 1.0001 1.0001 0 0 0 4.0332031 39.242188 L 2.0332031 46.742188 A 1.0001 1.0001 0 0 0 3.2578125 47.966797 L 10.757812 45.966797 A 1.0001 1.0001 0 0 0 11.208984 45.705078 L 43.607422 13.205078 A 1.0001 1.0001 0 1 0 42.191406 11.794922 L 9.9921875 44.09375 L 5.90625 40.007812 L 38.205078 7.8085938 A 1.0001 1.0001 0 0 0 37.482422 6.0898438 z"></path>
            </svg>
          </span>
        </motion.div>
        <p className="text-center mt-4">Click on the here to edit profile!</p>

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
                    <h6 className="">Select Category!</h6>
                    {/* category wise image */}
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Category</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    {/* #for input art images  */}
                    <div>
                      <h6 className="mt-4">Upload Image</h6>
                      <div className="input-group ">
                        <input
                          type="file"
                          class="form-control"
                          id="inputGroupFile02"
                        />
                      </div>
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
                      <h6 className="mt-4">Date of Creation </h6>
                      <div class="form-floating mb-3">
                        <input
                          style={{ height: "60px" }}
                          type="date"
                          class="form-control"
                          id="floatingInput"
                          placeholder="Description"
                        />
                        <label for="floatingInput">Date </label>
                      </div>
                      <h6 className="mt-4">Enter Bio</h6>
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
                <button
                  data-bs-dismiss="modal"
                  type="button"
                  class="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* selector*/}
        <div className="mt-5 col-lg-12">
          {/* catergories for views */}
          <div class="dropdown ">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              All Images
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Liked Images
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Seen Images
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* images or arts */}

        <div className="container mt-5">
          <div className="img-grid">
            <motion.div className="img-wrap" layout whileHover={{ opacity: 1 }}>
              <motion.img
                src={img}
                alt="uploaded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
            <motion.div className="img-wrap" layout whileHover={{ opacity: 1 }}>
              <motion.img
                src={img}
                alt="uploaded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>

            <motion.div className="img-wrap" layout whileHover={{ opacity: 1 }}>
              <motion.img
                src={img}
                alt="uploaded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
            <motion.div className="img-wrap" layout whileHover={{ opacity: 1 }}>
              <motion.img
                src={img}
                alt="uploaded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
            <motion.div className="img-wrap" layout whileHover={{ opacity: 1 }}>
              <motion.img
                src={img}
                alt="uploaded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
            <motion.div className="img-wrap" layout whileHover={{ opacity: 1 }}>
              <motion.img
                src={img}
                alt="uploaded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
            <motion.div className="img-wrap" layout whileHover={{ opacity: 1 }}>
              <motion.img
                src={img}
                alt="uploaded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
