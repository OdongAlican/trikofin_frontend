/* eslint-disable  no-useless-escape */

export default function validateIndividualCustomer(values) {
  const errors = {};
  const nameRegex = /^[a-zA-Z ]{3,30}$/;

  if (!values.surname.trim()) {
    errors.surname = 'Surename Required';
  } else if (!nameRegex.test(values.surname)) {
    errors.surname = 'Surename Invalid';
  }

  if (!values.forenameone.trim()) {
    errors.forenameone = 'Forename one Required';
  } else if (!nameRegex.test(values.forenameone)) {
    errors.forenameone = 'Forename One Invalid';
  }

  if (!values.residential.trim()) {
    errors.residential = 'Residential Required';
  }

  if (!values.birthday) {
    errors.date = 'Date is Required';
  }

  if (!values.gender) {
    errors.gender = 'Select a Gender';
  }

  if (!values.nationality) {
    errors.nationality = 'Select a Nationality';
  }

  if (!values.status) {
    errors.status = 'Select a Status';
  }

  if (!values.profile) {
    errors.profile = 'Select a Profile';
  }

  if (!values.customer) {
    errors.customer = 'Select a Customer';
  }

  if (!values.title) {
    errors.title = 'Select a Title';
  }

  return errors;
}
