import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow: hidden;
`;
export const Title = styled.div`
  font-weight: 600;
`;
export const Bar = styled.div`
  height: 12px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`;
export const Progress = styled.div`
  border-radius: 6px;
  height: 100%;
`;
export const Status = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
`;
