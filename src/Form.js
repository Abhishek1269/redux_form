import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateForm, resetForm } from './redux/action';

const Form = () => {
  const [submitted, setSubmitted] = useState(false); // State to track form submission
  const form = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateForm(name, value));
  };

  const handleReset = () => {
    dispatch(resetForm());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mt-4 border border-dark p-4">
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="name" className="col-sm-2 col-form-label">Name:</label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
          <div className="col-sm-4">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="age" className="col-sm-2 col-form-label">Age:</label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control mt-4"
              id="age"
              name="age"
              value={form.age}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="college" className="col-sm-2 col-form-label">College Name:</label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control mt-4"
              id="college"
              name="college"
              value={form.college}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="address" className="col-sm-2 col-form-label">Address:</label>
          <div className="col-sm-10">
            <textarea
              className="form-control mt-4"
              id="address"
              name="address"
              value={form.address}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <button type="button" className="btn btn-primary mr-2" onClick={handleReset}>
              Reset
            </button>
            <button type="submit" className="btn btn-primary m-4">
              Submit
            </button>
          </div>
        </div>
      </form>
      {submitted && (
        <div className="text-left">
          <h2>Form Data:</h2>
          <p><strong>Name:</strong> {form.name}</p>
          <p><strong>Email:</strong> {form.email}</p>
          <p><strong>Age:</strong> {form.age}</p>
          <p><strong>College Name:</strong> {form.college}</p>
          <p><strong>Address:</strong> {form.address}</p>
        </div>
      )}
    </div>
  );
};

export default Form;