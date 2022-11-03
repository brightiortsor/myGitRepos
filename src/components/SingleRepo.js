import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SingleRepo() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userId } = useParams();

  useEffect(() => {
    const URL = `https://api.github.com/users/brightiortsor/repos`;
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

  return (
    <div>
      <div>
        <h1></h1>
      </div>
      <Link to="/repos">Back to repos</Link>
    </div>
  );
}
