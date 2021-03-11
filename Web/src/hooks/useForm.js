/* eslint-disable radix */
import { useState } from 'react';

const UseForm = (initial = {}) => {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);

  const handleChange = (e) => {
    // eslint-disable-next-line prefer-const
    let { value, name, type } = e.target;

    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      [value] = e.target.files;
    }
    setInputs({
      // copy the existing state
      ...inputs,
      [name]: value,
    });
  };

  const resetForm = () => {
    setInputs(initial);
  };

  const clearForm = () => {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key]) => [key, ''])
    );
    setInputs(blankState);
  };

  // return the things we want to surface from this custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
};
export default UseForm;
