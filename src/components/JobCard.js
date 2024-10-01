import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  return (
    <div className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h2>
      <p className="text-sm text-gray-500 mb-2">{job.location}</p>
      <p className="text-gray-600 line-clamp-2">{job.description}</p>
      <Link to={`/jobs/${job.id}`} className="text-blue-600 hover:underline mt-4 inline-block">
        View Details
      </Link>
    </div>
  );
};

export default JobCard;
