import { LitElement, html, css } from 'lit';

import resetStyle from '../../reset.style';
import optionTxtStyle from './option-txt.style';

const rowicon = './images/icon-arrow-down.svg';

class OptionTxt extends LitElement {
  static get styles() {
    return [
      resetStyle,
      optionTxtStyle,
    ]
  }

  static get properties() {
    return { 
      title: String,
      text: String,
    };
  }

  constructor() {
    super();
    this.title = 'ERR: no title';
    this.text = 'ERR: no text';
  }

  render() {
    return html`
      <div class="opt-container">
        <div class="opt__main">
          <h3>${this.title}</h3>
          <img src=${rowicon}>
        </div>

        <div class="opt__more-txt">
          <p>${this.text}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('option-txt', OptionTxt);
