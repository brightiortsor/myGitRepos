import React from "react";
import { useEffect, useState } from "react";
import LoadingIcon from "../images/Loading_icon.gif";
import Profiles from "./Profiles.js";
import Pagination from "./Pagination";
import { PageUsers } from "./PageUsers";

export default function Repos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const URL = "https://api.github.com/users/brightiortsor/repos";

    const fetchUsers = async () => {
      setLoading(true);
      const response = await fetch(URL);
      const data = await response.json();
      setLoading(false);
      setRepos(data);
      console.log(data);

      setTotalPages(Math.ceil(data.length / PageUsers));
    };
    fetchUsers();
  }, []);

  const handleClick = (num) => {
    setPage(num);
  };

  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };
  const handleNext = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <div className="loader">
      {loading ? (
        <img src={LoadingIcon} alt="" />
      ) : (
        <div>
          <h1 className="title">Bright Iortsor's GitHub Repos</h1>
          <p className="pages">
            Page {page} of [{totalPages}]
          </p>
          <hr />
          <Profiles repos={repos} page={page} />
        </div>
      )}

      <Pagination
        totalPages={totalPages}
        handlePrev={handlePrev}
        handleClick={handleClick}
        handleNext={handleNext}
        disabledPrev={page <= 1}
        disabledNext={page >= totalPages}
      />
    </div>
  );
}
