import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.button`
  margin: 24px 0;
  background: #ff9000;
  border-radius: 10px;
  border: 0;
  width: 100%;
  height: 56px;
  color: #312e38;
  padding: 16px 0;
  font-weight: 500;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
