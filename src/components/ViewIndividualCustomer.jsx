/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable  no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Profile from '../images/avatar.png';
import { fetchSingleIndividualCustomer } from '../actions/individualCustomer';
import Spinner from './Spinner';
import SearchCustomer from './SearchCustomer';
import ModalFunction from './ModalFunction';
import Modal from './Modal';

const ViewIndividualCustomer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    searchIndividualCustomer,
    searchedCustomer, finalSortedList,
  } = SearchCustomer();

  const {
    modalCloser, modalOpener, openModel, modalText,
  } = ModalFunction();

  const personalData = useSelector(state => state.individualCustomersReducer.individualCustomers);

  useEffect(() => {
    console.log('Here goes the code you wish to run on mount');
    dispatch(fetchSingleIndividualCustomer(id));
    return () => {
      console.log('Here goes the code you wish to run on unmount');
    };
  }, []);

  return (
    <div className="view-individual-customer-form">
      <Navbar />
      <Modal
        modalText={modalText}
        modalCloser={modalCloser}
        openModel={openModel}
      />
      <div className="lower-form-section">
        <div className="maintenance-customer-info">
          <span>View Customer Personal Information</span>
        </div>
        <div className="lower-downer-section">
          <div className="left-inner-form-section">
            <Sidebar />
          </div>
          <div className="submit-form-top-section">
            {
              personalData === undefined ? (
                <div className="loading-content-section">
                  <Spinner />
                </div>
              ) : (
                <form className="main-form-color">
                  <div className="middle-inner-form-section">
                    <div className="form-group d-flex ">
                      <div className="left-form-group manage-drop-down col-md-8">
                        <label htmlFor="customerId w-50">Customer ID:</label>
                        <input
                          className="form-control-input col-md-8"
                          placeholder="Enter Keyword"
                          type="text"
                          name="searchcustomer"
                          value={searchedCustomer}
                          onChange={searchIndividualCustomer}
                        />
                        {
                           searchedCustomer === '' ? (
                             <div className="modal-hide-section" />
                           ) : (

                             <div className="modal-popup-section">
                               <div className="top-section-modal-section" />
                               <div className="inner-section-modal-section">
                                 {
                                Array.from(new Set(finalSortedList)).map(customer => (
                                  <div
                                    className="inner-section-modal-section-inner border"
                                    key={customer.custID}
                                  >
                                    <div className="modal-customer-name-section mr-2">
                                      { customer.title }
                                    </div>
                                    <div className="modal-customer-name-section mr-2">
                                      { customer.surName}
                                    </div>
                                    <div className="modal-customer-surname-section">
                                      { customer.foreName1 }
                                    </div>
                                  </div>
                                ))
                              }
                               </div>
                             </div>
                           )
                        }
                      </div>
                      <div className="right-form-group-view ml-auto col-md-4">
                        <div
                          className="header-title-div"
                        >
                          Title:
                        </div>
                        <div
                          className="form-control-input view-header col-md-7 ml-2"
                        >
                          {personalData.title}
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="left-form-group col-md-12">
                        <label htmlFor="customerId w-50">SurName:</label>
                        <div
                          className="form-control-input col-md-8"
                          placeholder="Enter Surename"
                          type="text"
                        >
                          {personalData.surName}
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="left-form-group col-md-12">
                        <label htmlFor="customerId w-50">ForeName1:</label>
                        <div
                          className="form-control-input col-md-8"
                          placeholder="Enter Forename"
                        >
                          {personalData.foreName1}
                        </div>
                      </div>
                    </div>
                    <div className="form-group ">
                      <div className="left-form-group col-md-12">
                        <label htmlFor="customerId w-50">ForeName2:</label>
                        <div
                          className="form-control-input col-md-8"
                        >
                          {personalData.foreName2}
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="left-form-group col-md-12">
                        <label htmlFor="customerId w-50">ForeName3:</label>
                        <div
                          className="form-control-input col-md-8"
                        >
                          {personalData.foreName3}
                        </div>
                      </div>
                    </div>
                    <div className="form-group ">
                      <div className="left-form-group d-flex align-items-center col-md-12">
                        <label htmlFor="customerId w-50">Residential Address:</label>
                        <div
                          className="form-control-input col-md-8"
                        >
                          {personalData.rAddress}
                        </div>
                      </div>
                    </div>
                    <div className="form-group ">
                      <div className="left-form-group col-md-12">
                        <label htmlFor="customerId w-50">EmailID1:</label>
                        <div
                          className="form-control-input col-md-8"
                        >
                          {personalData.emailID1}
                        </div>
                      </div>
                    </div>
                    <div className="form-group ">
                      <div className="left-form-group col-md-12">
                        <label htmlFor="customerId w-50">EmailID2:</label>
                        <div
                          className="form-control-input col-md-8"
                        >
                          {personalData.emailID2}
                        </div>
                      </div>
                    </div>
                    <div className="form-group ">
                      <div className="left-form-group col-md-12">
                        <label className="w-25" htmlFor="customerId">Date of Birth:</label>
                        <div
                          className="form-control-input col-md-8"
                        >
                          {new Date(personalData.dateofbirth).toUTCString().split(' ').slice(0, 4)
                            .join(' ')}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right-inner-form-section">
                    <div className="smaller-inner-section d-flex">
                      <div className="inner-left-section-image">
                        <div className="form-group mr-2">
                          <div className="left-form-group other-input-section col-md-12">
                            <label htmlFor="customerId w-50">Phone1:</label>
                            <div
                              className="form-control-input col-md-8"
                            >
                              {personalData.phone1}
                            </div>
                          </div>
                        </div>
                        <div className="form-group mr-2">
                          <div className="left-form-group other-input-section col-md-12">
                            <label htmlFor="customerId w-50">Phone2:</label>
                            <div
                              className="form-control-input col-md-8"
                            >
                              { personalData.phone2 }
                            </div>
                          </div>
                        </div>
                        <div className="form-group d-flex  mr-2">
                          <div className="left-form-group other-input-section col-md-12">
                            <label htmlFor="customerId w-50">Phone3:</label>
                            <div
                              className="form-control-input col-md-8"
                            >
                              {personalData.phone3}
                            </div>
                          </div>
                        </div>

                        <div className="form-group mr-2">
                          <div className="left-form-group other-input-section col-md-12">
                            <label htmlFor="customerId w-50">Gender:</label>
                            <div
                              className="form-control-input col-md-8"
                            >
                              {personalData.genderID === 'M' ? 'Male' : 'Female'}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="image-section mb-2">
                        <img src={Profile} alt="profile" />
                      </div>
                    </div>
                    <div className="form-group ">
                      <div className="left-form-group other-input-section col-md-12">
                        <label className="w-25" htmlFor="customerId">Nationality:</label>
                        <div
                          className="form-control-input col-md-8"
                        >
                          {
                          personalData.nationalityID === 'N' ? 'Nigerian' : personalData.nationalityID === 'U' ? 'Ugandan'
                            : personalData.nationalityID === 'K' ? 'Kenyan' : personalData.nationalityID === 'T' ? 'Tanzanian'
                              : personalData.nationalityID === 'R' ? 'Rwandan' : 'Indian'
                          }
                        </div>
                      </div>
                    </div>
                    <div className="form-group ">
                      <div className="left-form-group other-input-section col-md-12">
                        <label className="w-25" htmlFor="customerId">Marital Status:</label>
                        <div
                          className="form-control-input col-md-8"
                        >
                          {
                          personalData.maritalStatusID === 1 ? 'Single' : personalData.maritalStatusID === 2 ? 'Divorced'
                            : personalData.maritalStatusID === 3 ? 'Married' : personalData.maritalStatusID === 4 ? 'Separated'
                              : personalData.maritalStatusID === 5 ? 'Widowed' : 'Anulled'
                          }
                        </div>
                      </div>
                    </div>
                    <div className="form-group ">
                      <div className="left-form-group other-input-section col-md-12">
                        <label className="w-25" htmlFor="customerId">Risk Profile:</label>
                        <div
                          className="form-control-input col-md-8"
                        >
                          {
                          personalData.riskProfileID === 'L' ? 'Low' : personalData.riskProfileID === 'M' ? 'Medium'
                            : 'High'
                          }
                        </div>
                      </div>
                    </div>
                    <div className="form-group ">
                      <div className="left-form-group other-input-section col-md-12">
                        <label className="w-25" htmlFor="customerId">Customer Type:</label>
                        <div
                          className="form-control-input col-md-8"
                        >
                          {
                          personalData.custTypeID === 'C' ? 'Client' : personalData.custTypeID === 'S' ? 'Staff'
                            : personalData.custTypeID === 'E' ? 'Employee' : personalData.custTypeID === 'D' ? 'Director'
                              : 'Guarantor'
                          }
                        </div>
                      </div>
                    </div>
                    <div className="submit-button-section">
                      <button
                        type="submit"
                        className="btn btn-primary px-4"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </form>

              )
            }

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

export default ViewIndividualCustomer;
