import React from "react";
import { LuBellRing } from "react-icons/lu";
const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container">
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Sunday,30 August 2023
              </a>
            </li>
          </ul>
          <LuBellRing className="fs-3 me-4"/>
          <a class="navbar-brand " href="#">
           Hello, Mr.Monish <img src="https://study.com/cimages/multimages/16/meeting-1019744_960_720.jpg" class="" style={{width:"80px", borderRadius:"200px"}}/>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
