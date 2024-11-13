import React, { useState } from 'react';

const SignupForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    day: '',
    month: '',
    year: '',
    gender: '',
    state: '',
    city: '',
  });

  // Handler for input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Placeholder handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // You can integrate form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
        />
      </div>

      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        <select
          name="day"
          value={formData.day}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">Day</option>
          {[...Array(31).keys()].map((d) => (
            <option key={d + 1} value={d + 1}>
              {d + 1}
            </option>
          ))}
        </select>
        <select
          name="month"
          value={formData.month}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">Month</option>
          {[
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ].map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
        <select
          name="year"
          value={formData.year}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">Year</option>
          {[...Array(100).keys()].map((y) => (
            <option key={y} value={2024 - y}>
              {2024 - y}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="mr-4">
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === 'Male'}
            onChange={handleChange}
            className="mr-2"
          />
          Male
        </label>
        <label className="mr-4">
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === 'Female'}
            onChange={handleChange}
            className="mr-2"
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Other"
            checked={formData.gender === 'Other'}
            onChange={handleChange}
            className="mr-2"
          />
          Other
        </label>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
        />
      </div>

      <p className="text-gray-600 text-sm mb-4">
        By Continuing, You Agree to Lzy Crazy{' '}
        <a href="#" className="text-blue-600 underline">
          Terms & Conditions
        </a>{' '}
        and Confirm that You have Read Lzy Crazy{' '}
        <a href="#" className="text-blue-600 underline">
          Privacy Policy
        </a>.
      </p>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
