import { css } from "lit";

const appContainerStyle = css`
  #card {
    width: 94vw;
    min-height: auto;
    background-color: #fff;
    background-image: url('/images/bg-pattern-mobile.svg');
    background-repeat: no-repeat;
    background-position: top center;
    position: relative;
    border-radius: 25pt;
    padding: 0 30px 40px 30px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 130px;
    box-shadow: 0 20px 50px 0 var(--text-dark);
  }

  header {
    text-align: center;
    margin-bottom: 15px;
  }

  .title {
    margin-top: 20px;
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    font-size: 2.6rem;
    font-weight: 700;
    color: var(--text-dark);
  }

  header picture > img {
    height: auto;
    width: fit-content;
    margin-top: -110px;
    margin-left: -30px;
  }

  #box {
    display: none;
  }

  .options {
    width: 100%;
    height: auto;
  }

  @media (min-width: 500px) {
    #card {
      width: 480px;
    }
  }

  @media (min-width: 1005px) {
    #card {
      flex-direction: row;
      justify-content: space-between;
      width: 900px;
      height: 500px;
      margin: 0;
      background-image: url('/images/bg-pattern-desktop.svg');
      background-size: auto 800px;
      background-repeat: no-repeat;
      background-position: top -200px  left -440px ;
    }

    header {
      position: relative;
    }

    header picture > img {
      height: auto;
      width: fit-content;
      margin-top: 0;
      margin-left: -120px;
      Clip-path: inset(0px 0px 0px 90px);
    }

    #box {
      display: block;
      position: absolute;
      top: 35%;
      left: -123px;
      z-index: 999;
    }

    .title {
      text-align: left;
      margin-top: 0m;
    }

    .options {
      width: 400px;
      padding-right: 30px;
    }
  }
`;

export default appContainerStyle;
