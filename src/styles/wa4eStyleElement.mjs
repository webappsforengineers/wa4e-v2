import { LitElement } from 'lit';

// This class extends the base LitElement Class by adding createRenderRoot which
// allows bootstrap and masonry to work from a script tag import

export class StyledElement extends LitElement {
  // This applies styles by removing the shadowroots allowing the script tags on
  // index.html to work
  createRenderRoot() {
    return this;
  }
}
