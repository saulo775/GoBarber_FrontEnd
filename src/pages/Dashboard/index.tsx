import React from 'react';
import { FiPower } from 'react-icons/fi';

import { Container, Header, HeaderContent, Profile } from './styles';
import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img
              src="https://avatars.githubusercontent.com/u/59702227?s=400&u=99d4a540a794af983edf99e94cc1505734a18e14&v=4"
              alt="Saulo"
              /* src={user.avatar_url}
                 alt={user.name}
              */
            />

            <div>
              <span>Bem Vindo</span>
              <strong>Saulo victor</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Dashboard;
