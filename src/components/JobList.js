// src/components/JobList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function JobList() {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint of your Rails API
    axios.get('YOUR_API_ENDPOINT')
      .then((response) => {
        setJobListings(response.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobListings.map((job) => (
          <li key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            {/* Add more details */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;
