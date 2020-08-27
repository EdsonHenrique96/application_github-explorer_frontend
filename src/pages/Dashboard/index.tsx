import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';
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

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const handleAddRepository = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    const response = await api.get<Repository>(`/repos/${newRepo}`);

    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewRepo('');
  };

  return (
    <>
      <img src={githubExplorerLogo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form onSubmit={handleAddRepository}>
        <input
          type="text"
          placeholder="Nome do repositório"
          onChange={e => setNewRepo(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

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
