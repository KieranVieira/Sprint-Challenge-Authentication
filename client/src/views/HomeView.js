import React, { Component } from 'react'
import styled from 'styled-components';

const HomeContainer = styled.div`
    h1{
        font-weight: 100;
        text-align: center;
    }
`;

export class HomeView extends Component {
  render() {
    return (
      <HomeContainer>
       <h1>HomePage</h1> 
      </HomeContainer>
    )
  }
}

export default HomeView