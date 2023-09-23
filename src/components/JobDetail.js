// src/components/JobDetails.js
import React from 'react';

function JobDetails({ job }) {
  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      {/* Add more details */}
    </div>
  );
}

export default JobDetails;
