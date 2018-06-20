import React from 'react';
import styled from 'styled-components';

const SIZE=8;

const BalloonCircle = styled.div`
  width: ${SIZE}rem;
  height: ${SIZE}rem;
  background-color: rebeccapurple;
  border-radius: ${SIZE}rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: white;
  font-family: 'Open Sans Condensed', sans-serif !important;
  font-size: 2rem;
`

export default class Balloon extends React.Component {
  render() {
    return (
      <BalloonCircle>Balloon</BalloonCircle>
    )
  }
}
