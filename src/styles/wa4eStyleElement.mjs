import { LitElement } from 'lit';

// This class extends the base LitElement Class by adding createRenderRoot which
// allows bootstrap and masonry to work from a script tag import

export class StyledElement extends LitElement {
  // This applies styles by removing the shadowroots allowing the script tags on
  // index.html to work
  createRenderRoot() {
    return this;
  }

  // This is implemented using a style tag in the html I think its meant to be here?
  // static styles = css`
  //   /* Chrome, Safari, Edge, Opera */
  //   input::-webkit-outer-spin-button,
  //   input::-webkit-inner-spin-button {
  //     -webkit-appearance: none;
  //     margin: 0;
  //   }
  //
  //   /* Firefox */
  //   input[type=number] {
  //     -moz-appearance: textfield;
  //   }
  // `;
}
