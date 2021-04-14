/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { updateIndividualCustomer } from '../actions/individualCustomer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const UpdateIndividualCustomer = ({ location }) => {
  const { state } = location;
  const [dataState, setDataState] = useState(state);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = e => {
    const { name, value } = e.target;
    setDataState({
      ...dataState,
      [name]: value,
    });
  };

  const updateCustomer = e => {
    e.preventDefault();
    dispatch(updateIndividualCustomer(dataState, history));
  };

  return (
    <div className="individual-customer-form">
      <Navbar />
      <div className="lower-form-section">
        <div className="maintenance-customer-info">
          <span>
            Update
            {' '}
            {(dataState.surName).toLowerCase()}
            ´s Personal Information
          </span>
        </div>
        <div className="lower-downer-section">
          <div className="left-inner-form-section">
            <Sidebar />
          </div>
          <div className="submit-form-top-section">

            <form className="main-form-color" onSubmit={updateCustomer}>
              <div className="middle-inner-form-section">
                <div className="form-group d-flex ">
                  <div className="left-form-group col-md-8">
                    <label htmlFor="customerId w-50">Customer ID:</label>
                    <input
                      disabled
                      className="form-control-input col-md-8"
                      placeholder="Enter Keyword"
                      type="text"
                      name="customerid"
                    />
                  </div>
                  <div className="right-form-group ml-auto col-md-4">
                    <label htmlFor="title">Title:</label>
                    <select
                      className="form-control-input col-md-9 ml-2"
                      onChange={handleChange}
                      name="title"
                      value={dataState.title}
                    >
                      <option value="" disabled selected hidden>Select Title</option>
                      <option value="MR">MR.</option>
                      <option value="Mrs">MRs.</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <div className="left-form-group col-md-12">
                    <label htmlFor="customerId w-50">SurName:</label>
                    <input
                      className="form-control-input col-md-8"
                      placeholder="Enter Surename"
                      type="text"
                      name="surName"
                      value={dataState.surName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="left-form-group col-md-12">
                    <label htmlFor="customerId w-50">ForeName1:</label>
                    <input
                      className="form-control-input col-md-8"
                      placeholder="Enter Forename"
                      type="text"
                      name="foreName1"
                      value={dataState.foreName1}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group ">
                  <div className="left-form-group col-md-12">
                    <label htmlFor="customerId w-50">ForeName2:</label>
                    <input
                      className="form-control-input col-md-8"
                      placeholder="Enter Forename"
                      type="text"
                      name="foreName2"
                      value={dataState.foreName2}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="left-form-group col-md-12">
                    <label htmlFor="customerId w-50">ForeName3:</label>
                    <input
                      className="form-control-input col-md-8"
                      placeholder="Enter Forename"
                      type="text"
                      name="foreName3"
                      value={dataState.foreName3}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group ">
                  <div className="left-form-group d-flex align-items-center col-md-12">
                    <label htmlFor="customerId w-50">Residential Address:</label>
                    <input
                      className="form-control-input col-md-8"
                      placeholder="Enter Residential Address"
                      type="text"
                      name="rAddress"
                      value={dataState.rAddress}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group ">
                  <div className="left-form-group col-md-12">
                    <label htmlFor="customerId w-50">EmailID1:</label>
                    <input
                      className="form-control-input col-md-8"
                      placeholder="Enter Email Address"
                      type="email"
                      name="emailID1"
                      value={dataState.emailID1}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group ">
                  <div className="left-form-group col-md-12">
                    <label htmlFor="customerId w-50">EmailID2:</label>
                    <input
                      className="form-control-input col-md-8"
                      placeholder="Enter Email Address"
                      type="email"
                      name="emailID2"
                      value={dataState.emailID2}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group ">
                  <div className="left-form-group col-md-12">
                    <label className="w-25" htmlFor="customerId">Date of Birth:</label>
                    <input
                      className="form-control-input col-md-8"
                      type="date"
                      name="dateofbirth"
                      value={dataState.dateofbirth}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="right-inner-form-section">
                <div className="smaller-inner-section d-flex">
                  <div className="inner-left-section">
                    <div className="form-group mr-2">
                      <div className="left-form-group other-input-section col-md-12">
                        <label htmlFor="customerId w-50">Phone1:</label>
                        <input
                          className="form-control-input col-md-8"
                          placeholder="Enter Number.."
                          type="number"
                          name="phone1"
                          value={dataState.phone1}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group mr-2">
                      <div className="left-form-group other-input-section col-md-12">
                        <label htmlFor="customerId w-50">Phone2:</label>
                        <input
                          className="form-control-input col-md-8"
                          placeholder="Enter Number.."
                          type="number"
                          name="phone2"
                          value={dataState.phone2}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group d-flex  mr-2">
                      <div className="left-form-group other-input-section col-md-12">
                        <label htmlFor="customerId w-50">Phone3:</label>
                        <input
                          className="form-control-input col-md-8"
                          placeholder="Enter Number.."
                          type="number"
                          name="phone3"
                          value={dataState.phone3}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group mr-2">
                      <div className="left-form-group other-input-section col-md-12">
                        <label htmlFor="customerId w-50">Gender:</label>
                        <select
                          className="form-control-input col-md-8"
                          placeholder="Enter Gender"
                          onChange={handleChange}
                          name="genderID"
                          value={dataState.genderID}
                        >
                          <option value="" disabled selected hidden>Select Gender</option>
                          <option value="M">Male</option>
                          <option value="F">Female</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="image-section mb-2" />
                </div>
                <div className="form-group ">
                  <div className="left-form-group other-input-section col-md-12">
                    <label className="w-25" htmlFor="customerId">Nationality:</label>
                    <select
                      className="form-control-input col-md-8"
                      placeholder="Enter Nationality"
                      onChange={handleChange}
                      name="nationalityID"
                      value={dataState.nationalityID}
                    >
                      <option value="" disabled selected hidden>Select Nationality</option>
                      <option value="U">Ugandan</option>
                      <option value="K">Kenyan</option>
                      <option value="T">Tanzanian</option>
                      <option value="R">Rwandan</option>
                      <option value="I">Indian</option>
                      <option value="N">Nigerian</option>
                    </select>
                  </div>
                </div>
                <div className="form-group ">
                  <div className="left-form-group other-input-section col-md-12">
                    <label className="w-25" htmlFor="customerId">Marital Status:</label>
                    <select
                      className="form-control-input col-md-8"
                      onChange={handleChange}
                      name="maritalStatusID"
                      value={dataState.maritalStatusID}
                    >
                      <option value="" disabled selected hidden>Select Marital Status</option>
                      <option value="1">Single</option>
                      <option value="2">Divorced</option>
                      <option value="3">Married</option>
                      <option value="4">Separated</option>
                      <option value="5">Widowed</option>
                      <option value="6">Anulled</option>
                    </select>
                  </div>
                </div>
                <div className="form-group ">
                  <div className="left-form-group other-input-section col-md-12">
                    <label className="w-25" htmlFor="customerId">Risk Profile:</label>
                    <select
                      className="form-control-input col-md-8"
                      onChange={handleChange}
                      name="riskProfileID"
                      value={dataState.riskProfileID}
                    >
                      <option value="" disabled selected hidden>Select Risk Profile</option>
                      <option value="H">High</option>
                      <option value="L">Low</option>
                      <option value="M">Medium</option>
                    </select>
                  </div>
                </div>
                <div className="form-group ">
                  <div className="left-form-group other-input-section col-md-12">
                    <label className="w-25" htmlFor="customerId">Customer Type:</label>
                    <select
                      className="form-control-input col-md-8"
                      placeholder="Enter Marital Status"
                      onChange={handleChange}
                      name="custTypeID"
                      value={dataState.custTypeID}
                    >
                      <option value="" disabled selected hidden>Select Customer Type</option>
                      <option value="C">Client</option>
                      <option value="S">Staff</option>
                      <option value="E">Employee</option>
                      <option value="D">Director</option>
                      <option value="G">Guarantor</option>
                    </select>
                  </div>
                </div>
                <div className="submit-button-section">
                  <button
                    type="submit"
                    className="btn btn-primary px-4"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
            <div className="upper-bottom-section">
              <div className="span">More Informations</div>
              <div className="bottom-form-section pt-3">
                <div className="form-group d-flex ml-2">
                  <div className="left-form-group-division">
                    <div className="left-form-group-div" htmlFor="customerId">Loan Balance:</div>
                    <div className="form-control-div border">
                      0.00
                    </div>
                    <div className="icon-section">
                      <i
                        // onClick={() => modalOpener('Loan Balance')}
                        className="fas fa-plus-square"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group d-flex  ml-2">
                  <div className="left-form-group-division">
                    <div className="left-form-group-div" htmlFor="customerId">shares Balance:</div>
                    <div className="form-control-div border">
                      0.00
                    </div>
                    <div className="icon-section">
                      <i
                        // onClick={() => modalOpener('Shares Balance')}
                        className="fas fa-plus-square"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group d-flex  ml-2">
                  <div className="left-form-group-division">
                    <div className="left-form-group-div" htmlFor="customerId">Savings Balance:</div>
                    <div className="form-control-div border">
                      0.00
                    </div>
                    <div className="icon-section">
                      <i
                        // onClick={() => modalOpener('Savings Balance')}
                        className="fas fa-plus-square"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group d-flex  ml-2">
                  <div className="left-form-group-division">
                    <div className="left-form-group-div" htmlFor="customerId">No. of Shares:</div>
                    <div className="form-control-div border">
                      0.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateIndividualCustomer;
