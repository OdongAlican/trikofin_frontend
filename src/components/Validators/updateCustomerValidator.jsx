/* eslint-disable  no-useless-escape */

export default function updateCustomerValidator(values) {
  const errors = {};
  const nameRegex = /^[a-zA-Z ]{3,30}$/;

  if (!values.surName.trim()) {
    errors.surName = 'Surename Required';
  } else if (!nameRegex.test(values.surName)) {
    errors.surName = 'Surename Invalid';
  }

  if (!values.foreName1.trim()) {
    errors.foreName1 = 'Forename one Required';
  } else if (!nameRegex.test(values.foreName1)) {
    errors.foreName1 = 'Forename One Invalid';
  }

  if (!values.rAddress.trim()) {
    errors.rAddress = 'rAddress Required';
  }

  if (!values.dateofbirth) {
    errors.dateofbirth = 'Date is Required';
  }

  if (!values.genderID) {
    errors.genderID = 'Select a Gender';
  }

  if (!values.nationalityID) {
    errors.nationalityID = 'Select a Nationality';
  }

  if (!values.maritalStatusID) {
    errors.maritalStatusID = 'Select a Status';
  }

  if (!values.riskProfileID) {
    errors.riskProfileID = 'Select a Profile';
  }

  if (!values.custTypeID) {
    errors.custTypeID = 'Select a Customer';
  }

  if (!values.title) {
    errors.title = 'Select a Title';
  }

  return errors;
}
