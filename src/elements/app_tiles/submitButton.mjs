import { html } from 'lit';
import { StyledElement } from '../../styles/wa4eStyleElement.mjs';

export class SubmitButton extends StyledElement {
  static get properties() {
    return {
      isLoading: { type: Boolean },
      appCalc: { type: Function },
    };
  }

  constructor() {
    super();
    this.isLoading = false;
  }

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }

  async _onClick() {
    // this.toggleLoading()
    // .then(await this.appCalc())
    // .then(this.toggleLoading());
    this.toggleLoading();

    // wait some amount of time before calling appCalc so the state can
    // update before the UI freezes
    const myWait = () => {
      this.appCalc();
      this.toggleLoading();
    };
    setTimeout(myWait, 50);
  }

  render() {
    return html`
      <button
        class="btn col-sm-12 col-md-12"
        style="background-color: #c1d100; color: #00557f"
        @click=${this._onClick}
      >
        ${this.isLoading
          ? html`<span class="spinner-border spinner-border-sm"></span> `
          : html`SUBMIT`}
      </button>
    `;
  }
}

customElements.define('submit-button', SubmitButton);
