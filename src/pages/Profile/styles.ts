import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
  > header {
    height: 144px;
    background: #28262e;
    display: flex;
    align-items: center;

    div {
      width: 100%;
      max-width: 1120;
      margin: 0 auto;

      svg {
        color: #999591;
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
  margin: -100px auto 0;

  form {
    margin-bottom: 80px 0;
    font-size: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 24px;
      color: #f4ede8;
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      transition: color 0.2s;
      text-decoration: none;
      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  input[name='old_password'] {
    margin-top: 24px;
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 36px;
  position: relative;
  width: 186px;
  align-self: center;

  img {
    width: 186px;
    height: 186px;

    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #ff9000;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }
    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }
    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;
