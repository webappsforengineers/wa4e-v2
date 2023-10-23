import { html } from 'lit';
import { TileBase } from './tileBase.mjs';

class tableTile extends TileBase {
  render() {
    this.tableContent = this.appConf.content;
    this.htmlTableContent = this.arrangeTable();
    return [
      super.render(),
      html`
        <div class="table-responsive">
          <table class="table mb-1 mt-1">
            ${this.htmlTableContent}
          </table>
        </div>
      `,
    ];
  }

  arrangeTable() {
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