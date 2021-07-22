import { LitElement, css } from 'lit';

const myStyles = css``;

// This class extends the base LitElement Class by applying the `myStyles` css
// and the bootstrap css via an external stylesheet

export class StyledElement extends LitElement {
  static get styles() {
    return [myStyles];
  }

  // This applies styles by removing the shadowroots allowing the script tags on
  // index.html to work
  createRenderRoot() {
    return this;
  }
}
