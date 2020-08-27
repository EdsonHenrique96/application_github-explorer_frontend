import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepositoryParam {
  repositoryPath: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParam>();
  return <h1>{`Repository - ${params.repositoryPath}`}</h1>;
};

export default Repository;
