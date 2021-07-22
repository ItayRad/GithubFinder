import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  const updateDate = new Date(repo.updated_at).toLocaleDateString();
  return (
    <div className="card all-center">
      <h3>
        <a href={repo.html_url}> {repo.name}</a>
      </h3>
      <h6>Last Updated: {updateDate}</h6>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
