import styled from "styled-components";

export const Wrapper = styled.footer`
  color: #ffffff;
  background-color: #456979;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  .enderecos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  i {
    color: #ef959d;
  }
  span {
    padding: 10px;
  }
  #logookayrodape {
    filter: invert(1);
  }
  .entreemcontato {
    display: none;
  }
`;
