import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  background-color: #282a36;
`;

export const ViewsContainer = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
  top: 100px !important;
`;
