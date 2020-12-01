import styled from "styled-components";

const _tablet = (css: string) => {
  return `@media only screen and (min-width: 500px){
    ${css}
  }`;
};

const TabletStyles = styled.div`
  color: red;
`


export const HomeWrapper = styled.div`
  background: inherit;
`;

export const HeaderStyles = styled.section`
  display: block;
  margin: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 900px) {
    .logo img {
      height: 70px;
    }
  }

  @media only screen and (max-width: 500px) {
    .logo img {
      height: 70px;
    }
  }
`;

export const MainStyles = styled.section`
  margin-left: 24px;
  margin-right: 20px;

  #header {
    font-size: 58px;
  }

  #main {
    .description {
      font-size: 28px;
      font-weight: 300;
      max-width: 500px;
    }

    .links {
      cursor: default;

      div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 16px;

        span {
          margin-left: 8px;
          font-size: 20px;
        }
      }
    }
  }

  /* @tablet*/
  @media (min-width: 768px){
    #header{
      font-size: 72px;
    }

    #main .description{
      max-width: 1000px;
    }
  }

  @media (min-width: 900px){
    #header{
      font-size: 84px;
    }
  }

`;