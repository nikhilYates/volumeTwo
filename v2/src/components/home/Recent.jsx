import React from "react";

const Recent = () => {
  const workData = require('../../assets/info/work.json');

  const recentExperiences = workData.recent.map((job, index) => {
    const isActive = job["end-date"].toLowerCase() === "present";
    const cardClass = isActive ? "recent-card-active" : "recent-card-inactive";

    return (
      <div key={index} className={`recent-card ${cardClass}`}>
        <h2>{job.title}</h2>
        <h3>{job.company}</h3>
      </div>
    );
  });

  return (
    <div className="recent-container">
      {recentExperiences}
    </div>
  );
};

export default Recent;