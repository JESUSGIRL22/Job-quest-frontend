// src/components/JobBoard.js
import React, { useState } from 'react';
import JobList from './JobList';
import JobDetails from './JobDetails';

function JobBoard() {
  const [selectedJob, setSelectedJob] = useState(null);

  // Your code to fetch job listings and handle selection goes here

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <JobList />
        </div>
        <div className="col-md-8">
          {selectedJob ? <JobDetails job={selectedJob} /> : <p>Select a job to view details.</p>}
        </div>
      </div>
    </div>
  );
}

export default JobBoard;
