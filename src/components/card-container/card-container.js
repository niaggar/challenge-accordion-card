import { html, css, LitElement } from 'lit';

import cardContainerStyle from './card-container.style';
import resetStyle from '../../reset.style';

import '../option-txt/option-txt';

import optionsFile from '../../options.json'

const imgDesktop = './images/illustration-woman-online-desktop.svg';
const imgMobile = './images/illustration-woman-online-mobile.svg';
const imgBox = './images/illustration-box-desktop.svg';

class CardContainer extends LitElement {

  constructor() {
    super();
    this.active = {
      new: '',
      last: '',
    };
  }

  static get styles() {
    return [
      resetStyle,
      cardContainerStyle
    ];
  }
  
  render() {
    return html`
      <article id="card">

        <header>
          <img id="box" src=${imgBox}>
          <picture>
            <source srcset=${imgMobile} media="(max-width: 1005px)">
            <img src=${imgDesktop} alt="Woman seeing a computer screen over a purle platform">
          </picture>
        </header>
        <div>
          <h1 class="title">FAQ</h1>
          <div class="options">
            ${optionsFile.options.map((option, index) => {
              return html`
                <option-txt
                  @click=${() => this.changeActive(`opt-${index}`)}
                  id=${`opt-${index}`} 
                  title=${option.title} 
                  text=${option.text}
                >
                </option-txt>
              `
            })}
          </div>
        </div>

      </article>
    `;
  }

  changeActive(id) {
    const doc = this.shadowRoot;
    this.active.new = id;
    
    if (id === this.active.last) {
      doc
        .getElementById(this.active.last)
        .classList
        .toggle('active');

      this.active.last = '';
      this.active.new = '';
    } else {
      doc
        .getElementById(this.active.new)
        .classList
        .toggle('active');
  
      if (this.active.last != '')
        doc
          .getElementById(this.active.last)
          .classList
          .toggle('active');
  
      this.active.last = this.active.new;
      this.active.new = '';
    }
  }
}

customElements.define('card-container', CardContainer);
