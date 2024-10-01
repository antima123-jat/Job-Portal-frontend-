import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jobListings from '../mockData';

const JobDetails = () => {
  const { id } = useParams();
  const job = jobListings.find((job) => job.id === parseInt(id));
  const navigate = useNavigate();

  if (!job) {
    return <div className="p-4">Job not found</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{job.title}</h1>
        <p className="text-sm text-gray-500 mb-4">{job.location}</p>
        <p className="text-gray-600 mb-4">{job.description}</p>
        <p className="text-gray-700 font-semibold">Requirements:</p>
        <ul className="list-disc list-inside text-gray-600">
          {job.requirements.split(',').map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
        <button
          onClick={() => navigate(`/apply/${id}`)}
          className="bg-blue-600 text-white px-4 py-2 mt-6 rounded-md hover:bg-blue-700"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
