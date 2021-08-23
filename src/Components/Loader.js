import React from "react"
import styled from "styled-components"

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display : flex;
  font-size: 20px;
  justify-content: center;
  align-items: center;
`;

function Loader () { 
  return (
    <Container>
      Loading...
    </Container>
  )
}

export default Loader;