import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';
import githubExplorerLogo from '../../assets/github-explorer-logo.svg';

import api from '../../services';

interface Repository {
  name: string;
  description: string;
  url: string;
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
        <a href="test">
          <img
            src="https://avatars2.githubusercontent.com/u/30643630?s=460&u=d87bede43db962a5aed9d352e0a18c53ccd57c73&v=4"
            alt="Edson Henrique"
          />
          <div>
            <strong>application_github-explorer</strong>
            <p>Um frontend ai</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
