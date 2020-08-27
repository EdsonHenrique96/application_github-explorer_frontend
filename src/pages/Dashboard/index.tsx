import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Error, Repositories } from './styles';
import githubExplorerLogo from '../../assets/github-explorer-logo.svg';

import api from '../../services';

interface Repository {
  name: string;
  description: string;
  url: string;
  full_name: string;
  owner: {
    avatar_url: string;
    login: string;
  };
}

const localStorageFieldName = '@GithubExplorer:repositories';

const getInitialValueFromLocalStorage = (): Repository[] => {
  const localStorageData = localStorage.getItem(localStorageFieldName);

  if (localStorageData) {
    return JSON.parse(localStorageData);
  }
  return [];
};

const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(
    getInitialValueFromLocalStorage,
  );

  useEffect(() => {
    localStorage.setItem(localStorageFieldName, JSON.stringify(repositories));
  }, [repositories]);

  const handleAddRepository = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o um valor, exemplo: facebook/react');
      return;
    }

    try {
      const response = await api.get<Repository>(`/repos/${newRepo}`);
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (error) {
      setInputError('Ocorreu algum erro ao busca o repositório');
    }
  };

  return (
    <>
      <img src={githubExplorerLogo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          type="text"
          placeholder="Nome do repositório"
          onChange={e => setNewRepo(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repo => (
          <a href="test" key={repo.full_name}>
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
