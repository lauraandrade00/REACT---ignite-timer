import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 60rem;  
  height: calc(100vh - 1rem);
  margin: 1rem auto;
  padding: 1.5rem;

  background: ${props => props.theme["gray-800"]};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`