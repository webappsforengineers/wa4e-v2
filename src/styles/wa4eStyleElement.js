import {LitElement, css} from 'lit';


const myStyles = css`

`

export class StyledElement extends LitElement {
  static get styles() {
    return [
      myStyles,
      CSSResult()
    ];
  }
}
