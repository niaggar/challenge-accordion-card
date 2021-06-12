import { html, css, LitElement } from 'lit';

import cardContainerStyle from './card-container.style';
import resetStyle from '../../reset.style';

import imgDesktop from '../../../public/images/illustration-woman-online-desktop.svg';
import imgMobile from '../../../public/images/illustration-woman-online-mobile.svg';
import imgBox from '../../../public/images/illustration-box-desktop.svg';

import '../option-txt/option-txt'

class CardContainer extends LitElement {

  constructor() {
    super();
    this.options = [
      {
        title: 'How many team members can I invite?',
        text: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
      },
      {
        title: 'What is the maximum file upload size?',
        text: 'No more than 2GB. All files in your account must fit your allotted storage space.'
      },
      {
        title: 'How do I reset my password?',
        text: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
      },
      {
        title: 'Can I cancel my subscription?',
        text: 'Yes! Send us a message and we’ll process your request no questions asked.'
      },
      {
        title: 'Do you provide additional support?',
        text: 'Chat and email support is available 24/7. Phone lines are open during normal business hours'
      },
    ];
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
            ${this.options.map((option, index) => {
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
    
    // Verifica si se clickea la opcion activa
    if (id === this.active.last) {
      doc
        .getElementById(this.active.last)
        .classList
        .toggle('active');

      this.active.last = '';
      this.active.new = '';
    } else {
      // Agrega el estado activo a la opcion seleccionada
      doc
        .getElementById(this.active.new)
        .classList
        .toggle('active');
  
      // Desactiva la opcion anterior
      if (this.active.last != '')
        doc
          .getElementById(this.active.last)
          .classList
          .toggle('active');
  
      // Reinicia los valores de opcion seleccionada
      this.active.last = this.active.new;
      this.active.new = '';
    }
  }
}

customElements.define('card-container', CardContainer);
