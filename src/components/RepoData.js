import React from "react";
import { Link } from "react-router-dom";

const RepoData = ({ repo }) => {
  return (
    <div className="home">
      <div className="home-cont">
        <h1>
          <span className="span">Repo:</span> {`${repo.name}`}
        </h1>
        <h3>
          <span className="span">Stack: </span> {`${repo.language}`}
        </h3>
        <div className="error-btn">
          <Link to={`/repos/${repo.id}`} className="btn">
            CheckOut Repo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RepoData;
