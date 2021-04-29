import { LitElement, html} from 'lit-element';
import { we4eStyles} from './styles/we4e-styles.js';
import './elements/page_headers.js';
import './elements/page_footers.js';
import './elements/menu_tile.js'

export class We4eV2 extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      content: {type: String},
    };
  }

  static get styles() {
    return [
      we4eStyles,
    ]
  }

  constructor() {
    super();
    this.title = '';
    this.content = 'Some text';
  }

  appsGrid() {
    return html`
      <main><p>${this.content}</p></main>
    `;
  }

  render() {
    return html`
      <header-element page-title=${this.title}></header-element>
      ${this.appsGrid()}
      <footer-element></footer-element>
    `;
  }
}
