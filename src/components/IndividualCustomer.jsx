/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Modal from './Modal';
import UseForm from './UseForm';
import validate from './Validators/IndividualCustormerValidate';
import ModalFunction from './ModalFunction';

const IndividualCustomerForm = () => {
  const {
    handleChange, values, handleSubmit, errors,
  } = UseForm(validate);

  const {
    modalCloser, modalOpener, openModel, modalText,
  } = ModalFunction();

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

            <form className="main-form-color" onSubmit={handleSubmit}>
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
                      value={values.title}
                    >
                      <option value="" disabled selected hidden>Select Title</option>
                      <option value="MR">MR.</option>
                      <option value="Mrs">MRs.</option>
                    </select>
                  </div>
                  { errors.title && <small className="span-warning mt-4">{errors.title}</small>}
                </div>
                <div className="form-group">
                  <div className="left-form-group col-md-12">
                    <label htmlFor="customerId w-50">SurName:</label>
                    <input
                      className="form-control-input col-md-8"
                      placeholder="Enter Surename"
                      type="text"
                      name="surname"
                      value={values.surname}
                      onChange={handleChange}
                    />
                  </div>
                  { errors.surname && <small className="span-warning">{errors.surname}</small>}
                </div>

                <div className="form-group">
                  <div className="left-form-group col-md-12">
                    <label htmlFor="customerId w-50">ForeName1:</label>
                    <input
                      className="form-control-input col-md-8"
                      placeholder="Enter Forename"
                      type="text"
                      name="forenameone"
                      value={values.forenameone}
                      onChange={handleChange}
                    />
                  </div>
                  { errors.forenameone && <small className="span-warning">{errors.forenameone}</small>}
                </div>
                <div className="form-group ">
                  <div className="left-form-group col-md-12">
                    <label htmlFor="customerId w-50">ForeName2:</label>
                    <input
                      className="form-control-input col-md-8"
                      placeholder="Enter Forename"
                      type="text"
                      name="forenametwo"
                      value={values.forenametwo}
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
                      name="forenamethree"
                      value={values.forenamethree}
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
                      name="residential"
                      value={values.residential}
                      onChange={handleChange}
                    />
                  </div>
                  { errors.residential && <small className="span-warning">{errors.residential}</small>}
                </div>
                <div className="form-group ">
                  <div className="left-form-group col-md-12">
                    <label htmlFor="customerId w-50">EmailID1:</label>
                    <input
                      className="form-control-input col-md-8"
                      placeholder="Enter Email Address"
                      type="email"
                      name="emailone"
                      value={values.emailone}
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
                      name="emailtwo"
                      value={values.emailtwo}
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
                      name="birthday"
                      value={values.birthday}
                      onChange={handleChange}
                    />
                  </div>
                  { errors.date && <small className="span-warning">{errors.date}</small>}
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
                          name="phoneone"
                          value={values.phoneone}
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
                          name="phonetwo"
                          value={values.phonetwo}
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
                          name="phonethree"
                          value={values.phonethree}
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
                          name="gender"
                          value={values.gender}
                        >
                          <option value="" disabled selected hidden>Select Gender</option>
                          <option value="M">Male</option>
                          <option value="F">Female</option>
                        </select>
                      </div>
                      { errors.gender && <small className="span-warning">{errors.gender}</small>}
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
                      name="nationality"
                      value={values.nationality}
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
                  { errors.nationality && <small className="span-warning">{errors.nationality}</small>}
                </div>
                <div className="form-group ">
                  <div className="left-form-group other-input-section col-md-12">
                    <label className="w-25" htmlFor="customerId">Marital Status:</label>
                    <select
                      className="form-control-input col-md-8"
                      onChange={handleChange}
                      name="status"
                      value={values.status}
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
                  { errors.status && <small className="span-warning">{errors.status}</small>}
                </div>
                <div className="form-group ">
                  <div className="left-form-group other-input-section col-md-12">
                    <label className="w-25" htmlFor="customerId">Risk Profile:</label>
                    <select
                      className="form-control-input col-md-8"
                      onChange={handleChange}
                      name="profile"
                      value={values.profile}
                    >
                      <option value="" disabled selected hidden>Select Risk Profile</option>
                      <option value="H">High</option>
                      <option value="L">Low</option>
                      <option value="M">Medium</option>
                    </select>
                  </div>
                  { errors.profile && <small className="span-warning">{errors.profile}</small>}
                </div>
                <div className="form-group ">
                  <div className="left-form-group other-input-section col-md-12">
                    <label className="w-25" htmlFor="customerId">Customer Type:</label>
                    <select
                      className="form-control-input col-md-8"
                      placeholder="Enter Marital Status"
                      onChange={handleChange}
                      name="customer"
                      value={values.customer}
                    >
                      <option value="" disabled selected hidden>Select Customer Type</option>
                      <option value="C">Client</option>
                      <option value="S">Staff</option>
                      <option value="E">Employee</option>
                      <option value="D">Director</option>
                      <option value="G">Guarantor</option>
                    </select>
                  </div>
                  { errors.customer && <small className="span-warning">{errors.customer}</small>}
                </div>
                <div className="submit-button-section">
                  <button
                    type="submit"
                    className="btn btn-primary px-4"
                  >
                    Add
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
      <div className="footer-section ">
        <span>Copyright &copy; Tricofin.</span>
        <span>2021</span>
      </div>
    </div>
  );
};

export default IndividualCustomerForm;
