import { html } from 'lit';
import { TileBase } from './tileBase.js';

class tableTile extends TileBase {
  render() {
    this.tableContent = this.appConf.content;
    this.htmlTableContent = this.arrangeFields();
    return [
      super.render(),
      html`
        <table class="table">
          ${this.htmlTableContent}
        </table>
      `,
    ];
  }

  arrangeFields() {
    return html`${Object.values(this.tableContent).map(rowValues => {
      const htmlRow = html`
        <tr>
          ${rowValues.map(value => html`<td>${value}</td>`)}
        </tr>
      `;
      return htmlRow;
    })}`;
  }
}

customElements.define('table-tile', tableTile);
