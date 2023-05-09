import styled from "styled-components";

export const Wrapper = styled.header`
  background: linear-gradient(90deg, #fcddbc, #ef959d, #456979);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
  div {
    width: 33%;
    display: flex;
    justify-content: center;
  }
  .midias {
    display: block;
  }
  .midias div {
    width: 100%;
    justify-content: flex-start;
  }
  .midias img {
    width: 2rem;
    height: 2rem;
  }
  .midias a {
    margin: 0.1rem 0.3rem;
  }
  .midias p {
    margin-left: 0.3rem;
    font-weight: 500;
    color: #456979;
  }
  #logoCentral img {
    height: 72px;
    margin: 8px 0px 0px 0px;
  }
  #terceiradivdoheader {
    display: flex;
    justify-content: flex-end;
    a {
      color: #ffffff;
      text-decoration: none;
    }
  }
  .menu {
    display: flex;
  }
  .menu ul,
  li {
    list-style: none;
    font-size: 1.2rem;
  }
  header nav a {
    text-decoration: none;
    color: #ffffff;
    transition: 0.5s;
  }
  header nav a:hover {
    text-decoration: none;
    color: #fcddbc;
  }
  .menu li {
    margin-left: 1rem;
  }
  @media (max-width: 768px) {
    justify-content: space-between;

    #logoCentral img {
      height: 50px;
    }
    .midias {
      display: none;
    }
    #terceiradivdoheader {
      ul {
        display: flex;
        align-items: center;
      }
      a {
        color: #fcddbc;
        font-size: 1rem;
      }
    }
  }
`;
