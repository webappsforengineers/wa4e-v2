import { html } from 'lit';
import { StyledElement } from '../../styles/wa4eStyleElement.mjs';

export class SubmitButtonNoSpinner extends StyledElement {
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

  _onClick() {
    this.toggleLoading();

    // wait some amount of time before calling appCalc so the state can
    // update before the UI freezes
    const myWaitCalc = () => {
      this.appCalc();
    };

    setTimeout(myWaitCalc, 50);
  }

  render() {
    let renderedButton;
    if (this.isLoading) {
      renderedButton = html`
        <button
          class="btn btn-secondary col-sm-12 col-md-12"
          disabled
          @click=${this._onClick}
        >
          SUBMITTED
        </button>
      `;
    } else {
      renderedButton = html`
        <button
          class="btn col-sm-12 col-md-12"
          style="background-color: #c1d100; color: #00557f"
          @click=${this._onClick}
        >
          SUBMIT
        </button>
      `;
    }

    return html` ${renderedButton} `;
  }
}

customElements.define('submit-button-no-spinner', SubmitButtonNoSpinner);
