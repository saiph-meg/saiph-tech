import styled from "styled-components";

export const Card = styled.div`
  background-color: white;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.075), 0px 1px 3px rgba(0, 0, 0, 0.125);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  position: relative;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    text-transform: uppercase;
  }
`;

export const CardHeader = styled.div`
  border-radius: 7px 7px 0 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  padding: calc(1.25rem * 0.75) 1.25rem;
  display: flex;
  align-items: center;
  small {
    display: block;
    opacity: 0.5;
  }
`;
export const CardFooter = styled.div`
  border-radius: 0 0 7px 7px;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  padding: calc(1.25rem * 0.75) 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
`;

export const CardController = styled.div`
  margin-left: auto;
`;

export const CardBody = styled.div`
  padding: calc(1.25rem * 0.75) 1.25rem;
`;
