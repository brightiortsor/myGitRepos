import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
  }, []);

  return loading ? <div>Loading...</div> : (
    <div>
      <div>
        <h1>{repos.name} </h1>
      </div>
      <Link to="/repos">Back to repos</Link>
    </div>
  );
}
