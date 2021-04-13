import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { postIndividualCustomers } from '../actions/individualCustomer';

const UseForm = validate => {
  const history = useHistory();
  const [values, setValues] = useState({
    surname: '',
    forenameone: '',
    forenametwo: null,
    forenamethree: null,
    residential: '',
    emailone: null,
    emailtwo: null,
    phoneone: null,
    phonetwo: null,
    phonethree: null,
    birthday: '',
    gender: '',
    nationality: '',
    status: '',
    profile: '',
    customer: '',
    title: '',
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      dispatch(postIndividualCustomers(values, history));
    } else {
      console.log('validation errors');
    }
  }, [errors]);

  return {
    handleChange, values, handleSubmit, errors,
  };
};

export default UseForm;
