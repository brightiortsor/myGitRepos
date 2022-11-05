import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

export default function SingleRepo() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userId } = useParams();

  useEffect(() => {
    const URL = `https://api.github.com/repos/brightiortsor/${userId}`;
    const fetchUsers = async () => {
      setLoading(true);
      const response = await fetch(URL);
      const data = await response.json();
      setLoading(false);
      setRepos(data);
      console.log(data);
    };
    fetchUsers();
  }, [userId]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="home">
      <Helmet>
        <title>Repo Details</title>
        <meta
          name="description"
          content="This is the error page for handling any possible errors during an api call"
        />
        <link rel="canonical" href="/error" />
      </Helmet>

      <div className="home-cont home-cont-div">
        <h1 className="home--header">Repo Details</h1>
        <hr />
        <p>Repo Name: {repos.name} </p>
        <p>Repo Full_Name: {repos.full_name} </p>
        <p>Node ID: {repos.node_id} </p>
        <p>Visibility: {repos.visibility} </p>
        <p>Forks: {repos.forks} </p>
        <p>Subscribers: {repos.subscribers_count} </p>
        <p>Size: {repos.size} </p>
        <p>
          GitHub Link:{" "}
          <a href={repos.html_url} className="repo--link">
            {repos.html_url}
          </a>
        </p>

        <p className="date">Created: {repos.created_at} </p>
        <hr />
        <div className="error-btn">
          <Link to="/repos" className="btn">
            Back to repos
          </Link>
        </div>
      </div>
    </div>
  );
}
