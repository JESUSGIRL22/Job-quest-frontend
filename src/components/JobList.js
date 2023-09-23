// src/components/JobList.js
import React, { useState, useEffect } from 'react';

function JobList() {
  const [jobListings, setJobListings] = useState([]);

  // Fetch job listings from your API or a mock API
  useEffect(() => {
    fetch('https://your-api-url.com/job-listings') // Replace with your API endpoint
      .then((response) => response.json())
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
