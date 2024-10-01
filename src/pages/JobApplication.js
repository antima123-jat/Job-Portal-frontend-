import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import jobListings from '../mockData';

const JobApplication = () => {
  const { id } = useParams();
  const job = jobListings.find((job) => job.id === parseInt(id));
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    coverLetter: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log(result.message);
        navigate('/thankyou');
      } else {
        console.error('Error submitting application:', result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!job) {
    return <div className="p-4">Job not found</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Apply for {job.title}</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-semibold text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold text-gray-700 mb-2">Cover Letter</label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              className="border p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows="5"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-200"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplication;
