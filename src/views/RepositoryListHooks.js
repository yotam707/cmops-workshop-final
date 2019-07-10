import React from "react";
import useFetchRepositories from "../components/FetchRepositoriesHooks";
import Spinner from "../components/Spinner";

const Repository = ({ repository }) => {
  return (
    <li>
      <a href={repository.html_url}>{repository.full_name}</a>
    </li>
  );
};

const RepositoryList = ({ match }) => {
  
};

export default RepositoryList;
