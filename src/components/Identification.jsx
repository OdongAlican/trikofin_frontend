import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import UserAcces from '../images/bank.svg';

const Identification = () => (

  <div className="view-individual-customer-form">
    <Navbar />
    {/* <Modal
      modalText={modalText}
      modalCloser={modalCloser}
      openModel={openModel}
    /> */}
    <div className="lower-form-section">
      <div className="maintenance-customer-info">
        <span>View Customer Personal Identification Information</span>
      </div>
      <div className="lower-downer-section">
        <div className="left-inner-form-section">
          <Sidebar />
        </div>
        <div className="submit-form-top-section">
          <div className="main-form-color contact-info-section">
            <div className="welcome-page">
              <h1>Identification</h1>
            </div>
            <div className="banking-logo">
              <img src={UserAcces} alt="Access User Portal" />
              <Link to="/individualcustomerform">Go Back Home</Link>
            </div>
          </div>
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
    <div className="footer-section ">
      <span>Copyright &copy; Tricofin.</span>
      <span>2021</span>
    </div>
  </div>

);

export default Identification;
