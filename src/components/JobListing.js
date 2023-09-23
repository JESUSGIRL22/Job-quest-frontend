// src/components/JobListing.js
import React from 'react';

function JobListing({ job }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{job.title}</h5>
        <p className="card-text">{job.company}</p>
        {/* Add more details */}
      </div>
    </div>
  );
}

export default JobListing;
