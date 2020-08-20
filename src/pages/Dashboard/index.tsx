import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';

import githubExplorerLogo from '../../assets/github-explorer-logo.svg'

const Dashboard: React.FC = () => (
  <>
    <img src={githubExplorerLogo} alt='Github Explorer'/>
    <Title>Explore repositórios no Github</Title>
    <Form>
      <input type='text' placeholder='Nome do repositório'/>
      <button>Pesquisar</button>
    </Form>

    <Repositories>
      <a href="test">
        <img src='https://avatars2.githubusercontent.com/u/30643630?s=460&u=d87bede43db962a5aed9d352e0a18c53ccd57c73&v=4' alt='Edson Henrique'/>
        <div>
          <strong>application_github-explorer</strong>
          <p>Um frontend ai</p>
        </div>

        <FiChevronRight size={20}/>
      </a>

      <a href="test">
        <img src='https://avatars2.githubusercontent.com/u/30643630?s=460&u=d87bede43db962a5aed9d352e0a18c53ccd57c73&v=4' alt='Edson Henrique'/>
        <div>
          <strong>application_github-explorer</strong>
          <p>Um frontend ai</p>
        </div>

        <FiChevronRight size={20}/>
      </a>
      
      <a href="test">
        <img src='https://avatars2.githubusercontent.com/u/30643630?s=460&u=d87bede43db962a5aed9d352e0a18c53ccd57c73&v=4' alt='Edson Henrique'/>
        <div>
          <strong>application_github-explorer</strong>
          <p>Um frontend ai</p>
        </div>

        <FiChevronRight size={20}/>
      </a>
    </Repositories>
  </>
)

export default Dashboard;