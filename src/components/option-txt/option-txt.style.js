import { css } from 'lit';

const optionTxtStyle = css`
  :host(.active) .opt__main > h3 {
    color: var(--text-dark);
  }

  :host(.active) .opt__main > img {
    transform: rotate(180deg);
  }

  .opt-container {
    width: 100%;
    border-bottom: 1px solid var(--divider-gray);
    position: relative;
  }

  .opt__main {
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    position: relative;
    z-index: 999;
  }
  
  .opt__main > h3 {
    transition: color 0.4s;
  }

  .opt-container:hover h3 {
    color: #f37b36;
  }

  .opt__main img {
    width: 14px;
    transition: transform 0.4s;
  }

  .opt__more-txt {
    height: 0;
    overflow: hidden;
    transition: 
      height 0.3s ease-in-out, 
      padding-top 0.3s ease-in-out;
  }

  :host(.active) .opt__more-txt {
    height: 60px;
    padding-top: 5px;
  }
`;

export default optionTxtStyle;
