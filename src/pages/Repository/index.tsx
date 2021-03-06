import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import githubExplorerLogo from '../../assets/github-explorer-logo.svg';

import { RepositoryHeader, RepositoryInfos, Issues } from './styles';
import api from '../../services/index';

interface RepositoryParam {
  repositoryPath: string;
}

interface Repository {
  name: string;
  description: string;
  url: string;
  full_name: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    avatar_url: string;
    login: string;
  };
}

interface Issue {
  html_url: string;
  id: number;
  title: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParam>();

  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    api
      .get(`/repos/${params.repositoryPath}`)
      .then(response => setRepository(response.data));

    api
      .get(`repos/${params.repositoryPath}/issues`)
      .then(response => setIssues(response.data));
  }, [params.repositoryPath]);

  return (
    <>
      <RepositoryHeader>
        <img src={githubExplorerLogo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size="18" />
          <p>voltar</p>
        </Link>
      </RepositoryHeader>
      {repository && (
        <>
          <RepositoryInfos>
            <header>
              <img
                src={repository.owner.avatar_url}
                alt={`Imagem de perfil do repositório ${repository.full_name}`}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
            </header>
            <ul>
              <li>
                <strong>{repository.stargazers_count}</strong>
                <p>Starts</p>
              </li>
              <li>
                <strong>{repository.forks_count}</strong>
                <p>Forks</p>
              </li>
              <li>
                <strong>{repository.open_issues_count}</strong>
                <p>Issues abertas</p>
              </li>
            </ul>
          </RepositoryInfos>
          <Issues>
            {issues.map(issue => (
              <Link to={issue.html_url} key={issue.id}>
                <div>
                  <strong>{issue.title}</strong>
                  <p>{issue.user.login}</p>
                </div>

                <FiChevronRight size={20} />
              </Link>
            ))}
          </Issues>
        </>
      )}
    </>
  );
};

export default Repository;
