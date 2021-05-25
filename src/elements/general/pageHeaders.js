import { html, LitElement } from 'lit';
import {we4eStyles} from '../../styles/we4eStyles.js';

class headerTemplate extends LitElement{
  static get styles() {
    return [
      we4eStyles,
    ]
  }

  constructor() {
    super();
    this.homePage = '/public/index.html'
  }

  render() {
    return html`
      <header>
        <nav class='header'>
          <a href='${this.homePage}'><img src='/public/img/home.png' alt='Home'></a>
          <p class='title-font'>${this.getAttribute('page-title')}</p>
          <p class='header-font'>Web Apps for Engineers</p>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-element', headerTemplate);


