import styled from "styled-components";

export const BottomHeaderWrapper = styled.div`
  width: 100%;
  height: 320px;
  background: #fafafa;
  opacity: 0.94;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.11);
  border-radius: 10px;
  text-align: center;
  padding: 4rem 1rem;

  & > h1 {
    font-weight: 600;
    font-size: 34px;
    line-height: 40px;
    color: #3f3d56;
  }
  & > p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    /* identical to box height */
    color: #3f3d56;
    margin-top: 1.4rem;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;

    & > img {
      width: 200px;
      height: auto;
      margin-left: 1rem;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 960px) {
    height: auto;

    & > h1 {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
    }
    & > p {
      font-size: 15px;
      margin-top: 0.5rem;
    }
    & > div {
      flex-direction: column;

      & > img {
        margin-top: 0.5rem;
        width: 150px;
      }
    }
  }
`;
