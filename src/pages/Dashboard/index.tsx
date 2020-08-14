import React from 'react';
import { Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github" />
            <Title>Explore Repositórios no Github</Title>
            <Form action="">
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>
            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars2.githubusercontent.com/u/23082247?s=460&u=735577d38c1eb13e5f0528df0c26c11ad0e86cab&v=4"
                        alt=""
                    ></img>
                    <div>
                        <strong>Projeto Adriany</strong>
                        <p>Descrição</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
