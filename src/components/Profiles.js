import React from "react";
import { PageUsers } from "./PageUsers.js";
import RepoData from "./RepoData.js";

const Profiles = ({ repos, page }) => {
  const startIndex = (page - 1) * PageUsers;
  const selectedUsers = repos.slice(startIndex, startIndex + PageUsers);

  return selectedUsers.map((repo) => <RepoData repo={repo} key={repo.id} />);
};

export default Profiles;
