// src/components/JobList.js
import React, { useState, useEffect } from 'react';

function JobList() {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint of your Rails API
    fetch('YOUR_API_ENDPOINT')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setJobListings(data))
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
