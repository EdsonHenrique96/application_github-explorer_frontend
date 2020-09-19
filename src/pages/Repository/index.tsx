import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import githubExplorerLogo from '../../assets/github-explorer-logo.svg';

import { RepositoryHeader, RepositoryInfos, Issues } from './styles';

interface RepositoryParam {
  repositoryPath: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParam>();
  return (
    <>
      <RepositoryHeader>
        <img src={githubExplorerLogo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size="18" />
          <p>voltar</p>
        </Link>
      </RepositoryHeader>
      <RepositoryInfos>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/896160?v=4"
            alt="Imagem de perfil do repositório"
          />
          <div>
            <strong>catho/Quantum</strong>
            <p>Descrição do repo</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <p>Starts</p>
          </li>
          <li>
            <strong>48</strong>
            <p>Forks</p>
          </li>
          <li>
            <strong>67</strong>
            <p>Issues abertas</p>
          </li>
        </ul>
      </RepositoryInfos>
      <Issues>
        <Link to="/">
          <div>
            <strong>repo.full_name</strong>
            <p>repo.description</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
