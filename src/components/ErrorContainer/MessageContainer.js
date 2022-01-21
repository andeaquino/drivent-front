import styled from "styled-components";

export default styled.div`
  height: calc(100% - 100px);
  width: 100%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  overflow: hidden;
  color: #8E8E8E;

  p {
    max-width: 400px;
    overflow-wrap: break-word;
  }
`;
