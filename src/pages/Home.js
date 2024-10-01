import React, { useState } from 'react';
import jobListings from '../mockData';
import JobCard from '../components/JobCard';
import Filter from '../components/Filter';

const Home = () => {
  const [filter, setFilter] = useState('');

  const filteredJobs = jobListings.filter((job) =>
    job.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <Filter setFilter={setFilter} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
