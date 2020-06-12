import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;

  h1 {
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
  }

  form {
    display: flex;
    height: 40px;
    margin-top: 10px;
  }

  input {
    width: 50vw;
    margin-right: 20px;
    border: 1px solid gray;
    padding: 0 20px;
    border-radius: 5px;
  }

  textarea:focus,
  input:focus {
    outline: none;
    border: 2px solid #6272a4 !important;
  }

  button {
    width: 60px;
    border: 0;
    cursor: pointer;
    color: #282a36;
    border-radius: 5px;
    background-color: #bd93f9;
  }

  button:focus {
    outline: none !important;
  }
`;
