import styled from 'styled-components';

interface IView {
  zoom: number;
  width: number;
  height: number;
}

export const Container = styled.div`
  text-align: center;
  margin: 15px;
`;

export const Title = styled.h5`
  color: #f8f8f2;
  font-weight: bold;
`;

export const ViewContainer = styled.div<IView>`
  margin-top: 10px;

  width: ${(props) => `${props.width * props.zoom}px`};
  height: ${(props) => `${props.height * props.zoom}px`};
`;

export const View = styled('webview')<IView>`
  transform-origin: left top;
  border: 1px solid #c4c4c4;
  border-radius: 4;

  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  transform: ${(props) => `scale(${props.zoom})`};
`;
