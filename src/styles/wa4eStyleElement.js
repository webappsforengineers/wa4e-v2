import { LitElement, css, html } from 'lit';

const myStyles = css``;

// This class extends the base LitElement Class by applying the `myStyles` css
// and the bootstrap css via an external stylesheet

export class StyledElement extends LitElement {
  static get styles() {
    return [myStyles];
  }

  // This is not recommended  by lit and should be replaced by a Lit-Bootstrap module if/when it ever exists
  render() {
    const globalStyle = html`<link
      rel="stylesheet"
      href="../../node_modules/bootstrap/dist/css/bootstrap.css"
    />`;
    return [globalStyle, super.render()];
  }
}
