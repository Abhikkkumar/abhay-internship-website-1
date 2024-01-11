import React, { useState } from "react";
import "./form.css";

export default function Form() {
  const [row0, setRow0] = useState(true);
  const [row1, setRow1] = useState(false);
  function showRow0() {
    setRow0(true);
    setRow1(false);
  }
  function showRow1() {
    setRow1(true);
    setRow0(false);
  }
  const classBtnOne = row0 ? "btn btn-blue" : "btn btn-light";
  const classBtnTwo = row1 ? "btn btn-blue" : "btn btn-light";
  return (
    <div className="my-form container-fluid">
      <div className="outer">
        <div className="details">
          <h1 className="cursive-heading">Delivering Excellence in every Byte</h1>
          {/* <div className="form-button-container mb-4 mb-md-3">
            <button
              type="button"
              class={classBtnOne}
              onClick={() => {
                showRow0();
              }}
            >
              Buses
            </button>
            <button
              type="button"
              class={classBtnTwo}
              onClick={() => {
                showRow1();
              }}
            >
              Rental
            </button>
          </div> */}
          {/* <div className="form-sub-container container">
            {row0 && (
              <div className="row row-0 gx-0 ">
                <div className="col-md-3 mr-0">
                  <div className="input-group mb-3 ">
                    <span
                      class="material-symbols-outlined form-arrow input-group-text"
                      id="basic-addon1"
                    >
                      expand_less
                    </span>

                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Leaving from</option>
                      <option value="1">Muzaffarpur</option>
                      <option value="2">Patna</option>
                      <option value="3">Bettiah</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3 ml-0">
                  <div className="input-group mb-3 ">
                    <span
                      class="material-symbols-outlined form-location input-group-text"
                      id="basic-addon1"
                    >
                      location_on
                    </span>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Going to</option>
                      <option value="1">Muzaffarpur</option>
                      <option value="2">Patna</option>
                      <option value="3">Bettiah</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="input-group mb-3 ">
                    <span
                      class="material-symbols-outlined form-calendar input-group-text"
                      id="basic-addon1"
                    >
                      calendar_month
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Date of Journey"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    ></input>
                  </div>
                </div>

                <button
                  type="button"
                  class="btn btn-danger col-md-2"
                  style={{ height: "100%" }}
                >
                  Search
                </button>
              </div>
            )}
            {row1 && (
              <div className="row row-1 row-cols-md-5 row-cols-1 gx-0 ">
                <div className="col">
                  <div className="input-group mb-3 ">
                    <span
                      class="material-symbols-outlined form-arrow input-group-text"
                      id="basic-addon1"
                    >
                      keyboard_arrow_down
                    </span>

                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Leaving from</option>
                      <option value="1">Muzaffarpur</option>
                      <option value="2">Patna</option>
                      <option value="3">Bettiah</option>
                    </select>
                  </div>
                </div>

                <div className="col">
                  <div className="input-group mb-3 ">
                    <span
                      class="material-symbols-outlined form-location input-group-text"
                      id="basic-addon1"
                    >
                      location_on
                    </span>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Going to</option>
                      <option value="1">Muzaffarpur</option>
                      <option value="2">Patna</option>
                      <option value="3">Bettiah</option>
                    </select>
                  </div>
                </div>
                <div className="col">
                  <div className="input-group mb-3 ">
                    <span
                      class="material-symbols-outlined form-calendar input-group-text"
                      id="basic-addon1"
                    >
                      calendar_month
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Date of Journey"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    ></input>
                  </div>
                </div>
                <div className="col">
                  <div className="input-group mb-3 ">
                    <span
                      class="material-symbols-outlined form-calendar input-group-text"
                      id="basic-addon1"
                    >
                      calendar_month
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Hire Till"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    ></input>
                  </div>
                </div>
                <button
                  type="button"
                  class="btn btn-danger col"
                  style={{ height: "100%" }}
                >
                  Search
                </button>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
}
