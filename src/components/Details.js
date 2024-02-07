import React from "react";
import "./Details.css";
import Button from "./Button";
const Details = () => {
  return (
    <>
      <div className="container bg-light rounded shadow mt-4 py-5 px-5">
        {/* first layout */}
        <div>
          <div className="fs-4">Skills</div>
          <input
            className=" py-2 rounded w-100 mt-2"
            style={{ border: "none", background: "#F0F0F0" }}
          />
        </div>
        {/* second section */}
        <div className="fs-4 mt-4">Prev Jobs</div>
        <div className="d-flex justify-content-between">
          <div>
            <form action="#">
              <div class="user__details">
                <div class="input__box">
                  <span class="details">Job Title</span>
                  <input type="text" placeholder="Title" required />
                </div>
                <div class="input__box">
                  <span class="details">Company Name</span>
                  <input type="text" placeholder="Name" required />
                </div>
                <div class="input__box">
                  <span class="details">Company contact</span>
                  <input
                    type="email"
                    placeholder="johnsmith@hotmail.com"
                    required
                  />
                </div>
                <div class="input__box">
                  <span class="details">Salary</span>
                  <input
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="Salary"
                    required
                  />
                </div>
                <div class="input__box">
                  <span class="details">Duration</span>
                  <input type="text" placeholder="Duration" required />
                </div>
              </div>
            </form>
          </div>

          {/* second column */}
          <div className="ms-3">
            <form action="#">
              <div class="user__details">
                <div class="input__box">
                  <span class="details">Training Name</span>
                  <input type="text" placeholder="Name" required />
                </div>
                <div class="input__box">
                  <span class="details">Institute Name</span>
                  <input type="text" placeholder="Name" required />
                </div>
                <div class="input__box">
                  <span class="details">Description</span>
                  <input type="email" placeholder="Description" required />
                </div>
                <div class="input__box">
                  <span class="details">Training Duration</span>
                  <input
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder=""
                    required
                  />
                </div>
                <div class="input__box">
                  <span class="details">Outcome Details</span>
                  <input type="text" placeholder="Details" required />
                </div>
              </div>
            </form>
          </div>
          
        </div>
        <div className="">
          <Button label={"Add Details"}/>
        </div>
      </div>
    </>
  );
};

export default Details;
