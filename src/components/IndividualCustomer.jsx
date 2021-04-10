/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Modal from './Modal';

const IndividualCustomerForm = () => {
  const [openModel, setOpenModal] = useState('d-none');
  const [modalText, setModalText] = useState('');

  const modalCloser = () => setOpenModal('d-none');
  const modalOpener = text => {
    setModalText(text);
    setOpenModal('');
  };
  return (
    <div className="individual-customer-form">
      <Navbar />
      <Modal
        modalText={modalText}
        modalCloser={modalCloser}
        openModel={openModel}
      />
      <div className="lower-form-section">
        <div className="maintenance-customer-info">
          <span>Customer Maintenance Personal Information</span>
        </div>
        <div className="lower-downer-section">
          <div className="left-inner-form-section">
            <Sidebar />
          </div>
          <div className="submit-form-top-section">

            <form className="main-form-color">
              <div className="middle-inner-form-section">
                <div className="form-group d-flex ">
                  <div className="left-form-group col-md-8">
                    <label htmlFor="customerId w-50">Customer ID:</label>
                    <input
                      className="form-control-input col-md-8"
                      placeholder="Enter Keyword"
                      type="text"
                    />
                  </div>
                  <div className="right-form-group ml-auto col-md-4">
                    <label htmlFor="title">Title:</label>
                    <select
                      className="form-control-input col-md-8 ml-2"
                    >
                      <option>MR.</option>
                      <option>MRs.</option>
                    </select>
                  </div>
                </div>
                <div className="form-group d-flex ">
                  <div className="left-form-group col-md-12">
                    <label htmlFor="customerId w-50">SurName:</label>
                    <input
                      className="form-control-input col-md-8"
                      placeholder="Enter Surename"
                      type="text"
                    />
                  </div>
                </div>

                <div className="form-group d-flex ">
                  <div className="left-form-group col-md-12">
                    <label htmlFor="customerId w-50">ForeName1:</label>
                    <input
                      className="form-control-input col-md-8"
                      placeholder="Enter Forename"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group d-flex ">
                  <div className="left-form-group col-md-12">
                    <label htmlFor="customerId w-50">ForeName2:</label>
                    <input
                      className="form-control-input col-md-8"
                      placeholder="Enter Forename"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group d-flex ">
                  <div className="left-form-group col-md-12">
                    <label htmlFor="customerId w-50">ForeName3:</label>
                    <input
                      className="form-control-input col-md-8"
                      placeholder="Enter Forename"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group d-flex ">
                  <div className="left-form-group d-flex align-items-center col-md-12">
                    <label htmlFor="customerId w-50">Residential Address:</label>
                    <input
                      className="form-control-input col-md-8"
                      placeholder="Enter Residential Address"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group d-flex ">
                  <div className="left-form-group col-md-12">
                    <label htmlFor="customerId w-50">EmailID1:</label>
                    <input
                      className="form-control-input col-md-8"
                      placeholder="Enter Email Address"
                      type="email"
                    />
                  </div>
                </div>
                <div className="form-group d-flex ">
                  <div className="left-form-group col-md-12">
                    <label htmlFor="customerId w-50">EmailID2:</label>
                    <input
                      className="form-control-input col-md-8"
                      placeholder="Enter Email Address"
                      type="email"
                    />
                  </div>
                </div>
                <div className="form-group d-flex ">
                  <div className="left-form-group col-md-12">
                    <label className="w-25" htmlFor="customerId">Date of Birth:</label>
                    <input
                      className="form-control-input col-md-8"
                      type="date"
                    />
                  </div>
                </div>
              </div>
              <div className="right-inner-form-section">
                <div className="smaller-inner-section d-flex">
                  <div className="inner-left-section">
                    <div className="form-group d-flex  mr-2">
                      <div className="left-form-group other-input-section col-md-12">
                        <label htmlFor="customerId w-50">Phone1:</label>
                        <input
                          className="form-control-input col-md-8"
                          placeholder="Enter Number.."
                          type="number"
                        />
                      </div>
                    </div>
                    <div className="form-group d-flex  mr-2">
                      <div className="left-form-group other-input-section col-md-12">
                        <label htmlFor="customerId w-50">Phone2:</label>
                        <input
                          className="form-control-input col-md-8"
                          placeholder="Enter Number.."
                          type="number"
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
                        />
                      </div>
                    </div>

                    <div className="form-group d-flex  mr-2">
                      <div className="left-form-group other-input-section col-md-12">
                        <label htmlFor="customerId w-50">Gender:</label>
                        <input
                          className="form-control-input col-md-8"
                          placeholder="Enter Gender"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="image-section mb-2" />
                </div>
                <div className="form-group d-flex ">
                  <div className="left-form-group other-input-section col-md-12">
                    <label className="w-25" htmlFor="customerId">Nationality:</label>
                    <input
                      className="form-control-input col-md-8"
                      placeholder="Enter Nationality"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group d-flex ">
                  <div className="left-form-group other-input-section col-md-12">
                    <label className="w-25" htmlFor="customerId">Marital Status:</label>
                    <input
                      className="form-control-input col-md-8"
                      placeholder="Enter Marital Status"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group d-flex ">
                  <div className="left-form-group other-input-section col-md-12">
                    <label className="w-25" htmlFor="customerId">Risk Profile:</label>
                    <input
                      className="form-control-input col-md-8"
                      placeholder="Enter Risk Profile"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group d-flex ">
                  <div className="left-form-group other-input-section col-md-12">
                    <label className="w-25" htmlFor="customerId">Customer Type:</label>
                    <input
                      className="form-control-input col-md-8"
                      placeholder="Enter "
                      type="text"
                    />
                  </div>
                </div>
                <div className="submit-button-section">
                  <div className="btn btn-primary px-4">Add</div>
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
                        onClick={() => modalOpener('Loan Balance')}
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
                        onClick={() => modalOpener('Shares Balance')}
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
                        onClick={() => modalOpener('Savings Balance')}
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

export default IndividualCustomerForm;
